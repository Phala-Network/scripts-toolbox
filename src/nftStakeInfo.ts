import * as $ from 'subshape'
import {logger} from './utils/logger'
import {createPhalaApi} from './utils/phalaApi'

const chain = 'phala'
const cid = 10008
const nftId = 167

const $stakeInfo = $.object($.field('shares', $.u64))
const stakeInfoToShares = (stakeInfo: Uint8Array): bigint =>
  $stakeInfo.decode(stakeInfo).shares

const api = await createPhalaApi(chain)
const nftStakeInfo = await api.query.rmrkCore.properties(
  cid,
  nftId,
  'stake-info',
)

logger.info(stakeInfoToShares(nftStakeInfo.unwrap()))
