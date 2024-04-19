import {GraphQLClient} from 'graphql-request'
import type {Chain} from './phalaApi'

export const computationClient: Record<Chain, GraphQLClient> = {
  phala: new GraphQLClient(
    'https://subsquid.phala.network/phala-computation/graphql',
  ),
  khala: new GraphQLClient(
    'https://subsquid.phala.network/khala-computation/graphql',
  ),
}

export const circulationClient: Record<Chain | 'ethereum', GraphQLClient> = {
  phala: new GraphQLClient(
    'https://subsquid.phala.network/phala-circulation/graphql',
  ),
  khala: new GraphQLClient(
    'https://subsquid.phala.network/khala-circulation/graphql',
  ),
  ethereum: new GraphQLClient(
    'https://subsquid.phala.network/ethereum-pha-circulation/graphql',
  ),
}

export const phatClient = new GraphQLClient(
  'https://subsquid.phala.network/phat-contract-squid/graphql',
)

export const offchainClient = new GraphQLClient(
  'https://subsquid.phala.network/phat-offchain/v1/graphql',
)
