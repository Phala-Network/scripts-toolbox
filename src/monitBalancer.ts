import {differenceInMinutes} from 'date-fns'
import type {GraphQLClient} from 'graphql-request'
import {getSdk} from './gql/computation'
import {computationClient} from './utils'

const checkTokenomicUpdatedTime = async (client: GraphQLClient) => {
  const sdk = getSdk(client)
  const data = await sdk.TokenomicUpdatedTime()
  const tokenomicUpdatedTime = data.globalStateById?.tokenomicUpdatedTime
  if (
    !tokenomicUpdatedTime ||
    differenceInMinutes(new Date(), tokenomicUpdatedTime) > 24 * 60 + 15
  ) {
    return false
  }
  return true
}

const main = async (): Promise<boolean> => {
  const res = await Promise.all([
    checkTokenomicUpdatedTime(computationClient.phala),
    checkTokenomicUpdatedTime(computationClient.khala),
  ])
  return res.every(Boolean)
}

process.exit((await main()) ? 0 : 1)
