import {Keyring} from '@polkadot/keyring'
import {waitReady} from '@polkadot/wasm-crypto'
import {CronJob} from 'cron'
import {addDays} from 'date-fns'
import * as _ from 'radash'
import {getSdk} from './gql/computation'
import {assertNotNull, computationClient, createPhalaApi, logger} from './utils'

const THRESHOLD = '0.001'

const main = async (): Promise<void> => {
  const chain = assertNotNull(process.env.CHAIN) as 'phala' | 'khala'
  logger.info(chain)
  await waitReady()
  const keyring = new Keyring({type: 'sr25519'})
  const pair = keyring.addFromMnemonic(process.env.MNEMONIC as string)
  const api = await createPhalaApi(chain)
  const sdk = getSdk(computationClient[chain])

  const reclaimableWorkers = await sdk
    .ReclaimableWorkers({
      orderBy: 'id_ASC',
      where: {
        session: {
          state_eq: 'WorkerCoolingDown',
          coolingDownStartTime_lt: addDays(new Date(), -7).toISOString(),
        },
      },
      first: 999,
    })
    .then((r) => r.workersConnection.edges.map(({node}) => node))

  if (reclaimableWorkers.length > 0) {
    logger.info('Reclaim workers')
    const workersClusters = _.cluster(reclaimableWorkers, 100)
    for (const cluster of workersClusters) {
      await api.tx.utility
        .batchAll(
          cluster.map((w) =>
            api.tx.phalaStakePoolv2.reclaimPoolWorker(
              w.stakePool?.id as string,
              w.id,
            ),
          ),
        )
        .signAndSend(pair, {nonce: -1})
    }
  }

  const basePools = await sdk
    .BasePools({
      orderBy: 'pid_ASC',
      first: 5000,
      where: {
        AND: [
          {withdrawingValue_gt: THRESHOLD},
          {
            OR: [
              {freeValue_gt: THRESHOLD},
              {
                AND: [
                  {
                    OR: [
                      {kind_eq: 'Vault'},
                      {
                        kind_eq: 'StakePool',
                        stakePool: {
                          workers_some: {
                            session: {
                              state_in: ['WorkerIdle', 'WorkerUnresponsive'],
                            },
                          },
                        },
                      },
                    ],
                  },
                  {
                    delegations_some: {
                      withdrawingValue_gt: THRESHOLD,
                      withdrawalStartTime_lt: addDays(
                        new Date(),
                        -7,
                      ).toISOString(),
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    })
    .then((r) => r.basePoolsConnection.edges.map(({node}) => node))

  const stakePools = new Set<string>()
  const vaults = new Set<string>()

  for (const basePool of basePools) {
    if (basePool.kind === 'StakePool') {
      stakePools.add(basePool.id)
    } else {
      vaults.add(basePool.id)
    }
  }

  if (stakePools.size > 0) {
    const stakePoolsArr = [...stakePools]
    logger.info(`StakePools ${JSON.stringify(stakePoolsArr)}`)
    const stakePoolsClusters = _.cluster(stakePoolsArr, 100)
    for (const cluster of stakePoolsClusters) {
      await api.tx.utility
        .batchAll(
          cluster.map((id) =>
            api.tx.phalaStakePoolv2.checkAndMaybeForceWithdraw(id),
          ),
        )
        .signAndSend(pair, {nonce: -1})
    }
  }

  if (vaults.size > 0) {
    const vaultsArr = [...vaults]
    logger.info(`Vaults ${JSON.stringify(vaultsArr)}`)
    const vaultsClusters = _.cluster(vaultsArr, 100)
    for (const cluster of vaultsClusters) {
      await api.tx.utility
        .batchAll(
          cluster.map((id) => api.tx.phalaVault.checkAndMaybeForceWithdraw(id)),
        )
        .signAndSend(pair, {nonce: -1})
    }
  }
}

const job = new CronJob(
  '0 * * * *',
  () => {
    void main()
  },
  null,
  null,
  'utc',
)

job.start()

logger.info('Started')
