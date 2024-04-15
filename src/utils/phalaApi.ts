import {ApiPromise, HttpProvider} from '@polkadot/api'

const endpoint = {
  khala: 'https://khala-rpc.dwellir.com',
  phala: 'https://phala-rpc.dwellir.com',
} as const

export type Chain = keyof typeof endpoint

export const createPhalaApi = async (chain: Chain): Promise<ApiPromise> =>
  await ApiPromise.create({
    provider: new HttpProvider(endpoint[chain]),
    noInitWarn: true,
  })
