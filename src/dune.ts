import assert from 'node:assert'
import {Parser} from '@json2csv/plainjs'
import {CronJob} from 'cron'
import {isBefore} from 'date-fns'
import Decimal from 'decimal.js'
import {GraphQLClient} from 'graphql-request'
import * as _ from 'radash'
import snakecaseKeys from 'snakecase-keys'
import wretch from 'wretch'
import {getSdk as getCirculationSdk} from './gql/circulation'
import {getSdk as getComputationSdk} from './gql/computation'
import {getSdk as getOffchainSdk} from './gql/offchain'
import {getSdk as getPhatSdk} from './gql/phat'
import {
  type Chain,
  assertNotNull,
  circulationClient,
  computationClient,
  logger,
  offchainClient,
  phatClient,
} from './utils'

Decimal.set({toExpNeg: -9e15, toExpPos: 9e15, precision: 50})

const fetchStats = async (chain: Chain) => {
  const sdk = getComputationSdk(computationClient[chain])
  const data = await sdk.GlobalStateAndSnapshots()
  assert(data.globalStateById)
  const edges = data.globalStateSnapshotsConnection.edges
  const dailyRewards = new Decimal(edges[0].node.cumulativeRewards)
    .minus(edges[1].node.cumulativeRewards)
    .toString()
  return {
    realtime: snakecaseKeys({
      chain: _.capitalize(chain),
      dailyRewards,
      ...data.globalStateById,
    }),
    snapshots: edges.map(({node}) => {
      const result = Object.fromEntries(
        Object.entries(node).map(([key, value]) => {
          const prefix = key === 'updatedTime' ? '' : `${chain}_`
          return [`${prefix}${_.snake(key)}`, value]
        }),
      )
      return result
    }),
  }
}

const fetchCirculation = async () => {
  interface PhalaCirculation {
    circulation: string
    crowdloan: string
    reward: string
    sygmaBridge: string
    timestamp: string
    totalIssuance: string
  }

  interface EthereumCirculation {
    circulation: string
    phalaChainBridge?: string
    khalaChainBridge?: string
    reward: string
    sygmaBridge: string
    timestamp: string
    totalSupply: string
  }

  const json: {
    phala: PhalaCirculation
    khala: PhalaCirculation
    ethereum: EthereumCirculation
    totalCirculation: string
  } = await fetch('https://pha-circulation-server.vercel.app/api/all').then(
    (r) => r.json(),
  )
  // biome-ignore lint/performance/noDelete: <explanation>
  delete json.ethereum.phalaChainBridge
  // biome-ignore lint/performance/noDelete: <explanation>
  delete json.ethereum.khalaChainBridge

  return snakecaseKeys(json)
}

const fetchCirculationSnapshot = async (chain: Chain | 'ethereum') => {
  const sdk = getCirculationSdk(circulationClient[chain])
  const data = await sdk.Snapshots()
  return data.snapshotsConnection.edges.map(({node}) => {
    return {
      updated_time: node.timestamp,
      [`${chain}_circulation`]: node.circulation,
    }
  })
}

const fetchPhatContract = async () => {
  const phatSdk = getPhatSdk(phatClient)
  const offchainSdk = getOffchainSdk(offchainClient)
  const phatMeta = await phatSdk.Meta()
  const offlineExecution = await offchainSdk.OfflineExecution()
  return {
    realtime: snakecaseKeys(assertNotNull(phatMeta.metaById)),
    snapshots: offlineExecution.phatOfflineExecution.map((data) =>
      snakecaseKeys(data),
    ),
  }
}

const update = async () => {
  const duneUpload = wretch('https://api.dune.com/api')
    .headers({
      'X-DUNE-API-KEY': assertNotNull(process.env.DUNE_API_KEY),
    })
    .url('/v1/table/upload/csv')

  logger.trace('Fetching computation data')
  const circulation = await fetchCirculation()
  const phalaStats = await fetchStats('phala')
  const khalaStats = await fetchStats('khala')
  const computationData = [
    {...circulation.phala, ...phalaStats.realtime},
    {...circulation.khala, ...khalaStats.realtime},
    {chain: 'Ethereum', ...circulation.ethereum},
  ]

  logger.trace('Uploading computation data')
  await duneUpload
    .json({
      data: new Parser().parse(computationData),
      table_name: 'phala_computation',
      is_private: false,
    })
    .post()

  logger.trace('Fetching circulation data')
  const phalaCirculationSnapshots = await fetchCirculationSnapshot('phala')
  const khalaCirculationSnapshots = await fetchCirculationSnapshot('khala')
  const ethereumCirculationSnapshots =
    await fetchCirculationSnapshot('ethereum')
  // MEMO: ethereum has more snapshots than phala and khala
  const snapshotsData = ethereumCirculationSnapshots.map(
    (ethereumCirculation, i) => {
      const phalaData = phalaStats.snapshots[i]
      const khalaData = khalaStats.snapshots[i]
      const phalaCirculation = phalaCirculationSnapshots[i]
      const khalaCirculation = khalaCirculationSnapshots[i]
      // Force check updated_time consistency
      for (const data of [
        phalaData,
        khalaData,
        phalaCirculation,
        khalaCirculation,
      ]) {
        if (data != null) {
          assert(data.updated_time === ethereumCirculation.updated_time)
        }
      }
      if (phalaData != null) {
        assert(phalaData.updated_time === khalaData.updated_time)
        // MEMO: ignore phala start period
        if (isBefore(phalaData.updated_time, '2023-05-12T00:00:00.000Z')) {
          // biome-ignore lint/performance/noDelete: <explanation>
          delete phalaData.phala_average_apr
          // biome-ignore lint/performance/noDelete: <explanation>
          delete phalaData.phala_budget_per_share
        }
      }
      return {
        ...ethereumCirculation,
        ...phalaCirculation,
        ...khalaCirculation,
        ...phalaData,
        ...khalaData,
      }
    },
  )

  logger.trace('Uploading computation snapshots data')
  await duneUpload
    .json({
      data: new Parser().parse(snapshotsData),
      table_name: 'phala_computation_snapshots',
      is_private: false,
    })
    .post()

  logger.trace('Fetching phat contract data')
  const phatData = await fetchPhatContract()

  logger.trace('Uploading phat contract data')
  await duneUpload
    .json({
      data: new Parser().parse(phatData.realtime),
      table_name: 'phala_phat_contract',
      is_private: false,
    })
    .post()

  logger.trace('Uploading phat contract snapshots data')
  await duneUpload
    .json({
      data: new Parser().parse(phatData.snapshots),
      table_name: 'phala_phat_contract_snapshots',
      is_private: false,
    })
    .post()
}

await update()

const job = new CronJob('0 * * * *', update)

job.start()
