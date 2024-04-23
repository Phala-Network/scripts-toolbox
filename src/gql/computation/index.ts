import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: string; output: string; }
  BigInt: { input: string; output: string; }
  DateTime: { input: string; output: string; }
};

type Account = {
  basePool?: Maybe<BasePool>;
  cumulativeStakePoolOwnerRewards: Scalars['BigDecimal']['output'];
  cumulativeVaultOwnerRewards: Scalars['BigDecimal']['output'];
  /** account address */
  id: Scalars['String']['output'];
  identityDisplay?: Maybe<Scalars['String']['output']>;
  identityJudgements?: Maybe<Array<IdentityJudgement>>;
  identityLevel?: Maybe<IdentityJudgement>;
  ownedPools: Array<BasePool>;
  stakePoolAvgAprMultiplier: Scalars['BigDecimal']['output'];
  stakePoolNftCount: Scalars['Int']['output'];
  stakePoolValue: Scalars['BigDecimal']['output'];
  vaultAvgAprMultiplier: Scalars['BigDecimal']['output'];
  vaultNftCount: Scalars['Int']['output'];
  vaultValue: Scalars['BigDecimal']['output'];
};


type AccountOwnedPoolsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BasePoolOrderByInput>>;
  where?: InputMaybe<BasePoolWhereInput>;
};

type AccountEdge = {
  cursor: Scalars['String']['output'];
  node: Account;
};

const AccountOrderByInput = {
  BasePoolAprMultiplierAsc: 'basePool_aprMultiplier_ASC',
  BasePoolAprMultiplierAscNullsFirst: 'basePool_aprMultiplier_ASC_NULLS_FIRST',
  BasePoolAprMultiplierDesc: 'basePool_aprMultiplier_DESC',
  BasePoolAprMultiplierDescNullsLast: 'basePool_aprMultiplier_DESC_NULLS_LAST',
  BasePoolCidAsc: 'basePool_cid_ASC',
  BasePoolCidAscNullsFirst: 'basePool_cid_ASC_NULLS_FIRST',
  BasePoolCidDesc: 'basePool_cid_DESC',
  BasePoolCidDescNullsLast: 'basePool_cid_DESC_NULLS_LAST',
  BasePoolCommissionAsc: 'basePool_commission_ASC',
  BasePoolCommissionAscNullsFirst: 'basePool_commission_ASC_NULLS_FIRST',
  BasePoolCommissionDesc: 'basePool_commission_DESC',
  BasePoolCommissionDescNullsLast: 'basePool_commission_DESC_NULLS_LAST',
  BasePoolCumulativeOwnerRewardsAsc: 'basePool_cumulativeOwnerRewards_ASC',
  BasePoolCumulativeOwnerRewardsAscNullsFirst: 'basePool_cumulativeOwnerRewards_ASC_NULLS_FIRST',
  BasePoolCumulativeOwnerRewardsDesc: 'basePool_cumulativeOwnerRewards_DESC',
  BasePoolCumulativeOwnerRewardsDescNullsLast: 'basePool_cumulativeOwnerRewards_DESC_NULLS_LAST',
  BasePoolDelegatorCountAsc: 'basePool_delegatorCount_ASC',
  BasePoolDelegatorCountAscNullsFirst: 'basePool_delegatorCount_ASC_NULLS_FIRST',
  BasePoolDelegatorCountDesc: 'basePool_delegatorCount_DESC',
  BasePoolDelegatorCountDescNullsLast: 'basePool_delegatorCount_DESC_NULLS_LAST',
  BasePoolFreeValueAsc: 'basePool_freeValue_ASC',
  BasePoolFreeValueAscNullsFirst: 'basePool_freeValue_ASC_NULLS_FIRST',
  BasePoolFreeValueDesc: 'basePool_freeValue_DESC',
  BasePoolFreeValueDescNullsLast: 'basePool_freeValue_DESC_NULLS_LAST',
  BasePoolIdAsc: 'basePool_id_ASC',
  BasePoolIdAscNullsFirst: 'basePool_id_ASC_NULLS_FIRST',
  BasePoolIdDesc: 'basePool_id_DESC',
  BasePoolIdDescNullsLast: 'basePool_id_DESC_NULLS_LAST',
  BasePoolKindAsc: 'basePool_kind_ASC',
  BasePoolKindAscNullsFirst: 'basePool_kind_ASC_NULLS_FIRST',
  BasePoolKindDesc: 'basePool_kind_DESC',
  BasePoolKindDescNullsLast: 'basePool_kind_DESC_NULLS_LAST',
  BasePoolPidAsc: 'basePool_pid_ASC',
  BasePoolPidAscNullsFirst: 'basePool_pid_ASC_NULLS_FIRST',
  BasePoolPidDesc: 'basePool_pid_DESC',
  BasePoolPidDescNullsLast: 'basePool_pid_DESC_NULLS_LAST',
  BasePoolReleasingValueAsc: 'basePool_releasingValue_ASC',
  BasePoolReleasingValueAscNullsFirst: 'basePool_releasingValue_ASC_NULLS_FIRST',
  BasePoolReleasingValueDesc: 'basePool_releasingValue_DESC',
  BasePoolReleasingValueDescNullsLast: 'basePool_releasingValue_DESC_NULLS_LAST',
  BasePoolSharePriceAsc: 'basePool_sharePrice_ASC',
  BasePoolSharePriceAscNullsFirst: 'basePool_sharePrice_ASC_NULLS_FIRST',
  BasePoolSharePriceDesc: 'basePool_sharePrice_DESC',
  BasePoolSharePriceDescNullsLast: 'basePool_sharePrice_DESC_NULLS_LAST',
  BasePoolTotalSharesAsc: 'basePool_totalShares_ASC',
  BasePoolTotalSharesAscNullsFirst: 'basePool_totalShares_ASC_NULLS_FIRST',
  BasePoolTotalSharesDesc: 'basePool_totalShares_DESC',
  BasePoolTotalSharesDescNullsLast: 'basePool_totalShares_DESC_NULLS_LAST',
  BasePoolTotalValueAsc: 'basePool_totalValue_ASC',
  BasePoolTotalValueAscNullsFirst: 'basePool_totalValue_ASC_NULLS_FIRST',
  BasePoolTotalValueDesc: 'basePool_totalValue_DESC',
  BasePoolTotalValueDescNullsLast: 'basePool_totalValue_DESC_NULLS_LAST',
  BasePoolWhitelistEnabledAsc: 'basePool_whitelistEnabled_ASC',
  BasePoolWhitelistEnabledAscNullsFirst: 'basePool_whitelistEnabled_ASC_NULLS_FIRST',
  BasePoolWhitelistEnabledDesc: 'basePool_whitelistEnabled_DESC',
  BasePoolWhitelistEnabledDescNullsLast: 'basePool_whitelistEnabled_DESC_NULLS_LAST',
  BasePoolWithdrawingSharesAsc: 'basePool_withdrawingShares_ASC',
  BasePoolWithdrawingSharesAscNullsFirst: 'basePool_withdrawingShares_ASC_NULLS_FIRST',
  BasePoolWithdrawingSharesDesc: 'basePool_withdrawingShares_DESC',
  BasePoolWithdrawingSharesDescNullsLast: 'basePool_withdrawingShares_DESC_NULLS_LAST',
  BasePoolWithdrawingValueAsc: 'basePool_withdrawingValue_ASC',
  BasePoolWithdrawingValueAscNullsFirst: 'basePool_withdrawingValue_ASC_NULLS_FIRST',
  BasePoolWithdrawingValueDesc: 'basePool_withdrawingValue_DESC',
  BasePoolWithdrawingValueDescNullsLast: 'basePool_withdrawingValue_DESC_NULLS_LAST',
  CumulativeStakePoolOwnerRewardsAsc: 'cumulativeStakePoolOwnerRewards_ASC',
  CumulativeStakePoolOwnerRewardsAscNullsFirst: 'cumulativeStakePoolOwnerRewards_ASC_NULLS_FIRST',
  CumulativeStakePoolOwnerRewardsDesc: 'cumulativeStakePoolOwnerRewards_DESC',
  CumulativeStakePoolOwnerRewardsDescNullsLast: 'cumulativeStakePoolOwnerRewards_DESC_NULLS_LAST',
  CumulativeVaultOwnerRewardsAsc: 'cumulativeVaultOwnerRewards_ASC',
  CumulativeVaultOwnerRewardsAscNullsFirst: 'cumulativeVaultOwnerRewards_ASC_NULLS_FIRST',
  CumulativeVaultOwnerRewardsDesc: 'cumulativeVaultOwnerRewards_DESC',
  CumulativeVaultOwnerRewardsDescNullsLast: 'cumulativeVaultOwnerRewards_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  IdentityDisplayAsc: 'identityDisplay_ASC',
  IdentityDisplayAscNullsFirst: 'identityDisplay_ASC_NULLS_FIRST',
  IdentityDisplayDesc: 'identityDisplay_DESC',
  IdentityDisplayDescNullsLast: 'identityDisplay_DESC_NULLS_LAST',
  IdentityLevelAsc: 'identityLevel_ASC',
  IdentityLevelAscNullsFirst: 'identityLevel_ASC_NULLS_FIRST',
  IdentityLevelDesc: 'identityLevel_DESC',
  IdentityLevelDescNullsLast: 'identityLevel_DESC_NULLS_LAST',
  StakePoolAvgAprMultiplierAsc: 'stakePoolAvgAprMultiplier_ASC',
  StakePoolAvgAprMultiplierAscNullsFirst: 'stakePoolAvgAprMultiplier_ASC_NULLS_FIRST',
  StakePoolAvgAprMultiplierDesc: 'stakePoolAvgAprMultiplier_DESC',
  StakePoolAvgAprMultiplierDescNullsLast: 'stakePoolAvgAprMultiplier_DESC_NULLS_LAST',
  StakePoolNftCountAsc: 'stakePoolNftCount_ASC',
  StakePoolNftCountAscNullsFirst: 'stakePoolNftCount_ASC_NULLS_FIRST',
  StakePoolNftCountDesc: 'stakePoolNftCount_DESC',
  StakePoolNftCountDescNullsLast: 'stakePoolNftCount_DESC_NULLS_LAST',
  StakePoolValueAsc: 'stakePoolValue_ASC',
  StakePoolValueAscNullsFirst: 'stakePoolValue_ASC_NULLS_FIRST',
  StakePoolValueDesc: 'stakePoolValue_DESC',
  StakePoolValueDescNullsLast: 'stakePoolValue_DESC_NULLS_LAST',
  VaultAvgAprMultiplierAsc: 'vaultAvgAprMultiplier_ASC',
  VaultAvgAprMultiplierAscNullsFirst: 'vaultAvgAprMultiplier_ASC_NULLS_FIRST',
  VaultAvgAprMultiplierDesc: 'vaultAvgAprMultiplier_DESC',
  VaultAvgAprMultiplierDescNullsLast: 'vaultAvgAprMultiplier_DESC_NULLS_LAST',
  VaultNftCountAsc: 'vaultNftCount_ASC',
  VaultNftCountAscNullsFirst: 'vaultNftCount_ASC_NULLS_FIRST',
  VaultNftCountDesc: 'vaultNftCount_DESC',
  VaultNftCountDescNullsLast: 'vaultNftCount_DESC_NULLS_LAST',
  VaultValueAsc: 'vaultValue_ASC',
  VaultValueAscNullsFirst: 'vaultValue_ASC_NULLS_FIRST',
  VaultValueDesc: 'vaultValue_DESC',
  VaultValueDescNullsLast: 'vaultValue_DESC_NULLS_LAST'
} as const;

export type AccountOrderByInput = typeof AccountOrderByInput[keyof typeof AccountOrderByInput];
type AccountSnapshot = {
  account: Scalars['String']['output'];
  cumulativeStakePoolOwnerRewards: Scalars['BigDecimal']['output'];
  cumulativeVaultOwnerRewards: Scalars['BigDecimal']['output'];
  delegationValue: Scalars['BigDecimal']['output'];
  id: Scalars['String']['output'];
  /** block time */
  updatedTime: Scalars['DateTime']['output'];
};

type AccountSnapshotEdge = {
  cursor: Scalars['String']['output'];
  node: AccountSnapshot;
};

const AccountSnapshotOrderByInput = {
  AccountAsc: 'account_ASC',
  AccountAscNullsFirst: 'account_ASC_NULLS_FIRST',
  AccountDesc: 'account_DESC',
  AccountDescNullsLast: 'account_DESC_NULLS_LAST',
  CumulativeStakePoolOwnerRewardsAsc: 'cumulativeStakePoolOwnerRewards_ASC',
  CumulativeStakePoolOwnerRewardsAscNullsFirst: 'cumulativeStakePoolOwnerRewards_ASC_NULLS_FIRST',
  CumulativeStakePoolOwnerRewardsDesc: 'cumulativeStakePoolOwnerRewards_DESC',
  CumulativeStakePoolOwnerRewardsDescNullsLast: 'cumulativeStakePoolOwnerRewards_DESC_NULLS_LAST',
  CumulativeVaultOwnerRewardsAsc: 'cumulativeVaultOwnerRewards_ASC',
  CumulativeVaultOwnerRewardsAscNullsFirst: 'cumulativeVaultOwnerRewards_ASC_NULLS_FIRST',
  CumulativeVaultOwnerRewardsDesc: 'cumulativeVaultOwnerRewards_DESC',
  CumulativeVaultOwnerRewardsDescNullsLast: 'cumulativeVaultOwnerRewards_DESC_NULLS_LAST',
  DelegationValueAsc: 'delegationValue_ASC',
  DelegationValueAscNullsFirst: 'delegationValue_ASC_NULLS_FIRST',
  DelegationValueDesc: 'delegationValue_DESC',
  DelegationValueDescNullsLast: 'delegationValue_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  UpdatedTimeAsc: 'updatedTime_ASC',
  UpdatedTimeAscNullsFirst: 'updatedTime_ASC_NULLS_FIRST',
  UpdatedTimeDesc: 'updatedTime_DESC',
  UpdatedTimeDescNullsLast: 'updatedTime_DESC_NULLS_LAST'
} as const;

export type AccountSnapshotOrderByInput = typeof AccountSnapshotOrderByInput[keyof typeof AccountSnapshotOrderByInput];
type AccountSnapshotWhereInput = {
  AND?: InputMaybe<Array<AccountSnapshotWhereInput>>;
  OR?: InputMaybe<Array<AccountSnapshotWhereInput>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_eq?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  account_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  account_not_eq?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  account_startsWith?: InputMaybe<Scalars['String']['input']>;
  cumulativeStakePoolOwnerRewards_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeStakePoolOwnerRewards_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeStakePoolOwnerRewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeVaultOwnerRewards_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeVaultOwnerRewards_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeVaultOwnerRewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegationValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegationValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegationValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegationValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegationValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  delegationValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegationValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegationValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegationValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  updatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

type AccountSnapshotsConnection = {
  edges: Array<AccountSnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  basePool?: InputMaybe<BasePoolWhereInput>;
  basePool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeStakePoolOwnerRewards_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeStakePoolOwnerRewards_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeStakePoolOwnerRewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeStakePoolOwnerRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeVaultOwnerRewards_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeVaultOwnerRewards_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeVaultOwnerRewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeVaultOwnerRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_contains?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_endsWith?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_eq?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_gt?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_gte?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_in?: InputMaybe<Array<Scalars['String']['input']>>;
  identityDisplay_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  identityDisplay_lt?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_lte?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_not_contains?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_not_eq?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  identityDisplay_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  identityDisplay_startsWith?: InputMaybe<Scalars['String']['input']>;
  identityJudgements_containsAll?: InputMaybe<Array<IdentityJudgement>>;
  identityJudgements_containsAny?: InputMaybe<Array<IdentityJudgement>>;
  identityJudgements_containsNone?: InputMaybe<Array<IdentityJudgement>>;
  identityJudgements_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  identityLevel_eq?: InputMaybe<IdentityJudgement>;
  identityLevel_in?: InputMaybe<Array<IdentityJudgement>>;
  identityLevel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  identityLevel_not_eq?: InputMaybe<IdentityJudgement>;
  identityLevel_not_in?: InputMaybe<Array<IdentityJudgement>>;
  ownedPools_every?: InputMaybe<BasePoolWhereInput>;
  ownedPools_none?: InputMaybe<BasePoolWhereInput>;
  ownedPools_some?: InputMaybe<BasePoolWhereInput>;
  stakePoolAvgAprMultiplier_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolAvgAprMultiplier_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolAvgAprMultiplier_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolAvgAprMultiplier_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stakePoolAvgAprMultiplier_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stakePoolAvgAprMultiplier_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolAvgAprMultiplier_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolAvgAprMultiplier_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolAvgAprMultiplier_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stakePoolNftCount_eq?: InputMaybe<Scalars['Int']['input']>;
  stakePoolNftCount_gt?: InputMaybe<Scalars['Int']['input']>;
  stakePoolNftCount_gte?: InputMaybe<Scalars['Int']['input']>;
  stakePoolNftCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stakePoolNftCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stakePoolNftCount_lt?: InputMaybe<Scalars['Int']['input']>;
  stakePoolNftCount_lte?: InputMaybe<Scalars['Int']['input']>;
  stakePoolNftCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  stakePoolNftCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stakePoolValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stakePoolValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stakePoolValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stakePoolValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  vaultAvgAprMultiplier_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultAvgAprMultiplier_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultAvgAprMultiplier_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultAvgAprMultiplier_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  vaultAvgAprMultiplier_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  vaultAvgAprMultiplier_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultAvgAprMultiplier_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultAvgAprMultiplier_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultAvgAprMultiplier_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  vaultNftCount_eq?: InputMaybe<Scalars['Int']['input']>;
  vaultNftCount_gt?: InputMaybe<Scalars['Int']['input']>;
  vaultNftCount_gte?: InputMaybe<Scalars['Int']['input']>;
  vaultNftCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  vaultNftCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  vaultNftCount_lt?: InputMaybe<Scalars['Int']['input']>;
  vaultNftCount_lte?: InputMaybe<Scalars['Int']['input']>;
  vaultNftCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  vaultNftCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  vaultValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  vaultValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  vaultValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  vaultValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

type AccountsConnection = {
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type BasePool = {
  account: Account;
  aprMultiplier: Scalars['BigDecimal']['output'];
  /** NFT collection id */
  cid: Scalars['Int']['output'];
  /** decimal percentage, 1 means 100% */
  commission: Scalars['BigDecimal']['output'];
  cumulativeOwnerRewards: Scalars['BigDecimal']['output'];
  delegations: Array<Delegation>;
  delegatorCount: Scalars['Int']['output'];
  freeValue: Scalars['BigDecimal']['output'];
  /** pid */
  id: Scalars['String']['output'];
  kind: BasePoolKind;
  owner: Account;
  /** numeric pid for sorting */
  pid: Scalars['BigInt']['output'];
  releasingValue: Scalars['BigDecimal']['output'];
  sharePrice: Scalars['BigDecimal']['output'];
  stakePool?: Maybe<StakePool>;
  totalShares: Scalars['BigDecimal']['output'];
  totalValue: Scalars['BigDecimal']['output'];
  vault?: Maybe<Vault>;
  whitelistEnabled: Scalars['Boolean']['output'];
  whitelists: Array<BasePoolWhitelist>;
  withdrawingShares: Scalars['BigDecimal']['output'];
  withdrawingValue: Scalars['BigDecimal']['output'];
};


type BasePoolDelegationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DelegationOrderByInput>>;
  where?: InputMaybe<DelegationWhereInput>;
};


type BasePoolWhitelistsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BasePoolWhitelistOrderByInput>>;
  where?: InputMaybe<BasePoolWhitelistWhereInput>;
};

type BasePoolEdge = {
  cursor: Scalars['String']['output'];
  node: BasePool;
};

const BasePoolKind = {
  StakePool: 'StakePool',
  Vault: 'Vault'
} as const;

export type BasePoolKind = typeof BasePoolKind[keyof typeof BasePoolKind];
const BasePoolOrderByInput = {
  AccountCumulativeStakePoolOwnerRewardsAsc: 'account_cumulativeStakePoolOwnerRewards_ASC',
  AccountCumulativeStakePoolOwnerRewardsAscNullsFirst: 'account_cumulativeStakePoolOwnerRewards_ASC_NULLS_FIRST',
  AccountCumulativeStakePoolOwnerRewardsDesc: 'account_cumulativeStakePoolOwnerRewards_DESC',
  AccountCumulativeStakePoolOwnerRewardsDescNullsLast: 'account_cumulativeStakePoolOwnerRewards_DESC_NULLS_LAST',
  AccountCumulativeVaultOwnerRewardsAsc: 'account_cumulativeVaultOwnerRewards_ASC',
  AccountCumulativeVaultOwnerRewardsAscNullsFirst: 'account_cumulativeVaultOwnerRewards_ASC_NULLS_FIRST',
  AccountCumulativeVaultOwnerRewardsDesc: 'account_cumulativeVaultOwnerRewards_DESC',
  AccountCumulativeVaultOwnerRewardsDescNullsLast: 'account_cumulativeVaultOwnerRewards_DESC_NULLS_LAST',
  AccountIdAsc: 'account_id_ASC',
  AccountIdAscNullsFirst: 'account_id_ASC_NULLS_FIRST',
  AccountIdDesc: 'account_id_DESC',
  AccountIdDescNullsLast: 'account_id_DESC_NULLS_LAST',
  AccountIdentityDisplayAsc: 'account_identityDisplay_ASC',
  AccountIdentityDisplayAscNullsFirst: 'account_identityDisplay_ASC_NULLS_FIRST',
  AccountIdentityDisplayDesc: 'account_identityDisplay_DESC',
  AccountIdentityDisplayDescNullsLast: 'account_identityDisplay_DESC_NULLS_LAST',
  AccountIdentityLevelAsc: 'account_identityLevel_ASC',
  AccountIdentityLevelAscNullsFirst: 'account_identityLevel_ASC_NULLS_FIRST',
  AccountIdentityLevelDesc: 'account_identityLevel_DESC',
  AccountIdentityLevelDescNullsLast: 'account_identityLevel_DESC_NULLS_LAST',
  AccountStakePoolAvgAprMultiplierAsc: 'account_stakePoolAvgAprMultiplier_ASC',
  AccountStakePoolAvgAprMultiplierAscNullsFirst: 'account_stakePoolAvgAprMultiplier_ASC_NULLS_FIRST',
  AccountStakePoolAvgAprMultiplierDesc: 'account_stakePoolAvgAprMultiplier_DESC',
  AccountStakePoolAvgAprMultiplierDescNullsLast: 'account_stakePoolAvgAprMultiplier_DESC_NULLS_LAST',
  AccountStakePoolNftCountAsc: 'account_stakePoolNftCount_ASC',
  AccountStakePoolNftCountAscNullsFirst: 'account_stakePoolNftCount_ASC_NULLS_FIRST',
  AccountStakePoolNftCountDesc: 'account_stakePoolNftCount_DESC',
  AccountStakePoolNftCountDescNullsLast: 'account_stakePoolNftCount_DESC_NULLS_LAST',
  AccountStakePoolValueAsc: 'account_stakePoolValue_ASC',
  AccountStakePoolValueAscNullsFirst: 'account_stakePoolValue_ASC_NULLS_FIRST',
  AccountStakePoolValueDesc: 'account_stakePoolValue_DESC',
  AccountStakePoolValueDescNullsLast: 'account_stakePoolValue_DESC_NULLS_LAST',
  AccountVaultAvgAprMultiplierAsc: 'account_vaultAvgAprMultiplier_ASC',
  AccountVaultAvgAprMultiplierAscNullsFirst: 'account_vaultAvgAprMultiplier_ASC_NULLS_FIRST',
  AccountVaultAvgAprMultiplierDesc: 'account_vaultAvgAprMultiplier_DESC',
  AccountVaultAvgAprMultiplierDescNullsLast: 'account_vaultAvgAprMultiplier_DESC_NULLS_LAST',
  AccountVaultNftCountAsc: 'account_vaultNftCount_ASC',
  AccountVaultNftCountAscNullsFirst: 'account_vaultNftCount_ASC_NULLS_FIRST',
  AccountVaultNftCountDesc: 'account_vaultNftCount_DESC',
  AccountVaultNftCountDescNullsLast: 'account_vaultNftCount_DESC_NULLS_LAST',
  AccountVaultValueAsc: 'account_vaultValue_ASC',
  AccountVaultValueAscNullsFirst: 'account_vaultValue_ASC_NULLS_FIRST',
  AccountVaultValueDesc: 'account_vaultValue_DESC',
  AccountVaultValueDescNullsLast: 'account_vaultValue_DESC_NULLS_LAST',
  AprMultiplierAsc: 'aprMultiplier_ASC',
  AprMultiplierAscNullsFirst: 'aprMultiplier_ASC_NULLS_FIRST',
  AprMultiplierDesc: 'aprMultiplier_DESC',
  AprMultiplierDescNullsLast: 'aprMultiplier_DESC_NULLS_LAST',
  CidAsc: 'cid_ASC',
  CidAscNullsFirst: 'cid_ASC_NULLS_FIRST',
  CidDesc: 'cid_DESC',
  CidDescNullsLast: 'cid_DESC_NULLS_LAST',
  CommissionAsc: 'commission_ASC',
  CommissionAscNullsFirst: 'commission_ASC_NULLS_FIRST',
  CommissionDesc: 'commission_DESC',
  CommissionDescNullsLast: 'commission_DESC_NULLS_LAST',
  CumulativeOwnerRewardsAsc: 'cumulativeOwnerRewards_ASC',
  CumulativeOwnerRewardsAscNullsFirst: 'cumulativeOwnerRewards_ASC_NULLS_FIRST',
  CumulativeOwnerRewardsDesc: 'cumulativeOwnerRewards_DESC',
  CumulativeOwnerRewardsDescNullsLast: 'cumulativeOwnerRewards_DESC_NULLS_LAST',
  DelegatorCountAsc: 'delegatorCount_ASC',
  DelegatorCountAscNullsFirst: 'delegatorCount_ASC_NULLS_FIRST',
  DelegatorCountDesc: 'delegatorCount_DESC',
  DelegatorCountDescNullsLast: 'delegatorCount_DESC_NULLS_LAST',
  FreeValueAsc: 'freeValue_ASC',
  FreeValueAscNullsFirst: 'freeValue_ASC_NULLS_FIRST',
  FreeValueDesc: 'freeValue_DESC',
  FreeValueDescNullsLast: 'freeValue_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  KindAsc: 'kind_ASC',
  KindAscNullsFirst: 'kind_ASC_NULLS_FIRST',
  KindDesc: 'kind_DESC',
  KindDescNullsLast: 'kind_DESC_NULLS_LAST',
  OwnerCumulativeStakePoolOwnerRewardsAsc: 'owner_cumulativeStakePoolOwnerRewards_ASC',
  OwnerCumulativeStakePoolOwnerRewardsAscNullsFirst: 'owner_cumulativeStakePoolOwnerRewards_ASC_NULLS_FIRST',
  OwnerCumulativeStakePoolOwnerRewardsDesc: 'owner_cumulativeStakePoolOwnerRewards_DESC',
  OwnerCumulativeStakePoolOwnerRewardsDescNullsLast: 'owner_cumulativeStakePoolOwnerRewards_DESC_NULLS_LAST',
  OwnerCumulativeVaultOwnerRewardsAsc: 'owner_cumulativeVaultOwnerRewards_ASC',
  OwnerCumulativeVaultOwnerRewardsAscNullsFirst: 'owner_cumulativeVaultOwnerRewards_ASC_NULLS_FIRST',
  OwnerCumulativeVaultOwnerRewardsDesc: 'owner_cumulativeVaultOwnerRewards_DESC',
  OwnerCumulativeVaultOwnerRewardsDescNullsLast: 'owner_cumulativeVaultOwnerRewards_DESC_NULLS_LAST',
  OwnerIdAsc: 'owner_id_ASC',
  OwnerIdAscNullsFirst: 'owner_id_ASC_NULLS_FIRST',
  OwnerIdDesc: 'owner_id_DESC',
  OwnerIdDescNullsLast: 'owner_id_DESC_NULLS_LAST',
  OwnerIdentityDisplayAsc: 'owner_identityDisplay_ASC',
  OwnerIdentityDisplayAscNullsFirst: 'owner_identityDisplay_ASC_NULLS_FIRST',
  OwnerIdentityDisplayDesc: 'owner_identityDisplay_DESC',
  OwnerIdentityDisplayDescNullsLast: 'owner_identityDisplay_DESC_NULLS_LAST',
  OwnerIdentityLevelAsc: 'owner_identityLevel_ASC',
  OwnerIdentityLevelAscNullsFirst: 'owner_identityLevel_ASC_NULLS_FIRST',
  OwnerIdentityLevelDesc: 'owner_identityLevel_DESC',
  OwnerIdentityLevelDescNullsLast: 'owner_identityLevel_DESC_NULLS_LAST',
  OwnerStakePoolAvgAprMultiplierAsc: 'owner_stakePoolAvgAprMultiplier_ASC',
  OwnerStakePoolAvgAprMultiplierAscNullsFirst: 'owner_stakePoolAvgAprMultiplier_ASC_NULLS_FIRST',
  OwnerStakePoolAvgAprMultiplierDesc: 'owner_stakePoolAvgAprMultiplier_DESC',
  OwnerStakePoolAvgAprMultiplierDescNullsLast: 'owner_stakePoolAvgAprMultiplier_DESC_NULLS_LAST',
  OwnerStakePoolNftCountAsc: 'owner_stakePoolNftCount_ASC',
  OwnerStakePoolNftCountAscNullsFirst: 'owner_stakePoolNftCount_ASC_NULLS_FIRST',
  OwnerStakePoolNftCountDesc: 'owner_stakePoolNftCount_DESC',
  OwnerStakePoolNftCountDescNullsLast: 'owner_stakePoolNftCount_DESC_NULLS_LAST',
  OwnerStakePoolValueAsc: 'owner_stakePoolValue_ASC',
  OwnerStakePoolValueAscNullsFirst: 'owner_stakePoolValue_ASC_NULLS_FIRST',
  OwnerStakePoolValueDesc: 'owner_stakePoolValue_DESC',
  OwnerStakePoolValueDescNullsLast: 'owner_stakePoolValue_DESC_NULLS_LAST',
  OwnerVaultAvgAprMultiplierAsc: 'owner_vaultAvgAprMultiplier_ASC',
  OwnerVaultAvgAprMultiplierAscNullsFirst: 'owner_vaultAvgAprMultiplier_ASC_NULLS_FIRST',
  OwnerVaultAvgAprMultiplierDesc: 'owner_vaultAvgAprMultiplier_DESC',
  OwnerVaultAvgAprMultiplierDescNullsLast: 'owner_vaultAvgAprMultiplier_DESC_NULLS_LAST',
  OwnerVaultNftCountAsc: 'owner_vaultNftCount_ASC',
  OwnerVaultNftCountAscNullsFirst: 'owner_vaultNftCount_ASC_NULLS_FIRST',
  OwnerVaultNftCountDesc: 'owner_vaultNftCount_DESC',
  OwnerVaultNftCountDescNullsLast: 'owner_vaultNftCount_DESC_NULLS_LAST',
  OwnerVaultValueAsc: 'owner_vaultValue_ASC',
  OwnerVaultValueAscNullsFirst: 'owner_vaultValue_ASC_NULLS_FIRST',
  OwnerVaultValueDesc: 'owner_vaultValue_DESC',
  OwnerVaultValueDescNullsLast: 'owner_vaultValue_DESC_NULLS_LAST',
  PidAsc: 'pid_ASC',
  PidAscNullsFirst: 'pid_ASC_NULLS_FIRST',
  PidDesc: 'pid_DESC',
  PidDescNullsLast: 'pid_DESC_NULLS_LAST',
  ReleasingValueAsc: 'releasingValue_ASC',
  ReleasingValueAscNullsFirst: 'releasingValue_ASC_NULLS_FIRST',
  ReleasingValueDesc: 'releasingValue_DESC',
  ReleasingValueDescNullsLast: 'releasingValue_DESC_NULLS_LAST',
  SharePriceAsc: 'sharePrice_ASC',
  SharePriceAscNullsFirst: 'sharePrice_ASC_NULLS_FIRST',
  SharePriceDesc: 'sharePrice_DESC',
  SharePriceDescNullsLast: 'sharePrice_DESC_NULLS_LAST',
  StakePoolCapacityAsc: 'stakePool_capacity_ASC',
  StakePoolCapacityAscNullsFirst: 'stakePool_capacity_ASC_NULLS_FIRST',
  StakePoolCapacityDesc: 'stakePool_capacity_DESC',
  StakePoolCapacityDescNullsLast: 'stakePool_capacity_DESC_NULLS_LAST',
  StakePoolDelegableAsc: 'stakePool_delegable_ASC',
  StakePoolDelegableAscNullsFirst: 'stakePool_delegable_ASC_NULLS_FIRST',
  StakePoolDelegableDesc: 'stakePool_delegable_DESC',
  StakePoolDelegableDescNullsLast: 'stakePool_delegable_DESC_NULLS_LAST',
  StakePoolIdAsc: 'stakePool_id_ASC',
  StakePoolIdAscNullsFirst: 'stakePool_id_ASC_NULLS_FIRST',
  StakePoolIdDesc: 'stakePool_id_DESC',
  StakePoolIdDescNullsLast: 'stakePool_id_DESC_NULLS_LAST',
  StakePoolIdleWorkerCountAsc: 'stakePool_idleWorkerCount_ASC',
  StakePoolIdleWorkerCountAscNullsFirst: 'stakePool_idleWorkerCount_ASC_NULLS_FIRST',
  StakePoolIdleWorkerCountDesc: 'stakePool_idleWorkerCount_DESC',
  StakePoolIdleWorkerCountDescNullsLast: 'stakePool_idleWorkerCount_DESC_NULLS_LAST',
  StakePoolIdleWorkerSharesAsc: 'stakePool_idleWorkerShares_ASC',
  StakePoolIdleWorkerSharesAscNullsFirst: 'stakePool_idleWorkerShares_ASC_NULLS_FIRST',
  StakePoolIdleWorkerSharesDesc: 'stakePool_idleWorkerShares_DESC',
  StakePoolIdleWorkerSharesDescNullsLast: 'stakePool_idleWorkerShares_DESC_NULLS_LAST',
  StakePoolOwnerRewardAsc: 'stakePool_ownerReward_ASC',
  StakePoolOwnerRewardAscNullsFirst: 'stakePool_ownerReward_ASC_NULLS_FIRST',
  StakePoolOwnerRewardDesc: 'stakePool_ownerReward_DESC',
  StakePoolOwnerRewardDescNullsLast: 'stakePool_ownerReward_DESC_NULLS_LAST',
  StakePoolWorkerCountAsc: 'stakePool_workerCount_ASC',
  StakePoolWorkerCountAscNullsFirst: 'stakePool_workerCount_ASC_NULLS_FIRST',
  StakePoolWorkerCountDesc: 'stakePool_workerCount_DESC',
  StakePoolWorkerCountDescNullsLast: 'stakePool_workerCount_DESC_NULLS_LAST',
  TotalSharesAsc: 'totalShares_ASC',
  TotalSharesAscNullsFirst: 'totalShares_ASC_NULLS_FIRST',
  TotalSharesDesc: 'totalShares_DESC',
  TotalSharesDescNullsLast: 'totalShares_DESC_NULLS_LAST',
  TotalValueAsc: 'totalValue_ASC',
  TotalValueAscNullsFirst: 'totalValue_ASC_NULLS_FIRST',
  TotalValueDesc: 'totalValue_DESC',
  TotalValueDescNullsLast: 'totalValue_DESC_NULLS_LAST',
  VaultClaimableOwnerSharesAsc: 'vault_claimableOwnerShares_ASC',
  VaultClaimableOwnerSharesAscNullsFirst: 'vault_claimableOwnerShares_ASC_NULLS_FIRST',
  VaultClaimableOwnerSharesDesc: 'vault_claimableOwnerShares_DESC',
  VaultClaimableOwnerSharesDescNullsLast: 'vault_claimableOwnerShares_DESC_NULLS_LAST',
  VaultIdAsc: 'vault_id_ASC',
  VaultIdAscNullsFirst: 'vault_id_ASC_NULLS_FIRST',
  VaultIdDesc: 'vault_id_DESC',
  VaultIdDescNullsLast: 'vault_id_DESC_NULLS_LAST',
  VaultLastSharePriceCheckpointAsc: 'vault_lastSharePriceCheckpoint_ASC',
  VaultLastSharePriceCheckpointAscNullsFirst: 'vault_lastSharePriceCheckpoint_ASC_NULLS_FIRST',
  VaultLastSharePriceCheckpointDesc: 'vault_lastSharePriceCheckpoint_DESC',
  VaultLastSharePriceCheckpointDescNullsLast: 'vault_lastSharePriceCheckpoint_DESC_NULLS_LAST',
  WhitelistEnabledAsc: 'whitelistEnabled_ASC',
  WhitelistEnabledAscNullsFirst: 'whitelistEnabled_ASC_NULLS_FIRST',
  WhitelistEnabledDesc: 'whitelistEnabled_DESC',
  WhitelistEnabledDescNullsLast: 'whitelistEnabled_DESC_NULLS_LAST',
  WithdrawingSharesAsc: 'withdrawingShares_ASC',
  WithdrawingSharesAscNullsFirst: 'withdrawingShares_ASC_NULLS_FIRST',
  WithdrawingSharesDesc: 'withdrawingShares_DESC',
  WithdrawingSharesDescNullsLast: 'withdrawingShares_DESC_NULLS_LAST',
  WithdrawingValueAsc: 'withdrawingValue_ASC',
  WithdrawingValueAscNullsFirst: 'withdrawingValue_ASC_NULLS_FIRST',
  WithdrawingValueDesc: 'withdrawingValue_DESC',
  WithdrawingValueDescNullsLast: 'withdrawingValue_DESC_NULLS_LAST'
} as const;

export type BasePoolOrderByInput = typeof BasePoolOrderByInput[keyof typeof BasePoolOrderByInput];
type BasePoolSnapshot = {
  apr: Scalars['BigDecimal']['output'];
  basePool: Scalars['String']['output'];
  commission: Scalars['BigDecimal']['output'];
  cumulativeOwnerRewards: Scalars['BigDecimal']['output'];
  delegatorCount: Scalars['Int']['output'];
  freeValue: Scalars['BigDecimal']['output'];
  id: Scalars['String']['output'];
  idleWorkerCount?: Maybe<Scalars['Int']['output']>;
  releasingValue: Scalars['BigDecimal']['output'];
  sharePrice: Scalars['BigDecimal']['output'];
  stakePoolCount?: Maybe<Scalars['Int']['output']>;
  totalShares: Scalars['BigDecimal']['output'];
  totalValue: Scalars['BigDecimal']['output'];
  /** block time */
  updatedTime: Scalars['DateTime']['output'];
  withdrawingShares: Scalars['BigDecimal']['output'];
  withdrawingValue: Scalars['BigDecimal']['output'];
  workerCount?: Maybe<Scalars['Int']['output']>;
};

type BasePoolSnapshotEdge = {
  cursor: Scalars['String']['output'];
  node: BasePoolSnapshot;
};

const BasePoolSnapshotOrderByInput = {
  AprAsc: 'apr_ASC',
  AprAscNullsFirst: 'apr_ASC_NULLS_FIRST',
  AprDesc: 'apr_DESC',
  AprDescNullsLast: 'apr_DESC_NULLS_LAST',
  BasePoolAsc: 'basePool_ASC',
  BasePoolAscNullsFirst: 'basePool_ASC_NULLS_FIRST',
  BasePoolDesc: 'basePool_DESC',
  BasePoolDescNullsLast: 'basePool_DESC_NULLS_LAST',
  CommissionAsc: 'commission_ASC',
  CommissionAscNullsFirst: 'commission_ASC_NULLS_FIRST',
  CommissionDesc: 'commission_DESC',
  CommissionDescNullsLast: 'commission_DESC_NULLS_LAST',
  CumulativeOwnerRewardsAsc: 'cumulativeOwnerRewards_ASC',
  CumulativeOwnerRewardsAscNullsFirst: 'cumulativeOwnerRewards_ASC_NULLS_FIRST',
  CumulativeOwnerRewardsDesc: 'cumulativeOwnerRewards_DESC',
  CumulativeOwnerRewardsDescNullsLast: 'cumulativeOwnerRewards_DESC_NULLS_LAST',
  DelegatorCountAsc: 'delegatorCount_ASC',
  DelegatorCountAscNullsFirst: 'delegatorCount_ASC_NULLS_FIRST',
  DelegatorCountDesc: 'delegatorCount_DESC',
  DelegatorCountDescNullsLast: 'delegatorCount_DESC_NULLS_LAST',
  FreeValueAsc: 'freeValue_ASC',
  FreeValueAscNullsFirst: 'freeValue_ASC_NULLS_FIRST',
  FreeValueDesc: 'freeValue_DESC',
  FreeValueDescNullsLast: 'freeValue_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  IdleWorkerCountAsc: 'idleWorkerCount_ASC',
  IdleWorkerCountAscNullsFirst: 'idleWorkerCount_ASC_NULLS_FIRST',
  IdleWorkerCountDesc: 'idleWorkerCount_DESC',
  IdleWorkerCountDescNullsLast: 'idleWorkerCount_DESC_NULLS_LAST',
  ReleasingValueAsc: 'releasingValue_ASC',
  ReleasingValueAscNullsFirst: 'releasingValue_ASC_NULLS_FIRST',
  ReleasingValueDesc: 'releasingValue_DESC',
  ReleasingValueDescNullsLast: 'releasingValue_DESC_NULLS_LAST',
  SharePriceAsc: 'sharePrice_ASC',
  SharePriceAscNullsFirst: 'sharePrice_ASC_NULLS_FIRST',
  SharePriceDesc: 'sharePrice_DESC',
  SharePriceDescNullsLast: 'sharePrice_DESC_NULLS_LAST',
  StakePoolCountAsc: 'stakePoolCount_ASC',
  StakePoolCountAscNullsFirst: 'stakePoolCount_ASC_NULLS_FIRST',
  StakePoolCountDesc: 'stakePoolCount_DESC',
  StakePoolCountDescNullsLast: 'stakePoolCount_DESC_NULLS_LAST',
  TotalSharesAsc: 'totalShares_ASC',
  TotalSharesAscNullsFirst: 'totalShares_ASC_NULLS_FIRST',
  TotalSharesDesc: 'totalShares_DESC',
  TotalSharesDescNullsLast: 'totalShares_DESC_NULLS_LAST',
  TotalValueAsc: 'totalValue_ASC',
  TotalValueAscNullsFirst: 'totalValue_ASC_NULLS_FIRST',
  TotalValueDesc: 'totalValue_DESC',
  TotalValueDescNullsLast: 'totalValue_DESC_NULLS_LAST',
  UpdatedTimeAsc: 'updatedTime_ASC',
  UpdatedTimeAscNullsFirst: 'updatedTime_ASC_NULLS_FIRST',
  UpdatedTimeDesc: 'updatedTime_DESC',
  UpdatedTimeDescNullsLast: 'updatedTime_DESC_NULLS_LAST',
  WithdrawingSharesAsc: 'withdrawingShares_ASC',
  WithdrawingSharesAscNullsFirst: 'withdrawingShares_ASC_NULLS_FIRST',
  WithdrawingSharesDesc: 'withdrawingShares_DESC',
  WithdrawingSharesDescNullsLast: 'withdrawingShares_DESC_NULLS_LAST',
  WithdrawingValueAsc: 'withdrawingValue_ASC',
  WithdrawingValueAscNullsFirst: 'withdrawingValue_ASC_NULLS_FIRST',
  WithdrawingValueDesc: 'withdrawingValue_DESC',
  WithdrawingValueDescNullsLast: 'withdrawingValue_DESC_NULLS_LAST',
  WorkerCountAsc: 'workerCount_ASC',
  WorkerCountAscNullsFirst: 'workerCount_ASC_NULLS_FIRST',
  WorkerCountDesc: 'workerCount_DESC',
  WorkerCountDescNullsLast: 'workerCount_DESC_NULLS_LAST'
} as const;

export type BasePoolSnapshotOrderByInput = typeof BasePoolSnapshotOrderByInput[keyof typeof BasePoolSnapshotOrderByInput];
type BasePoolSnapshotWhereInput = {
  AND?: InputMaybe<Array<BasePoolSnapshotWhereInput>>;
  OR?: InputMaybe<Array<BasePoolSnapshotWhereInput>>;
  apr_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  apr_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  basePool_contains?: InputMaybe<Scalars['String']['input']>;
  basePool_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  basePool_endsWith?: InputMaybe<Scalars['String']['input']>;
  basePool_eq?: InputMaybe<Scalars['String']['input']>;
  basePool_gt?: InputMaybe<Scalars['String']['input']>;
  basePool_gte?: InputMaybe<Scalars['String']['input']>;
  basePool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  basePool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  basePool_lt?: InputMaybe<Scalars['String']['input']>;
  basePool_lte?: InputMaybe<Scalars['String']['input']>;
  basePool_not_contains?: InputMaybe<Scalars['String']['input']>;
  basePool_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  basePool_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  basePool_not_eq?: InputMaybe<Scalars['String']['input']>;
  basePool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  basePool_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  basePool_startsWith?: InputMaybe<Scalars['String']['input']>;
  commission_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  commission_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commission_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeOwnerRewards_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeOwnerRewards_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeOwnerRewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegatorCount_eq?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegatorCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  freeValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  freeValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  freeValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  idleWorkerCount_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorkerCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorkerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  releasingValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  releasingValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  releasingValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sharePrice_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sharePrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sharePrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stakePoolCount_eq?: InputMaybe<Scalars['Int']['input']>;
  stakePoolCount_gt?: InputMaybe<Scalars['Int']['input']>;
  stakePoolCount_gte?: InputMaybe<Scalars['Int']['input']>;
  stakePoolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stakePoolCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stakePoolCount_lt?: InputMaybe<Scalars['Int']['input']>;
  stakePoolCount_lte?: InputMaybe<Scalars['Int']['input']>;
  stakePoolCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  stakePoolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalShares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalShares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  updatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  withdrawingShares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawingShares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawingShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawingValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawingValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawingValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  workerCount_eq?: InputMaybe<Scalars['Int']['input']>;
  workerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  workerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  workerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  workerCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  workerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  workerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  workerCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  workerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

type BasePoolSnapshotsConnection = {
  edges: Array<BasePoolSnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type BasePoolWhereInput = {
  AND?: InputMaybe<Array<BasePoolWhereInput>>;
  OR?: InputMaybe<Array<BasePoolWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  aprMultiplier_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  aprMultiplier_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  aprMultiplier_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  aprMultiplier_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  aprMultiplier_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  aprMultiplier_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  aprMultiplier_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  aprMultiplier_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  aprMultiplier_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cid_eq?: InputMaybe<Scalars['Int']['input']>;
  cid_gt?: InputMaybe<Scalars['Int']['input']>;
  cid_gte?: InputMaybe<Scalars['Int']['input']>;
  cid_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cid_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cid_lt?: InputMaybe<Scalars['Int']['input']>;
  cid_lte?: InputMaybe<Scalars['Int']['input']>;
  cid_not_eq?: InputMaybe<Scalars['Int']['input']>;
  cid_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  commission_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  commission_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  commission_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  commission_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeOwnerRewards_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeOwnerRewards_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeOwnerRewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeOwnerRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegations_every?: InputMaybe<DelegationWhereInput>;
  delegations_none?: InputMaybe<DelegationWhereInput>;
  delegations_some?: InputMaybe<DelegationWhereInput>;
  delegatorCount_eq?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegatorCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  freeValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  freeValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  freeValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  freeValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  kind_eq?: InputMaybe<BasePoolKind>;
  kind_in?: InputMaybe<Array<BasePoolKind>>;
  kind_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  kind_not_eq?: InputMaybe<BasePoolKind>;
  kind_not_in?: InputMaybe<Array<BasePoolKind>>;
  owner?: InputMaybe<AccountWhereInput>;
  owner_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pid_eq?: InputMaybe<Scalars['BigInt']['input']>;
  pid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pid_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pid_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  pid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  releasingValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  releasingValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  releasingValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  releasingValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sharePrice_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sharePrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sharePrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  sharePrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stakePool?: InputMaybe<StakePoolWhereInput>;
  stakePool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalShares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalShares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  vault?: InputMaybe<VaultWhereInput>;
  vault_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  whitelistEnabled_eq?: InputMaybe<Scalars['Boolean']['input']>;
  whitelistEnabled_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  whitelistEnabled_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  whitelists_every?: InputMaybe<BasePoolWhitelistWhereInput>;
  whitelists_none?: InputMaybe<BasePoolWhitelistWhereInput>;
  whitelists_some?: InputMaybe<BasePoolWhitelistWhereInput>;
  withdrawingShares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawingShares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawingShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawingValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawingValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawingValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

type BasePoolWhitelist = {
  account: Account;
  basePool: BasePool;
  createTime: Scalars['DateTime']['output'];
  /** ${pid}-${accountId} */
  id: Scalars['String']['output'];
};

type BasePoolWhitelistEdge = {
  cursor: Scalars['String']['output'];
  node: BasePoolWhitelist;
};

const BasePoolWhitelistOrderByInput = {
  AccountCumulativeStakePoolOwnerRewardsAsc: 'account_cumulativeStakePoolOwnerRewards_ASC',
  AccountCumulativeStakePoolOwnerRewardsAscNullsFirst: 'account_cumulativeStakePoolOwnerRewards_ASC_NULLS_FIRST',
  AccountCumulativeStakePoolOwnerRewardsDesc: 'account_cumulativeStakePoolOwnerRewards_DESC',
  AccountCumulativeStakePoolOwnerRewardsDescNullsLast: 'account_cumulativeStakePoolOwnerRewards_DESC_NULLS_LAST',
  AccountCumulativeVaultOwnerRewardsAsc: 'account_cumulativeVaultOwnerRewards_ASC',
  AccountCumulativeVaultOwnerRewardsAscNullsFirst: 'account_cumulativeVaultOwnerRewards_ASC_NULLS_FIRST',
  AccountCumulativeVaultOwnerRewardsDesc: 'account_cumulativeVaultOwnerRewards_DESC',
  AccountCumulativeVaultOwnerRewardsDescNullsLast: 'account_cumulativeVaultOwnerRewards_DESC_NULLS_LAST',
  AccountIdAsc: 'account_id_ASC',
  AccountIdAscNullsFirst: 'account_id_ASC_NULLS_FIRST',
  AccountIdDesc: 'account_id_DESC',
  AccountIdDescNullsLast: 'account_id_DESC_NULLS_LAST',
  AccountIdentityDisplayAsc: 'account_identityDisplay_ASC',
  AccountIdentityDisplayAscNullsFirst: 'account_identityDisplay_ASC_NULLS_FIRST',
  AccountIdentityDisplayDesc: 'account_identityDisplay_DESC',
  AccountIdentityDisplayDescNullsLast: 'account_identityDisplay_DESC_NULLS_LAST',
  AccountIdentityLevelAsc: 'account_identityLevel_ASC',
  AccountIdentityLevelAscNullsFirst: 'account_identityLevel_ASC_NULLS_FIRST',
  AccountIdentityLevelDesc: 'account_identityLevel_DESC',
  AccountIdentityLevelDescNullsLast: 'account_identityLevel_DESC_NULLS_LAST',
  AccountStakePoolAvgAprMultiplierAsc: 'account_stakePoolAvgAprMultiplier_ASC',
  AccountStakePoolAvgAprMultiplierAscNullsFirst: 'account_stakePoolAvgAprMultiplier_ASC_NULLS_FIRST',
  AccountStakePoolAvgAprMultiplierDesc: 'account_stakePoolAvgAprMultiplier_DESC',
  AccountStakePoolAvgAprMultiplierDescNullsLast: 'account_stakePoolAvgAprMultiplier_DESC_NULLS_LAST',
  AccountStakePoolNftCountAsc: 'account_stakePoolNftCount_ASC',
  AccountStakePoolNftCountAscNullsFirst: 'account_stakePoolNftCount_ASC_NULLS_FIRST',
  AccountStakePoolNftCountDesc: 'account_stakePoolNftCount_DESC',
  AccountStakePoolNftCountDescNullsLast: 'account_stakePoolNftCount_DESC_NULLS_LAST',
  AccountStakePoolValueAsc: 'account_stakePoolValue_ASC',
  AccountStakePoolValueAscNullsFirst: 'account_stakePoolValue_ASC_NULLS_FIRST',
  AccountStakePoolValueDesc: 'account_stakePoolValue_DESC',
  AccountStakePoolValueDescNullsLast: 'account_stakePoolValue_DESC_NULLS_LAST',
  AccountVaultAvgAprMultiplierAsc: 'account_vaultAvgAprMultiplier_ASC',
  AccountVaultAvgAprMultiplierAscNullsFirst: 'account_vaultAvgAprMultiplier_ASC_NULLS_FIRST',
  AccountVaultAvgAprMultiplierDesc: 'account_vaultAvgAprMultiplier_DESC',
  AccountVaultAvgAprMultiplierDescNullsLast: 'account_vaultAvgAprMultiplier_DESC_NULLS_LAST',
  AccountVaultNftCountAsc: 'account_vaultNftCount_ASC',
  AccountVaultNftCountAscNullsFirst: 'account_vaultNftCount_ASC_NULLS_FIRST',
  AccountVaultNftCountDesc: 'account_vaultNftCount_DESC',
  AccountVaultNftCountDescNullsLast: 'account_vaultNftCount_DESC_NULLS_LAST',
  AccountVaultValueAsc: 'account_vaultValue_ASC',
  AccountVaultValueAscNullsFirst: 'account_vaultValue_ASC_NULLS_FIRST',
  AccountVaultValueDesc: 'account_vaultValue_DESC',
  AccountVaultValueDescNullsLast: 'account_vaultValue_DESC_NULLS_LAST',
  BasePoolAprMultiplierAsc: 'basePool_aprMultiplier_ASC',
  BasePoolAprMultiplierAscNullsFirst: 'basePool_aprMultiplier_ASC_NULLS_FIRST',
  BasePoolAprMultiplierDesc: 'basePool_aprMultiplier_DESC',
  BasePoolAprMultiplierDescNullsLast: 'basePool_aprMultiplier_DESC_NULLS_LAST',
  BasePoolCidAsc: 'basePool_cid_ASC',
  BasePoolCidAscNullsFirst: 'basePool_cid_ASC_NULLS_FIRST',
  BasePoolCidDesc: 'basePool_cid_DESC',
  BasePoolCidDescNullsLast: 'basePool_cid_DESC_NULLS_LAST',
  BasePoolCommissionAsc: 'basePool_commission_ASC',
  BasePoolCommissionAscNullsFirst: 'basePool_commission_ASC_NULLS_FIRST',
  BasePoolCommissionDesc: 'basePool_commission_DESC',
  BasePoolCommissionDescNullsLast: 'basePool_commission_DESC_NULLS_LAST',
  BasePoolCumulativeOwnerRewardsAsc: 'basePool_cumulativeOwnerRewards_ASC',
  BasePoolCumulativeOwnerRewardsAscNullsFirst: 'basePool_cumulativeOwnerRewards_ASC_NULLS_FIRST',
  BasePoolCumulativeOwnerRewardsDesc: 'basePool_cumulativeOwnerRewards_DESC',
  BasePoolCumulativeOwnerRewardsDescNullsLast: 'basePool_cumulativeOwnerRewards_DESC_NULLS_LAST',
  BasePoolDelegatorCountAsc: 'basePool_delegatorCount_ASC',
  BasePoolDelegatorCountAscNullsFirst: 'basePool_delegatorCount_ASC_NULLS_FIRST',
  BasePoolDelegatorCountDesc: 'basePool_delegatorCount_DESC',
  BasePoolDelegatorCountDescNullsLast: 'basePool_delegatorCount_DESC_NULLS_LAST',
  BasePoolFreeValueAsc: 'basePool_freeValue_ASC',
  BasePoolFreeValueAscNullsFirst: 'basePool_freeValue_ASC_NULLS_FIRST',
  BasePoolFreeValueDesc: 'basePool_freeValue_DESC',
  BasePoolFreeValueDescNullsLast: 'basePool_freeValue_DESC_NULLS_LAST',
  BasePoolIdAsc: 'basePool_id_ASC',
  BasePoolIdAscNullsFirst: 'basePool_id_ASC_NULLS_FIRST',
  BasePoolIdDesc: 'basePool_id_DESC',
  BasePoolIdDescNullsLast: 'basePool_id_DESC_NULLS_LAST',
  BasePoolKindAsc: 'basePool_kind_ASC',
  BasePoolKindAscNullsFirst: 'basePool_kind_ASC_NULLS_FIRST',
  BasePoolKindDesc: 'basePool_kind_DESC',
  BasePoolKindDescNullsLast: 'basePool_kind_DESC_NULLS_LAST',
  BasePoolPidAsc: 'basePool_pid_ASC',
  BasePoolPidAscNullsFirst: 'basePool_pid_ASC_NULLS_FIRST',
  BasePoolPidDesc: 'basePool_pid_DESC',
  BasePoolPidDescNullsLast: 'basePool_pid_DESC_NULLS_LAST',
  BasePoolReleasingValueAsc: 'basePool_releasingValue_ASC',
  BasePoolReleasingValueAscNullsFirst: 'basePool_releasingValue_ASC_NULLS_FIRST',
  BasePoolReleasingValueDesc: 'basePool_releasingValue_DESC',
  BasePoolReleasingValueDescNullsLast: 'basePool_releasingValue_DESC_NULLS_LAST',
  BasePoolSharePriceAsc: 'basePool_sharePrice_ASC',
  BasePoolSharePriceAscNullsFirst: 'basePool_sharePrice_ASC_NULLS_FIRST',
  BasePoolSharePriceDesc: 'basePool_sharePrice_DESC',
  BasePoolSharePriceDescNullsLast: 'basePool_sharePrice_DESC_NULLS_LAST',
  BasePoolTotalSharesAsc: 'basePool_totalShares_ASC',
  BasePoolTotalSharesAscNullsFirst: 'basePool_totalShares_ASC_NULLS_FIRST',
  BasePoolTotalSharesDesc: 'basePool_totalShares_DESC',
  BasePoolTotalSharesDescNullsLast: 'basePool_totalShares_DESC_NULLS_LAST',
  BasePoolTotalValueAsc: 'basePool_totalValue_ASC',
  BasePoolTotalValueAscNullsFirst: 'basePool_totalValue_ASC_NULLS_FIRST',
  BasePoolTotalValueDesc: 'basePool_totalValue_DESC',
  BasePoolTotalValueDescNullsLast: 'basePool_totalValue_DESC_NULLS_LAST',
  BasePoolWhitelistEnabledAsc: 'basePool_whitelistEnabled_ASC',
  BasePoolWhitelistEnabledAscNullsFirst: 'basePool_whitelistEnabled_ASC_NULLS_FIRST',
  BasePoolWhitelistEnabledDesc: 'basePool_whitelistEnabled_DESC',
  BasePoolWhitelistEnabledDescNullsLast: 'basePool_whitelistEnabled_DESC_NULLS_LAST',
  BasePoolWithdrawingSharesAsc: 'basePool_withdrawingShares_ASC',
  BasePoolWithdrawingSharesAscNullsFirst: 'basePool_withdrawingShares_ASC_NULLS_FIRST',
  BasePoolWithdrawingSharesDesc: 'basePool_withdrawingShares_DESC',
  BasePoolWithdrawingSharesDescNullsLast: 'basePool_withdrawingShares_DESC_NULLS_LAST',
  BasePoolWithdrawingValueAsc: 'basePool_withdrawingValue_ASC',
  BasePoolWithdrawingValueAscNullsFirst: 'basePool_withdrawingValue_ASC_NULLS_FIRST',
  BasePoolWithdrawingValueDesc: 'basePool_withdrawingValue_DESC',
  BasePoolWithdrawingValueDescNullsLast: 'basePool_withdrawingValue_DESC_NULLS_LAST',
  CreateTimeAsc: 'createTime_ASC',
  CreateTimeAscNullsFirst: 'createTime_ASC_NULLS_FIRST',
  CreateTimeDesc: 'createTime_DESC',
  CreateTimeDescNullsLast: 'createTime_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST'
} as const;

export type BasePoolWhitelistOrderByInput = typeof BasePoolWhitelistOrderByInput[keyof typeof BasePoolWhitelistOrderByInput];
type BasePoolWhitelistWhereInput = {
  AND?: InputMaybe<Array<BasePoolWhitelistWhereInput>>;
  OR?: InputMaybe<Array<BasePoolWhitelistWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  basePool?: InputMaybe<BasePoolWhereInput>;
  basePool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
};

type BasePoolWhitelistsConnection = {
  edges: Array<BasePoolWhitelistEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type BasePoolsConnection = {
  edges: Array<BasePoolEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type Delegation = {
  account: Account;
  basePool: BasePool;
  cost: Scalars['BigDecimal']['output'];
  delegationNft?: Maybe<Nft>;
  /** ${pid}-${accountId} */
  id: Scalars['String']['output'];
  shares: Scalars['BigDecimal']['output'];
  value: Scalars['BigDecimal']['output'];
  withdrawalNft?: Maybe<Nft>;
  withdrawalStartTime?: Maybe<Scalars['DateTime']['output']>;
  withdrawingShares: Scalars['BigDecimal']['output'];
  withdrawingValue: Scalars['BigDecimal']['output'];
};

type DelegationEdge = {
  cursor: Scalars['String']['output'];
  node: Delegation;
};

const DelegationOrderByInput = {
  AccountCumulativeStakePoolOwnerRewardsAsc: 'account_cumulativeStakePoolOwnerRewards_ASC',
  AccountCumulativeStakePoolOwnerRewardsAscNullsFirst: 'account_cumulativeStakePoolOwnerRewards_ASC_NULLS_FIRST',
  AccountCumulativeStakePoolOwnerRewardsDesc: 'account_cumulativeStakePoolOwnerRewards_DESC',
  AccountCumulativeStakePoolOwnerRewardsDescNullsLast: 'account_cumulativeStakePoolOwnerRewards_DESC_NULLS_LAST',
  AccountCumulativeVaultOwnerRewardsAsc: 'account_cumulativeVaultOwnerRewards_ASC',
  AccountCumulativeVaultOwnerRewardsAscNullsFirst: 'account_cumulativeVaultOwnerRewards_ASC_NULLS_FIRST',
  AccountCumulativeVaultOwnerRewardsDesc: 'account_cumulativeVaultOwnerRewards_DESC',
  AccountCumulativeVaultOwnerRewardsDescNullsLast: 'account_cumulativeVaultOwnerRewards_DESC_NULLS_LAST',
  AccountIdAsc: 'account_id_ASC',
  AccountIdAscNullsFirst: 'account_id_ASC_NULLS_FIRST',
  AccountIdDesc: 'account_id_DESC',
  AccountIdDescNullsLast: 'account_id_DESC_NULLS_LAST',
  AccountIdentityDisplayAsc: 'account_identityDisplay_ASC',
  AccountIdentityDisplayAscNullsFirst: 'account_identityDisplay_ASC_NULLS_FIRST',
  AccountIdentityDisplayDesc: 'account_identityDisplay_DESC',
  AccountIdentityDisplayDescNullsLast: 'account_identityDisplay_DESC_NULLS_LAST',
  AccountIdentityLevelAsc: 'account_identityLevel_ASC',
  AccountIdentityLevelAscNullsFirst: 'account_identityLevel_ASC_NULLS_FIRST',
  AccountIdentityLevelDesc: 'account_identityLevel_DESC',
  AccountIdentityLevelDescNullsLast: 'account_identityLevel_DESC_NULLS_LAST',
  AccountStakePoolAvgAprMultiplierAsc: 'account_stakePoolAvgAprMultiplier_ASC',
  AccountStakePoolAvgAprMultiplierAscNullsFirst: 'account_stakePoolAvgAprMultiplier_ASC_NULLS_FIRST',
  AccountStakePoolAvgAprMultiplierDesc: 'account_stakePoolAvgAprMultiplier_DESC',
  AccountStakePoolAvgAprMultiplierDescNullsLast: 'account_stakePoolAvgAprMultiplier_DESC_NULLS_LAST',
  AccountStakePoolNftCountAsc: 'account_stakePoolNftCount_ASC',
  AccountStakePoolNftCountAscNullsFirst: 'account_stakePoolNftCount_ASC_NULLS_FIRST',
  AccountStakePoolNftCountDesc: 'account_stakePoolNftCount_DESC',
  AccountStakePoolNftCountDescNullsLast: 'account_stakePoolNftCount_DESC_NULLS_LAST',
  AccountStakePoolValueAsc: 'account_stakePoolValue_ASC',
  AccountStakePoolValueAscNullsFirst: 'account_stakePoolValue_ASC_NULLS_FIRST',
  AccountStakePoolValueDesc: 'account_stakePoolValue_DESC',
  AccountStakePoolValueDescNullsLast: 'account_stakePoolValue_DESC_NULLS_LAST',
  AccountVaultAvgAprMultiplierAsc: 'account_vaultAvgAprMultiplier_ASC',
  AccountVaultAvgAprMultiplierAscNullsFirst: 'account_vaultAvgAprMultiplier_ASC_NULLS_FIRST',
  AccountVaultAvgAprMultiplierDesc: 'account_vaultAvgAprMultiplier_DESC',
  AccountVaultAvgAprMultiplierDescNullsLast: 'account_vaultAvgAprMultiplier_DESC_NULLS_LAST',
  AccountVaultNftCountAsc: 'account_vaultNftCount_ASC',
  AccountVaultNftCountAscNullsFirst: 'account_vaultNftCount_ASC_NULLS_FIRST',
  AccountVaultNftCountDesc: 'account_vaultNftCount_DESC',
  AccountVaultNftCountDescNullsLast: 'account_vaultNftCount_DESC_NULLS_LAST',
  AccountVaultValueAsc: 'account_vaultValue_ASC',
  AccountVaultValueAscNullsFirst: 'account_vaultValue_ASC_NULLS_FIRST',
  AccountVaultValueDesc: 'account_vaultValue_DESC',
  AccountVaultValueDescNullsLast: 'account_vaultValue_DESC_NULLS_LAST',
  BasePoolAprMultiplierAsc: 'basePool_aprMultiplier_ASC',
  BasePoolAprMultiplierAscNullsFirst: 'basePool_aprMultiplier_ASC_NULLS_FIRST',
  BasePoolAprMultiplierDesc: 'basePool_aprMultiplier_DESC',
  BasePoolAprMultiplierDescNullsLast: 'basePool_aprMultiplier_DESC_NULLS_LAST',
  BasePoolCidAsc: 'basePool_cid_ASC',
  BasePoolCidAscNullsFirst: 'basePool_cid_ASC_NULLS_FIRST',
  BasePoolCidDesc: 'basePool_cid_DESC',
  BasePoolCidDescNullsLast: 'basePool_cid_DESC_NULLS_LAST',
  BasePoolCommissionAsc: 'basePool_commission_ASC',
  BasePoolCommissionAscNullsFirst: 'basePool_commission_ASC_NULLS_FIRST',
  BasePoolCommissionDesc: 'basePool_commission_DESC',
  BasePoolCommissionDescNullsLast: 'basePool_commission_DESC_NULLS_LAST',
  BasePoolCumulativeOwnerRewardsAsc: 'basePool_cumulativeOwnerRewards_ASC',
  BasePoolCumulativeOwnerRewardsAscNullsFirst: 'basePool_cumulativeOwnerRewards_ASC_NULLS_FIRST',
  BasePoolCumulativeOwnerRewardsDesc: 'basePool_cumulativeOwnerRewards_DESC',
  BasePoolCumulativeOwnerRewardsDescNullsLast: 'basePool_cumulativeOwnerRewards_DESC_NULLS_LAST',
  BasePoolDelegatorCountAsc: 'basePool_delegatorCount_ASC',
  BasePoolDelegatorCountAscNullsFirst: 'basePool_delegatorCount_ASC_NULLS_FIRST',
  BasePoolDelegatorCountDesc: 'basePool_delegatorCount_DESC',
  BasePoolDelegatorCountDescNullsLast: 'basePool_delegatorCount_DESC_NULLS_LAST',
  BasePoolFreeValueAsc: 'basePool_freeValue_ASC',
  BasePoolFreeValueAscNullsFirst: 'basePool_freeValue_ASC_NULLS_FIRST',
  BasePoolFreeValueDesc: 'basePool_freeValue_DESC',
  BasePoolFreeValueDescNullsLast: 'basePool_freeValue_DESC_NULLS_LAST',
  BasePoolIdAsc: 'basePool_id_ASC',
  BasePoolIdAscNullsFirst: 'basePool_id_ASC_NULLS_FIRST',
  BasePoolIdDesc: 'basePool_id_DESC',
  BasePoolIdDescNullsLast: 'basePool_id_DESC_NULLS_LAST',
  BasePoolKindAsc: 'basePool_kind_ASC',
  BasePoolKindAscNullsFirst: 'basePool_kind_ASC_NULLS_FIRST',
  BasePoolKindDesc: 'basePool_kind_DESC',
  BasePoolKindDescNullsLast: 'basePool_kind_DESC_NULLS_LAST',
  BasePoolPidAsc: 'basePool_pid_ASC',
  BasePoolPidAscNullsFirst: 'basePool_pid_ASC_NULLS_FIRST',
  BasePoolPidDesc: 'basePool_pid_DESC',
  BasePoolPidDescNullsLast: 'basePool_pid_DESC_NULLS_LAST',
  BasePoolReleasingValueAsc: 'basePool_releasingValue_ASC',
  BasePoolReleasingValueAscNullsFirst: 'basePool_releasingValue_ASC_NULLS_FIRST',
  BasePoolReleasingValueDesc: 'basePool_releasingValue_DESC',
  BasePoolReleasingValueDescNullsLast: 'basePool_releasingValue_DESC_NULLS_LAST',
  BasePoolSharePriceAsc: 'basePool_sharePrice_ASC',
  BasePoolSharePriceAscNullsFirst: 'basePool_sharePrice_ASC_NULLS_FIRST',
  BasePoolSharePriceDesc: 'basePool_sharePrice_DESC',
  BasePoolSharePriceDescNullsLast: 'basePool_sharePrice_DESC_NULLS_LAST',
  BasePoolTotalSharesAsc: 'basePool_totalShares_ASC',
  BasePoolTotalSharesAscNullsFirst: 'basePool_totalShares_ASC_NULLS_FIRST',
  BasePoolTotalSharesDesc: 'basePool_totalShares_DESC',
  BasePoolTotalSharesDescNullsLast: 'basePool_totalShares_DESC_NULLS_LAST',
  BasePoolTotalValueAsc: 'basePool_totalValue_ASC',
  BasePoolTotalValueAscNullsFirst: 'basePool_totalValue_ASC_NULLS_FIRST',
  BasePoolTotalValueDesc: 'basePool_totalValue_DESC',
  BasePoolTotalValueDescNullsLast: 'basePool_totalValue_DESC_NULLS_LAST',
  BasePoolWhitelistEnabledAsc: 'basePool_whitelistEnabled_ASC',
  BasePoolWhitelistEnabledAscNullsFirst: 'basePool_whitelistEnabled_ASC_NULLS_FIRST',
  BasePoolWhitelistEnabledDesc: 'basePool_whitelistEnabled_DESC',
  BasePoolWhitelistEnabledDescNullsLast: 'basePool_whitelistEnabled_DESC_NULLS_LAST',
  BasePoolWithdrawingSharesAsc: 'basePool_withdrawingShares_ASC',
  BasePoolWithdrawingSharesAscNullsFirst: 'basePool_withdrawingShares_ASC_NULLS_FIRST',
  BasePoolWithdrawingSharesDesc: 'basePool_withdrawingShares_DESC',
  BasePoolWithdrawingSharesDescNullsLast: 'basePool_withdrawingShares_DESC_NULLS_LAST',
  BasePoolWithdrawingValueAsc: 'basePool_withdrawingValue_ASC',
  BasePoolWithdrawingValueAscNullsFirst: 'basePool_withdrawingValue_ASC_NULLS_FIRST',
  BasePoolWithdrawingValueDesc: 'basePool_withdrawingValue_DESC',
  BasePoolWithdrawingValueDescNullsLast: 'basePool_withdrawingValue_DESC_NULLS_LAST',
  CostAsc: 'cost_ASC',
  CostAscNullsFirst: 'cost_ASC_NULLS_FIRST',
  CostDesc: 'cost_DESC',
  CostDescNullsLast: 'cost_DESC_NULLS_LAST',
  DelegationNftCidAsc: 'delegationNft_cid_ASC',
  DelegationNftCidAscNullsFirst: 'delegationNft_cid_ASC_NULLS_FIRST',
  DelegationNftCidDesc: 'delegationNft_cid_DESC',
  DelegationNftCidDescNullsLast: 'delegationNft_cid_DESC_NULLS_LAST',
  DelegationNftIdAsc: 'delegationNft_id_ASC',
  DelegationNftIdAscNullsFirst: 'delegationNft_id_ASC_NULLS_FIRST',
  DelegationNftIdDesc: 'delegationNft_id_DESC',
  DelegationNftIdDescNullsLast: 'delegationNft_id_DESC_NULLS_LAST',
  DelegationNftMintTimeAsc: 'delegationNft_mintTime_ASC',
  DelegationNftMintTimeAscNullsFirst: 'delegationNft_mintTime_ASC_NULLS_FIRST',
  DelegationNftMintTimeDesc: 'delegationNft_mintTime_DESC',
  DelegationNftMintTimeDescNullsLast: 'delegationNft_mintTime_DESC_NULLS_LAST',
  DelegationNftNftIdAsc: 'delegationNft_nftId_ASC',
  DelegationNftNftIdAscNullsFirst: 'delegationNft_nftId_ASC_NULLS_FIRST',
  DelegationNftNftIdDesc: 'delegationNft_nftId_DESC',
  DelegationNftNftIdDescNullsLast: 'delegationNft_nftId_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  SharesAsc: 'shares_ASC',
  SharesAscNullsFirst: 'shares_ASC_NULLS_FIRST',
  SharesDesc: 'shares_DESC',
  SharesDescNullsLast: 'shares_DESC_NULLS_LAST',
  ValueAsc: 'value_ASC',
  ValueAscNullsFirst: 'value_ASC_NULLS_FIRST',
  ValueDesc: 'value_DESC',
  ValueDescNullsLast: 'value_DESC_NULLS_LAST',
  WithdrawalNftCidAsc: 'withdrawalNft_cid_ASC',
  WithdrawalNftCidAscNullsFirst: 'withdrawalNft_cid_ASC_NULLS_FIRST',
  WithdrawalNftCidDesc: 'withdrawalNft_cid_DESC',
  WithdrawalNftCidDescNullsLast: 'withdrawalNft_cid_DESC_NULLS_LAST',
  WithdrawalNftIdAsc: 'withdrawalNft_id_ASC',
  WithdrawalNftIdAscNullsFirst: 'withdrawalNft_id_ASC_NULLS_FIRST',
  WithdrawalNftIdDesc: 'withdrawalNft_id_DESC',
  WithdrawalNftIdDescNullsLast: 'withdrawalNft_id_DESC_NULLS_LAST',
  WithdrawalNftMintTimeAsc: 'withdrawalNft_mintTime_ASC',
  WithdrawalNftMintTimeAscNullsFirst: 'withdrawalNft_mintTime_ASC_NULLS_FIRST',
  WithdrawalNftMintTimeDesc: 'withdrawalNft_mintTime_DESC',
  WithdrawalNftMintTimeDescNullsLast: 'withdrawalNft_mintTime_DESC_NULLS_LAST',
  WithdrawalNftNftIdAsc: 'withdrawalNft_nftId_ASC',
  WithdrawalNftNftIdAscNullsFirst: 'withdrawalNft_nftId_ASC_NULLS_FIRST',
  WithdrawalNftNftIdDesc: 'withdrawalNft_nftId_DESC',
  WithdrawalNftNftIdDescNullsLast: 'withdrawalNft_nftId_DESC_NULLS_LAST',
  WithdrawalStartTimeAsc: 'withdrawalStartTime_ASC',
  WithdrawalStartTimeAscNullsFirst: 'withdrawalStartTime_ASC_NULLS_FIRST',
  WithdrawalStartTimeDesc: 'withdrawalStartTime_DESC',
  WithdrawalStartTimeDescNullsLast: 'withdrawalStartTime_DESC_NULLS_LAST',
  WithdrawingSharesAsc: 'withdrawingShares_ASC',
  WithdrawingSharesAscNullsFirst: 'withdrawingShares_ASC_NULLS_FIRST',
  WithdrawingSharesDesc: 'withdrawingShares_DESC',
  WithdrawingSharesDescNullsLast: 'withdrawingShares_DESC_NULLS_LAST',
  WithdrawingValueAsc: 'withdrawingValue_ASC',
  WithdrawingValueAscNullsFirst: 'withdrawingValue_ASC_NULLS_FIRST',
  WithdrawingValueDesc: 'withdrawingValue_DESC',
  WithdrawingValueDescNullsLast: 'withdrawingValue_DESC_NULLS_LAST'
} as const;

export type DelegationOrderByInput = typeof DelegationOrderByInput[keyof typeof DelegationOrderByInput];
type DelegationSnapshot = {
  cost: Scalars['BigDecimal']['output'];
  delegation: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** block time */
  updatedTime: Scalars['DateTime']['output'];
  value: Scalars['BigDecimal']['output'];
};

type DelegationSnapshotEdge = {
  cursor: Scalars['String']['output'];
  node: DelegationSnapshot;
};

const DelegationSnapshotOrderByInput = {
  CostAsc: 'cost_ASC',
  CostAscNullsFirst: 'cost_ASC_NULLS_FIRST',
  CostDesc: 'cost_DESC',
  CostDescNullsLast: 'cost_DESC_NULLS_LAST',
  DelegationAsc: 'delegation_ASC',
  DelegationAscNullsFirst: 'delegation_ASC_NULLS_FIRST',
  DelegationDesc: 'delegation_DESC',
  DelegationDescNullsLast: 'delegation_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  UpdatedTimeAsc: 'updatedTime_ASC',
  UpdatedTimeAscNullsFirst: 'updatedTime_ASC_NULLS_FIRST',
  UpdatedTimeDesc: 'updatedTime_DESC',
  UpdatedTimeDescNullsLast: 'updatedTime_DESC_NULLS_LAST',
  ValueAsc: 'value_ASC',
  ValueAscNullsFirst: 'value_ASC_NULLS_FIRST',
  ValueDesc: 'value_DESC',
  ValueDescNullsLast: 'value_DESC_NULLS_LAST'
} as const;

export type DelegationSnapshotOrderByInput = typeof DelegationSnapshotOrderByInput[keyof typeof DelegationSnapshotOrderByInput];
type DelegationSnapshotWhereInput = {
  AND?: InputMaybe<Array<DelegationSnapshotWhereInput>>;
  OR?: InputMaybe<Array<DelegationSnapshotWhereInput>>;
  cost_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cost_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cost_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegation_contains?: InputMaybe<Scalars['String']['input']>;
  delegation_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  delegation_endsWith?: InputMaybe<Scalars['String']['input']>;
  delegation_eq?: InputMaybe<Scalars['String']['input']>;
  delegation_gt?: InputMaybe<Scalars['String']['input']>;
  delegation_gte?: InputMaybe<Scalars['String']['input']>;
  delegation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegation_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  delegation_lt?: InputMaybe<Scalars['String']['input']>;
  delegation_lte?: InputMaybe<Scalars['String']['input']>;
  delegation_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegation_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  delegation_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  delegation_not_eq?: InputMaybe<Scalars['String']['input']>;
  delegation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegation_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  delegation_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  updatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  value_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

type DelegationSnapshotsConnection = {
  edges: Array<DelegationSnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type DelegationWhereInput = {
  AND?: InputMaybe<Array<DelegationWhereInput>>;
  OR?: InputMaybe<Array<DelegationWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  basePool?: InputMaybe<BasePoolWhereInput>;
  basePool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cost_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cost_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cost_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cost_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegationNft?: InputMaybe<NftWhereInput>;
  delegationNft_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  shares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawalNft?: InputMaybe<NftWhereInput>;
  withdrawalNft_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawalStartTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  withdrawalStartTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  withdrawalStartTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  withdrawalStartTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  withdrawalStartTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawalStartTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  withdrawalStartTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  withdrawalStartTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  withdrawalStartTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  withdrawingShares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawingShares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawingShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawingValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawingValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawingValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawingValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

type DelegationsConnection = {
  edges: Array<DelegationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type GlobalState = {
  averageApr: Scalars['BigDecimal']['output'];
  averageAprMultiplier: Scalars['BigDecimal']['output'];
  averageBlockTime: Scalars['Int']['output'];
  averageBlockTimeUpdatedHeight: Scalars['Int']['output'];
  averageBlockTimeUpdatedTime: Scalars['DateTime']['output'];
  budgetPerBlock: Scalars['BigDecimal']['output'];
  budgetPerShare: Scalars['BigDecimal']['output'];
  cumulativeRewards: Scalars['BigDecimal']['output'];
  delegatorCount: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  /** constant 0 */
  id: Scalars['String']['output'];
  idleWorkerCount: Scalars['Int']['output'];
  /** for apr calculation */
  idleWorkerShares: Scalars['BigDecimal']['output'];
  k: Scalars['BigDecimal']['output'];
  phaRate: Scalars['BigDecimal']['output'];
  re: Scalars['BigDecimal']['output'];
  snapshotUpdatedTime: Scalars['DateTime']['output'];
  tokenomicUpdatedTime: Scalars['DateTime']['output'];
  totalValue: Scalars['BigDecimal']['output'];
  treasuryRatio: Scalars['BigDecimal']['output'];
  vMax: Scalars['BigDecimal']['output'];
  withdrawalDustCleared?: Maybe<Scalars['Boolean']['output']>;
  workerCount: Scalars['Int']['output'];
};

type GlobalStateEdge = {
  cursor: Scalars['String']['output'];
  node: GlobalState;
};

const GlobalStateOrderByInput = {
  AverageAprMultiplierAsc: 'averageAprMultiplier_ASC',
  AverageAprMultiplierAscNullsFirst: 'averageAprMultiplier_ASC_NULLS_FIRST',
  AverageAprMultiplierDesc: 'averageAprMultiplier_DESC',
  AverageAprMultiplierDescNullsLast: 'averageAprMultiplier_DESC_NULLS_LAST',
  AverageAprAsc: 'averageApr_ASC',
  AverageAprAscNullsFirst: 'averageApr_ASC_NULLS_FIRST',
  AverageAprDesc: 'averageApr_DESC',
  AverageAprDescNullsLast: 'averageApr_DESC_NULLS_LAST',
  AverageBlockTimeUpdatedHeightAsc: 'averageBlockTimeUpdatedHeight_ASC',
  AverageBlockTimeUpdatedHeightAscNullsFirst: 'averageBlockTimeUpdatedHeight_ASC_NULLS_FIRST',
  AverageBlockTimeUpdatedHeightDesc: 'averageBlockTimeUpdatedHeight_DESC',
  AverageBlockTimeUpdatedHeightDescNullsLast: 'averageBlockTimeUpdatedHeight_DESC_NULLS_LAST',
  AverageBlockTimeUpdatedTimeAsc: 'averageBlockTimeUpdatedTime_ASC',
  AverageBlockTimeUpdatedTimeAscNullsFirst: 'averageBlockTimeUpdatedTime_ASC_NULLS_FIRST',
  AverageBlockTimeUpdatedTimeDesc: 'averageBlockTimeUpdatedTime_DESC',
  AverageBlockTimeUpdatedTimeDescNullsLast: 'averageBlockTimeUpdatedTime_DESC_NULLS_LAST',
  AverageBlockTimeAsc: 'averageBlockTime_ASC',
  AverageBlockTimeAscNullsFirst: 'averageBlockTime_ASC_NULLS_FIRST',
  AverageBlockTimeDesc: 'averageBlockTime_DESC',
  AverageBlockTimeDescNullsLast: 'averageBlockTime_DESC_NULLS_LAST',
  BudgetPerBlockAsc: 'budgetPerBlock_ASC',
  BudgetPerBlockAscNullsFirst: 'budgetPerBlock_ASC_NULLS_FIRST',
  BudgetPerBlockDesc: 'budgetPerBlock_DESC',
  BudgetPerBlockDescNullsLast: 'budgetPerBlock_DESC_NULLS_LAST',
  BudgetPerShareAsc: 'budgetPerShare_ASC',
  BudgetPerShareAscNullsFirst: 'budgetPerShare_ASC_NULLS_FIRST',
  BudgetPerShareDesc: 'budgetPerShare_DESC',
  BudgetPerShareDescNullsLast: 'budgetPerShare_DESC_NULLS_LAST',
  CumulativeRewardsAsc: 'cumulativeRewards_ASC',
  CumulativeRewardsAscNullsFirst: 'cumulativeRewards_ASC_NULLS_FIRST',
  CumulativeRewardsDesc: 'cumulativeRewards_DESC',
  CumulativeRewardsDescNullsLast: 'cumulativeRewards_DESC_NULLS_LAST',
  DelegatorCountAsc: 'delegatorCount_ASC',
  DelegatorCountAscNullsFirst: 'delegatorCount_ASC_NULLS_FIRST',
  DelegatorCountDesc: 'delegatorCount_DESC',
  DelegatorCountDescNullsLast: 'delegatorCount_DESC_NULLS_LAST',
  HeightAsc: 'height_ASC',
  HeightAscNullsFirst: 'height_ASC_NULLS_FIRST',
  HeightDesc: 'height_DESC',
  HeightDescNullsLast: 'height_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  IdleWorkerCountAsc: 'idleWorkerCount_ASC',
  IdleWorkerCountAscNullsFirst: 'idleWorkerCount_ASC_NULLS_FIRST',
  IdleWorkerCountDesc: 'idleWorkerCount_DESC',
  IdleWorkerCountDescNullsLast: 'idleWorkerCount_DESC_NULLS_LAST',
  IdleWorkerSharesAsc: 'idleWorkerShares_ASC',
  IdleWorkerSharesAscNullsFirst: 'idleWorkerShares_ASC_NULLS_FIRST',
  IdleWorkerSharesDesc: 'idleWorkerShares_DESC',
  IdleWorkerSharesDescNullsLast: 'idleWorkerShares_DESC_NULLS_LAST',
  KAsc: 'k_ASC',
  KAscNullsFirst: 'k_ASC_NULLS_FIRST',
  KDesc: 'k_DESC',
  KDescNullsLast: 'k_DESC_NULLS_LAST',
  PhaRateAsc: 'phaRate_ASC',
  PhaRateAscNullsFirst: 'phaRate_ASC_NULLS_FIRST',
  PhaRateDesc: 'phaRate_DESC',
  PhaRateDescNullsLast: 'phaRate_DESC_NULLS_LAST',
  ReAsc: 're_ASC',
  ReAscNullsFirst: 're_ASC_NULLS_FIRST',
  ReDesc: 're_DESC',
  ReDescNullsLast: 're_DESC_NULLS_LAST',
  SnapshotUpdatedTimeAsc: 'snapshotUpdatedTime_ASC',
  SnapshotUpdatedTimeAscNullsFirst: 'snapshotUpdatedTime_ASC_NULLS_FIRST',
  SnapshotUpdatedTimeDesc: 'snapshotUpdatedTime_DESC',
  SnapshotUpdatedTimeDescNullsLast: 'snapshotUpdatedTime_DESC_NULLS_LAST',
  TokenomicUpdatedTimeAsc: 'tokenomicUpdatedTime_ASC',
  TokenomicUpdatedTimeAscNullsFirst: 'tokenomicUpdatedTime_ASC_NULLS_FIRST',
  TokenomicUpdatedTimeDesc: 'tokenomicUpdatedTime_DESC',
  TokenomicUpdatedTimeDescNullsLast: 'tokenomicUpdatedTime_DESC_NULLS_LAST',
  TotalValueAsc: 'totalValue_ASC',
  TotalValueAscNullsFirst: 'totalValue_ASC_NULLS_FIRST',
  TotalValueDesc: 'totalValue_DESC',
  TotalValueDescNullsLast: 'totalValue_DESC_NULLS_LAST',
  TreasuryRatioAsc: 'treasuryRatio_ASC',
  TreasuryRatioAscNullsFirst: 'treasuryRatio_ASC_NULLS_FIRST',
  TreasuryRatioDesc: 'treasuryRatio_DESC',
  TreasuryRatioDescNullsLast: 'treasuryRatio_DESC_NULLS_LAST',
  VMaxAsc: 'vMax_ASC',
  VMaxAscNullsFirst: 'vMax_ASC_NULLS_FIRST',
  VMaxDesc: 'vMax_DESC',
  VMaxDescNullsLast: 'vMax_DESC_NULLS_LAST',
  WithdrawalDustClearedAsc: 'withdrawalDustCleared_ASC',
  WithdrawalDustClearedAscNullsFirst: 'withdrawalDustCleared_ASC_NULLS_FIRST',
  WithdrawalDustClearedDesc: 'withdrawalDustCleared_DESC',
  WithdrawalDustClearedDescNullsLast: 'withdrawalDustCleared_DESC_NULLS_LAST',
  WorkerCountAsc: 'workerCount_ASC',
  WorkerCountAscNullsFirst: 'workerCount_ASC_NULLS_FIRST',
  WorkerCountDesc: 'workerCount_DESC',
  WorkerCountDescNullsLast: 'workerCount_DESC_NULLS_LAST'
} as const;

export type GlobalStateOrderByInput = typeof GlobalStateOrderByInput[keyof typeof GlobalStateOrderByInput];
type GlobalStateSnapshot = {
  averageApr: Scalars['BigDecimal']['output'];
  averageBlockTime: Scalars['Int']['output'];
  budgetPerBlock: Scalars['BigDecimal']['output'];
  budgetPerShare: Scalars['BigDecimal']['output'];
  cumulativeRewards: Scalars['BigDecimal']['output'];
  delegatorCount: Scalars['Int']['output'];
  /** block time */
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  idleWorkerCount: Scalars['Int']['output'];
  idleWorkerShares: Scalars['BigDecimal']['output'];
  totalValue: Scalars['BigDecimal']['output'];
  updatedTime: Scalars['DateTime']['output'];
  workerCount: Scalars['Int']['output'];
};

type GlobalStateSnapshotEdge = {
  cursor: Scalars['String']['output'];
  node: GlobalStateSnapshot;
};

const GlobalStateSnapshotOrderByInput = {
  AverageAprAsc: 'averageApr_ASC',
  AverageAprAscNullsFirst: 'averageApr_ASC_NULLS_FIRST',
  AverageAprDesc: 'averageApr_DESC',
  AverageAprDescNullsLast: 'averageApr_DESC_NULLS_LAST',
  AverageBlockTimeAsc: 'averageBlockTime_ASC',
  AverageBlockTimeAscNullsFirst: 'averageBlockTime_ASC_NULLS_FIRST',
  AverageBlockTimeDesc: 'averageBlockTime_DESC',
  AverageBlockTimeDescNullsLast: 'averageBlockTime_DESC_NULLS_LAST',
  BudgetPerBlockAsc: 'budgetPerBlock_ASC',
  BudgetPerBlockAscNullsFirst: 'budgetPerBlock_ASC_NULLS_FIRST',
  BudgetPerBlockDesc: 'budgetPerBlock_DESC',
  BudgetPerBlockDescNullsLast: 'budgetPerBlock_DESC_NULLS_LAST',
  BudgetPerShareAsc: 'budgetPerShare_ASC',
  BudgetPerShareAscNullsFirst: 'budgetPerShare_ASC_NULLS_FIRST',
  BudgetPerShareDesc: 'budgetPerShare_DESC',
  BudgetPerShareDescNullsLast: 'budgetPerShare_DESC_NULLS_LAST',
  CumulativeRewardsAsc: 'cumulativeRewards_ASC',
  CumulativeRewardsAscNullsFirst: 'cumulativeRewards_ASC_NULLS_FIRST',
  CumulativeRewardsDesc: 'cumulativeRewards_DESC',
  CumulativeRewardsDescNullsLast: 'cumulativeRewards_DESC_NULLS_LAST',
  DelegatorCountAsc: 'delegatorCount_ASC',
  DelegatorCountAscNullsFirst: 'delegatorCount_ASC_NULLS_FIRST',
  DelegatorCountDesc: 'delegatorCount_DESC',
  DelegatorCountDescNullsLast: 'delegatorCount_DESC_NULLS_LAST',
  HeightAsc: 'height_ASC',
  HeightAscNullsFirst: 'height_ASC_NULLS_FIRST',
  HeightDesc: 'height_DESC',
  HeightDescNullsLast: 'height_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  IdleWorkerCountAsc: 'idleWorkerCount_ASC',
  IdleWorkerCountAscNullsFirst: 'idleWorkerCount_ASC_NULLS_FIRST',
  IdleWorkerCountDesc: 'idleWorkerCount_DESC',
  IdleWorkerCountDescNullsLast: 'idleWorkerCount_DESC_NULLS_LAST',
  IdleWorkerSharesAsc: 'idleWorkerShares_ASC',
  IdleWorkerSharesAscNullsFirst: 'idleWorkerShares_ASC_NULLS_FIRST',
  IdleWorkerSharesDesc: 'idleWorkerShares_DESC',
  IdleWorkerSharesDescNullsLast: 'idleWorkerShares_DESC_NULLS_LAST',
  TotalValueAsc: 'totalValue_ASC',
  TotalValueAscNullsFirst: 'totalValue_ASC_NULLS_FIRST',
  TotalValueDesc: 'totalValue_DESC',
  TotalValueDescNullsLast: 'totalValue_DESC_NULLS_LAST',
  UpdatedTimeAsc: 'updatedTime_ASC',
  UpdatedTimeAscNullsFirst: 'updatedTime_ASC_NULLS_FIRST',
  UpdatedTimeDesc: 'updatedTime_DESC',
  UpdatedTimeDescNullsLast: 'updatedTime_DESC_NULLS_LAST',
  WorkerCountAsc: 'workerCount_ASC',
  WorkerCountAscNullsFirst: 'workerCount_ASC_NULLS_FIRST',
  WorkerCountDesc: 'workerCount_DESC',
  WorkerCountDescNullsLast: 'workerCount_DESC_NULLS_LAST'
} as const;

export type GlobalStateSnapshotOrderByInput = typeof GlobalStateSnapshotOrderByInput[keyof typeof GlobalStateSnapshotOrderByInput];
type GlobalStateSnapshotWhereInput = {
  AND?: InputMaybe<Array<GlobalStateSnapshotWhereInput>>;
  OR?: InputMaybe<Array<GlobalStateSnapshotWhereInput>>;
  averageApr_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  averageApr_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  averageApr_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  averageBlockTime_eq?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  averageBlockTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  averageBlockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_not_eq?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  budgetPerBlock_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  budgetPerBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  budgetPerBlock_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  budgetPerShare_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  budgetPerShare_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  budgetPerShare_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeRewards_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeRewards_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeRewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegatorCount_eq?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegatorCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  height_eq?: InputMaybe<Scalars['Int']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  height_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not_eq?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  idleWorkerCount_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorkerCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorkerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorkerShares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  idleWorkerShares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorkerShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  updatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  workerCount_eq?: InputMaybe<Scalars['Int']['input']>;
  workerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  workerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  workerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  workerCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  workerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  workerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  workerCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  workerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

type GlobalStateSnapshotsConnection = {
  edges: Array<GlobalStateSnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type GlobalStateWhereInput = {
  AND?: InputMaybe<Array<GlobalStateWhereInput>>;
  OR?: InputMaybe<Array<GlobalStateWhereInput>>;
  averageAprMultiplier_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageAprMultiplier_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageAprMultiplier_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageAprMultiplier_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  averageAprMultiplier_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  averageAprMultiplier_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageAprMultiplier_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageAprMultiplier_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageAprMultiplier_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  averageApr_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  averageApr_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  averageApr_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  averageApr_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  averageBlockTimeUpdatedHeight_eq?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTimeUpdatedHeight_gt?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTimeUpdatedHeight_gte?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTimeUpdatedHeight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  averageBlockTimeUpdatedHeight_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  averageBlockTimeUpdatedHeight_lt?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTimeUpdatedHeight_lte?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTimeUpdatedHeight_not_eq?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTimeUpdatedHeight_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  averageBlockTimeUpdatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  averageBlockTimeUpdatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  averageBlockTimeUpdatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  averageBlockTimeUpdatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  averageBlockTimeUpdatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  averageBlockTimeUpdatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  averageBlockTimeUpdatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  averageBlockTimeUpdatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  averageBlockTimeUpdatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  averageBlockTime_eq?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_gt?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_gte?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  averageBlockTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  averageBlockTime_lt?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_lte?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_not_eq?: InputMaybe<Scalars['Int']['input']>;
  averageBlockTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  budgetPerBlock_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  budgetPerBlock_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  budgetPerBlock_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerBlock_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  budgetPerShare_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  budgetPerShare_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  budgetPerShare_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  budgetPerShare_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeRewards_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cumulativeRewards_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cumulativeRewards_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  cumulativeRewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegatorCount_eq?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_gte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegatorCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  delegatorCount_lt?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_lte?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  delegatorCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  height_eq?: InputMaybe<Scalars['Int']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  height_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not_eq?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  idleWorkerCount_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorkerCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorkerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorkerShares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  idleWorkerShares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorkerShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  k_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  k_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  k_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  k_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  k_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  k_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  k_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  k_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  k_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  phaRate_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  phaRate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  phaRate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  phaRate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  phaRate_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  phaRate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  phaRate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  phaRate_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  phaRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  re_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  re_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  re_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  re_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  re_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  re_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  re_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  re_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  re_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  snapshotUpdatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  snapshotUpdatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  snapshotUpdatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  tokenomicUpdatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  tokenomicUpdatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  tokenomicUpdatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  tokenomicUpdatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  tokenomicUpdatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenomicUpdatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  tokenomicUpdatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  tokenomicUpdatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  tokenomicUpdatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  totalValue_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValue_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  treasuryRatio_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryRatio_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryRatio_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryRatio_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  treasuryRatio_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  treasuryRatio_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryRatio_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryRatio_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  treasuryRatio_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  vMax_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  vMax_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  vMax_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  vMax_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  vMax_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  vMax_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  vMax_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  vMax_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  vMax_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawalDustCleared_eq?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawalDustCleared_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawalDustCleared_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  workerCount_eq?: InputMaybe<Scalars['Int']['input']>;
  workerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  workerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  workerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  workerCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  workerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  workerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  workerCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  workerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

type GlobalStatesConnection = {
  edges: Array<GlobalStateEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

const IdentityJudgement = {
  Erroneous: 'Erroneous',
  FeePaid: 'FeePaid',
  KnownGood: 'KnownGood',
  LowQuality: 'LowQuality',
  OutOfDate: 'OutOfDate',
  Reasonable: 'Reasonable',
  Unknown: 'Unknown'
} as const;

export type IdentityJudgement = typeof IdentityJudgement[keyof typeof IdentityJudgement];
type Nft = {
  cid: Scalars['Int']['output'];
  delegation?: Maybe<Delegation>;
  /** ${cid}-${nftId} */
  id: Scalars['String']['output'];
  mintTime?: Maybe<Scalars['DateTime']['output']>;
  nftId: Scalars['Int']['output'];
  owner: Account;
};

type NftEdge = {
  cursor: Scalars['String']['output'];
  node: Nft;
};

const NftOrderByInput = {
  CidAsc: 'cid_ASC',
  CidAscNullsFirst: 'cid_ASC_NULLS_FIRST',
  CidDesc: 'cid_DESC',
  CidDescNullsLast: 'cid_DESC_NULLS_LAST',
  DelegationCostAsc: 'delegation_cost_ASC',
  DelegationCostAscNullsFirst: 'delegation_cost_ASC_NULLS_FIRST',
  DelegationCostDesc: 'delegation_cost_DESC',
  DelegationCostDescNullsLast: 'delegation_cost_DESC_NULLS_LAST',
  DelegationIdAsc: 'delegation_id_ASC',
  DelegationIdAscNullsFirst: 'delegation_id_ASC_NULLS_FIRST',
  DelegationIdDesc: 'delegation_id_DESC',
  DelegationIdDescNullsLast: 'delegation_id_DESC_NULLS_LAST',
  DelegationSharesAsc: 'delegation_shares_ASC',
  DelegationSharesAscNullsFirst: 'delegation_shares_ASC_NULLS_FIRST',
  DelegationSharesDesc: 'delegation_shares_DESC',
  DelegationSharesDescNullsLast: 'delegation_shares_DESC_NULLS_LAST',
  DelegationValueAsc: 'delegation_value_ASC',
  DelegationValueAscNullsFirst: 'delegation_value_ASC_NULLS_FIRST',
  DelegationValueDesc: 'delegation_value_DESC',
  DelegationValueDescNullsLast: 'delegation_value_DESC_NULLS_LAST',
  DelegationWithdrawalStartTimeAsc: 'delegation_withdrawalStartTime_ASC',
  DelegationWithdrawalStartTimeAscNullsFirst: 'delegation_withdrawalStartTime_ASC_NULLS_FIRST',
  DelegationWithdrawalStartTimeDesc: 'delegation_withdrawalStartTime_DESC',
  DelegationWithdrawalStartTimeDescNullsLast: 'delegation_withdrawalStartTime_DESC_NULLS_LAST',
  DelegationWithdrawingSharesAsc: 'delegation_withdrawingShares_ASC',
  DelegationWithdrawingSharesAscNullsFirst: 'delegation_withdrawingShares_ASC_NULLS_FIRST',
  DelegationWithdrawingSharesDesc: 'delegation_withdrawingShares_DESC',
  DelegationWithdrawingSharesDescNullsLast: 'delegation_withdrawingShares_DESC_NULLS_LAST',
  DelegationWithdrawingValueAsc: 'delegation_withdrawingValue_ASC',
  DelegationWithdrawingValueAscNullsFirst: 'delegation_withdrawingValue_ASC_NULLS_FIRST',
  DelegationWithdrawingValueDesc: 'delegation_withdrawingValue_DESC',
  DelegationWithdrawingValueDescNullsLast: 'delegation_withdrawingValue_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  MintTimeAsc: 'mintTime_ASC',
  MintTimeAscNullsFirst: 'mintTime_ASC_NULLS_FIRST',
  MintTimeDesc: 'mintTime_DESC',
  MintTimeDescNullsLast: 'mintTime_DESC_NULLS_LAST',
  NftIdAsc: 'nftId_ASC',
  NftIdAscNullsFirst: 'nftId_ASC_NULLS_FIRST',
  NftIdDesc: 'nftId_DESC',
  NftIdDescNullsLast: 'nftId_DESC_NULLS_LAST',
  OwnerCumulativeStakePoolOwnerRewardsAsc: 'owner_cumulativeStakePoolOwnerRewards_ASC',
  OwnerCumulativeStakePoolOwnerRewardsAscNullsFirst: 'owner_cumulativeStakePoolOwnerRewards_ASC_NULLS_FIRST',
  OwnerCumulativeStakePoolOwnerRewardsDesc: 'owner_cumulativeStakePoolOwnerRewards_DESC',
  OwnerCumulativeStakePoolOwnerRewardsDescNullsLast: 'owner_cumulativeStakePoolOwnerRewards_DESC_NULLS_LAST',
  OwnerCumulativeVaultOwnerRewardsAsc: 'owner_cumulativeVaultOwnerRewards_ASC',
  OwnerCumulativeVaultOwnerRewardsAscNullsFirst: 'owner_cumulativeVaultOwnerRewards_ASC_NULLS_FIRST',
  OwnerCumulativeVaultOwnerRewardsDesc: 'owner_cumulativeVaultOwnerRewards_DESC',
  OwnerCumulativeVaultOwnerRewardsDescNullsLast: 'owner_cumulativeVaultOwnerRewards_DESC_NULLS_LAST',
  OwnerIdAsc: 'owner_id_ASC',
  OwnerIdAscNullsFirst: 'owner_id_ASC_NULLS_FIRST',
  OwnerIdDesc: 'owner_id_DESC',
  OwnerIdDescNullsLast: 'owner_id_DESC_NULLS_LAST',
  OwnerIdentityDisplayAsc: 'owner_identityDisplay_ASC',
  OwnerIdentityDisplayAscNullsFirst: 'owner_identityDisplay_ASC_NULLS_FIRST',
  OwnerIdentityDisplayDesc: 'owner_identityDisplay_DESC',
  OwnerIdentityDisplayDescNullsLast: 'owner_identityDisplay_DESC_NULLS_LAST',
  OwnerIdentityLevelAsc: 'owner_identityLevel_ASC',
  OwnerIdentityLevelAscNullsFirst: 'owner_identityLevel_ASC_NULLS_FIRST',
  OwnerIdentityLevelDesc: 'owner_identityLevel_DESC',
  OwnerIdentityLevelDescNullsLast: 'owner_identityLevel_DESC_NULLS_LAST',
  OwnerStakePoolAvgAprMultiplierAsc: 'owner_stakePoolAvgAprMultiplier_ASC',
  OwnerStakePoolAvgAprMultiplierAscNullsFirst: 'owner_stakePoolAvgAprMultiplier_ASC_NULLS_FIRST',
  OwnerStakePoolAvgAprMultiplierDesc: 'owner_stakePoolAvgAprMultiplier_DESC',
  OwnerStakePoolAvgAprMultiplierDescNullsLast: 'owner_stakePoolAvgAprMultiplier_DESC_NULLS_LAST',
  OwnerStakePoolNftCountAsc: 'owner_stakePoolNftCount_ASC',
  OwnerStakePoolNftCountAscNullsFirst: 'owner_stakePoolNftCount_ASC_NULLS_FIRST',
  OwnerStakePoolNftCountDesc: 'owner_stakePoolNftCount_DESC',
  OwnerStakePoolNftCountDescNullsLast: 'owner_stakePoolNftCount_DESC_NULLS_LAST',
  OwnerStakePoolValueAsc: 'owner_stakePoolValue_ASC',
  OwnerStakePoolValueAscNullsFirst: 'owner_stakePoolValue_ASC_NULLS_FIRST',
  OwnerStakePoolValueDesc: 'owner_stakePoolValue_DESC',
  OwnerStakePoolValueDescNullsLast: 'owner_stakePoolValue_DESC_NULLS_LAST',
  OwnerVaultAvgAprMultiplierAsc: 'owner_vaultAvgAprMultiplier_ASC',
  OwnerVaultAvgAprMultiplierAscNullsFirst: 'owner_vaultAvgAprMultiplier_ASC_NULLS_FIRST',
  OwnerVaultAvgAprMultiplierDesc: 'owner_vaultAvgAprMultiplier_DESC',
  OwnerVaultAvgAprMultiplierDescNullsLast: 'owner_vaultAvgAprMultiplier_DESC_NULLS_LAST',
  OwnerVaultNftCountAsc: 'owner_vaultNftCount_ASC',
  OwnerVaultNftCountAscNullsFirst: 'owner_vaultNftCount_ASC_NULLS_FIRST',
  OwnerVaultNftCountDesc: 'owner_vaultNftCount_DESC',
  OwnerVaultNftCountDescNullsLast: 'owner_vaultNftCount_DESC_NULLS_LAST',
  OwnerVaultValueAsc: 'owner_vaultValue_ASC',
  OwnerVaultValueAscNullsFirst: 'owner_vaultValue_ASC_NULLS_FIRST',
  OwnerVaultValueDesc: 'owner_vaultValue_DESC',
  OwnerVaultValueDescNullsLast: 'owner_vaultValue_DESC_NULLS_LAST'
} as const;

export type NftOrderByInput = typeof NftOrderByInput[keyof typeof NftOrderByInput];
type NftWhereInput = {
  AND?: InputMaybe<Array<NftWhereInput>>;
  OR?: InputMaybe<Array<NftWhereInput>>;
  cid_eq?: InputMaybe<Scalars['Int']['input']>;
  cid_gt?: InputMaybe<Scalars['Int']['input']>;
  cid_gte?: InputMaybe<Scalars['Int']['input']>;
  cid_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cid_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cid_lt?: InputMaybe<Scalars['Int']['input']>;
  cid_lte?: InputMaybe<Scalars['Int']['input']>;
  cid_not_eq?: InputMaybe<Scalars['Int']['input']>;
  cid_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegation?: InputMaybe<DelegationWhereInput>;
  delegation_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  mintTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  mintTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  mintTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  mintTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  mintTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  mintTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  mintTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  mintTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  mintTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  nftId_eq?: InputMaybe<Scalars['Int']['input']>;
  nftId_gt?: InputMaybe<Scalars['Int']['input']>;
  nftId_gte?: InputMaybe<Scalars['Int']['input']>;
  nftId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nftId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  nftId_lt?: InputMaybe<Scalars['Int']['input']>;
  nftId_lte?: InputMaybe<Scalars['Int']['input']>;
  nftId_not_eq?: InputMaybe<Scalars['Int']['input']>;
  nftId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  owner?: InputMaybe<AccountWhereInput>;
  owner_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

type NftsConnection = {
  edges: Array<NftEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type PageInfo = {
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

type Query = {
  accountById?: Maybe<Account>;
  /** @deprecated Use accountById */
  accountByUniqueInput?: Maybe<Account>;
  accountSnapshotById?: Maybe<AccountSnapshot>;
  /** @deprecated Use accountSnapshotById */
  accountSnapshotByUniqueInput?: Maybe<AccountSnapshot>;
  accountSnapshots: Array<AccountSnapshot>;
  accountSnapshotsConnection: AccountSnapshotsConnection;
  accounts: Array<Account>;
  accountsConnection: AccountsConnection;
  basePoolById?: Maybe<BasePool>;
  /** @deprecated Use basePoolById */
  basePoolByUniqueInput?: Maybe<BasePool>;
  basePoolSnapshotById?: Maybe<BasePoolSnapshot>;
  /** @deprecated Use basePoolSnapshotById */
  basePoolSnapshotByUniqueInput?: Maybe<BasePoolSnapshot>;
  basePoolSnapshots: Array<BasePoolSnapshot>;
  basePoolSnapshotsConnection: BasePoolSnapshotsConnection;
  basePoolWhitelistById?: Maybe<BasePoolWhitelist>;
  /** @deprecated Use basePoolWhitelistById */
  basePoolWhitelistByUniqueInput?: Maybe<BasePoolWhitelist>;
  basePoolWhitelists: Array<BasePoolWhitelist>;
  basePoolWhitelistsConnection: BasePoolWhitelistsConnection;
  basePools: Array<BasePool>;
  basePoolsConnection: BasePoolsConnection;
  delegationById?: Maybe<Delegation>;
  /** @deprecated Use delegationById */
  delegationByUniqueInput?: Maybe<Delegation>;
  delegationSnapshotById?: Maybe<DelegationSnapshot>;
  /** @deprecated Use delegationSnapshotById */
  delegationSnapshotByUniqueInput?: Maybe<DelegationSnapshot>;
  delegationSnapshots: Array<DelegationSnapshot>;
  delegationSnapshotsConnection: DelegationSnapshotsConnection;
  delegations: Array<Delegation>;
  delegationsConnection: DelegationsConnection;
  globalStateById?: Maybe<GlobalState>;
  /** @deprecated Use globalStateById */
  globalStateByUniqueInput?: Maybe<GlobalState>;
  globalStateSnapshotById?: Maybe<GlobalStateSnapshot>;
  /** @deprecated Use globalStateSnapshotById */
  globalStateSnapshotByUniqueInput?: Maybe<GlobalStateSnapshot>;
  globalStateSnapshots: Array<GlobalStateSnapshot>;
  globalStateSnapshotsConnection: GlobalStateSnapshotsConnection;
  globalStates: Array<GlobalState>;
  globalStatesConnection: GlobalStatesConnection;
  nftById?: Maybe<Nft>;
  /** @deprecated Use nftById */
  nftByUniqueInput?: Maybe<Nft>;
  nfts: Array<Nft>;
  nftsConnection: NftsConnection;
  sessionById?: Maybe<Session>;
  /** @deprecated Use sessionById */
  sessionByUniqueInput?: Maybe<Session>;
  sessions: Array<Session>;
  sessionsConnection: SessionsConnection;
  squidStatus?: Maybe<SquidStatus>;
  stakePoolById?: Maybe<StakePool>;
  /** @deprecated Use stakePoolById */
  stakePoolByUniqueInput?: Maybe<StakePool>;
  stakePools: Array<StakePool>;
  stakePoolsConnection: StakePoolsConnection;
  vaultById?: Maybe<Vault>;
  /** @deprecated Use vaultById */
  vaultByUniqueInput?: Maybe<Vault>;
  vaults: Array<Vault>;
  vaultsConnection: VaultsConnection;
  workerById?: Maybe<Worker>;
  /** @deprecated Use workerById */
  workerByUniqueInput?: Maybe<Worker>;
  workerSnapshotById?: Maybe<WorkerSnapshot>;
  /** @deprecated Use workerSnapshotById */
  workerSnapshotByUniqueInput?: Maybe<WorkerSnapshot>;
  workerSnapshots: Array<WorkerSnapshot>;
  workerSnapshotsConnection: WorkerSnapshotsConnection;
  workers: Array<Worker>;
  workersConnection: WorkersConnection;
};


type QueryAccountByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryAccountByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryAccountSnapshotByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryAccountSnapshotByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryAccountSnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountSnapshotOrderByInput>>;
  where?: InputMaybe<AccountSnapshotWhereInput>;
};


type QueryAccountSnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AccountSnapshotOrderByInput>;
  where?: InputMaybe<AccountSnapshotWhereInput>;
};


type QueryAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountOrderByInput>>;
  where?: InputMaybe<AccountWhereInput>;
};


type QueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AccountOrderByInput>;
  where?: InputMaybe<AccountWhereInput>;
};


type QueryBasePoolByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryBasePoolByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryBasePoolSnapshotByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryBasePoolSnapshotByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryBasePoolSnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BasePoolSnapshotOrderByInput>>;
  where?: InputMaybe<BasePoolSnapshotWhereInput>;
};


type QueryBasePoolSnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<BasePoolSnapshotOrderByInput>;
  where?: InputMaybe<BasePoolSnapshotWhereInput>;
};


type QueryBasePoolWhitelistByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryBasePoolWhitelistByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryBasePoolWhitelistsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BasePoolWhitelistOrderByInput>>;
  where?: InputMaybe<BasePoolWhitelistWhereInput>;
};


type QueryBasePoolWhitelistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<BasePoolWhitelistOrderByInput>;
  where?: InputMaybe<BasePoolWhitelistWhereInput>;
};


type QueryBasePoolsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BasePoolOrderByInput>>;
  where?: InputMaybe<BasePoolWhereInput>;
};


type QueryBasePoolsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<BasePoolOrderByInput>;
  where?: InputMaybe<BasePoolWhereInput>;
};


type QueryDelegationByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryDelegationByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryDelegationSnapshotByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryDelegationSnapshotByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryDelegationSnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DelegationSnapshotOrderByInput>>;
  where?: InputMaybe<DelegationSnapshotWhereInput>;
};


type QueryDelegationSnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DelegationSnapshotOrderByInput>;
  where?: InputMaybe<DelegationSnapshotWhereInput>;
};


type QueryDelegationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DelegationOrderByInput>>;
  where?: InputMaybe<DelegationWhereInput>;
};


type QueryDelegationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<DelegationOrderByInput>;
  where?: InputMaybe<DelegationWhereInput>;
};


type QueryGlobalStateByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryGlobalStateByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryGlobalStateSnapshotByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryGlobalStateSnapshotByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryGlobalStateSnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GlobalStateSnapshotOrderByInput>>;
  where?: InputMaybe<GlobalStateSnapshotWhereInput>;
};


type QueryGlobalStateSnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<GlobalStateSnapshotOrderByInput>;
  where?: InputMaybe<GlobalStateSnapshotWhereInput>;
};


type QueryGlobalStatesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GlobalStateOrderByInput>>;
  where?: InputMaybe<GlobalStateWhereInput>;
};


type QueryGlobalStatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<GlobalStateOrderByInput>;
  where?: InputMaybe<GlobalStateWhereInput>;
};


type QueryNftByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryNftByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryNftsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NftOrderByInput>>;
  where?: InputMaybe<NftWhereInput>;
};


type QueryNftsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<NftOrderByInput>;
  where?: InputMaybe<NftWhereInput>;
};


type QuerySessionByIdArgs = {
  id: Scalars['String']['input'];
};


type QuerySessionByUniqueInputArgs = {
  where: WhereIdInput;
};


type QuerySessionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SessionOrderByInput>>;
  where?: InputMaybe<SessionWhereInput>;
};


type QuerySessionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<SessionOrderByInput>;
  where?: InputMaybe<SessionWhereInput>;
};


type QueryStakePoolByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryStakePoolByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryStakePoolsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StakePoolOrderByInput>>;
  where?: InputMaybe<StakePoolWhereInput>;
};


type QueryStakePoolsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<StakePoolOrderByInput>;
  where?: InputMaybe<StakePoolWhereInput>;
};


type QueryVaultByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryVaultByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryVaultsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VaultOrderByInput>>;
  where?: InputMaybe<VaultWhereInput>;
};


type QueryVaultsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<VaultOrderByInput>;
  where?: InputMaybe<VaultWhereInput>;
};


type QueryWorkerByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryWorkerByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryWorkerSnapshotByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryWorkerSnapshotByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryWorkerSnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkerSnapshotOrderByInput>>;
  where?: InputMaybe<WorkerSnapshotWhereInput>;
};


type QueryWorkerSnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<WorkerSnapshotOrderByInput>;
  where?: InputMaybe<WorkerSnapshotWhereInput>;
};


type QueryWorkersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkerOrderByInput>>;
  where?: InputMaybe<WorkerWhereInput>;
};


type QueryWorkersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<WorkerOrderByInput>;
  where?: InputMaybe<WorkerWhereInput>;
};

type Session = {
  coolingDownStartTime?: Maybe<Scalars['DateTime']['output']>;
  /** session account address */
  id: Scalars['String']['output'];
  pInit: Scalars['Int']['output'];
  pInstant: Scalars['Int']['output'];
  shares: Scalars['BigDecimal']['output'];
  stake: Scalars['BigDecimal']['output'];
  state: WorkerState;
  totalReward: Scalars['BigDecimal']['output'];
  v: Scalars['BigDecimal']['output'];
  ve: Scalars['BigDecimal']['output'];
  worker?: Maybe<Worker>;
};

type SessionEdge = {
  cursor: Scalars['String']['output'];
  node: Session;
};

const SessionOrderByInput = {
  CoolingDownStartTimeAsc: 'coolingDownStartTime_ASC',
  CoolingDownStartTimeAscNullsFirst: 'coolingDownStartTime_ASC_NULLS_FIRST',
  CoolingDownStartTimeDesc: 'coolingDownStartTime_DESC',
  CoolingDownStartTimeDescNullsLast: 'coolingDownStartTime_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  PInitAsc: 'pInit_ASC',
  PInitAscNullsFirst: 'pInit_ASC_NULLS_FIRST',
  PInitDesc: 'pInit_DESC',
  PInitDescNullsLast: 'pInit_DESC_NULLS_LAST',
  PInstantAsc: 'pInstant_ASC',
  PInstantAscNullsFirst: 'pInstant_ASC_NULLS_FIRST',
  PInstantDesc: 'pInstant_DESC',
  PInstantDescNullsLast: 'pInstant_DESC_NULLS_LAST',
  SharesAsc: 'shares_ASC',
  SharesAscNullsFirst: 'shares_ASC_NULLS_FIRST',
  SharesDesc: 'shares_DESC',
  SharesDescNullsLast: 'shares_DESC_NULLS_LAST',
  StakeAsc: 'stake_ASC',
  StakeAscNullsFirst: 'stake_ASC_NULLS_FIRST',
  StakeDesc: 'stake_DESC',
  StakeDescNullsLast: 'stake_DESC_NULLS_LAST',
  StateAsc: 'state_ASC',
  StateAscNullsFirst: 'state_ASC_NULLS_FIRST',
  StateDesc: 'state_DESC',
  StateDescNullsLast: 'state_DESC_NULLS_LAST',
  TotalRewardAsc: 'totalReward_ASC',
  TotalRewardAscNullsFirst: 'totalReward_ASC_NULLS_FIRST',
  TotalRewardDesc: 'totalReward_DESC',
  TotalRewardDescNullsLast: 'totalReward_DESC_NULLS_LAST',
  VAsc: 'v_ASC',
  VAscNullsFirst: 'v_ASC_NULLS_FIRST',
  VDesc: 'v_DESC',
  VDescNullsLast: 'v_DESC_NULLS_LAST',
  VeAsc: 've_ASC',
  VeAscNullsFirst: 've_ASC_NULLS_FIRST',
  VeDesc: 've_DESC',
  VeDescNullsLast: 've_DESC_NULLS_LAST',
  WorkerConfidenceLevelAsc: 'worker_confidenceLevel_ASC',
  WorkerConfidenceLevelAscNullsFirst: 'worker_confidenceLevel_ASC_NULLS_FIRST',
  WorkerConfidenceLevelDesc: 'worker_confidenceLevel_DESC',
  WorkerConfidenceLevelDescNullsLast: 'worker_confidenceLevel_DESC_NULLS_LAST',
  WorkerIdAsc: 'worker_id_ASC',
  WorkerIdAscNullsFirst: 'worker_id_ASC_NULLS_FIRST',
  WorkerIdDesc: 'worker_id_DESC',
  WorkerIdDescNullsLast: 'worker_id_DESC_NULLS_LAST',
  WorkerInitialScoreAsc: 'worker_initialScore_ASC',
  WorkerInitialScoreAscNullsFirst: 'worker_initialScore_ASC_NULLS_FIRST',
  WorkerInitialScoreDesc: 'worker_initialScore_DESC',
  WorkerInitialScoreDescNullsLast: 'worker_initialScore_DESC_NULLS_LAST'
} as const;

export type SessionOrderByInput = typeof SessionOrderByInput[keyof typeof SessionOrderByInput];
type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  coolingDownStartTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  coolingDownStartTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  coolingDownStartTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  coolingDownStartTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  coolingDownStartTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  coolingDownStartTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  coolingDownStartTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  coolingDownStartTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  coolingDownStartTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  pInit_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_gt?: InputMaybe<Scalars['Int']['input']>;
  pInit_gte?: InputMaybe<Scalars['Int']['input']>;
  pInit_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pInit_lt?: InputMaybe<Scalars['Int']['input']>;
  pInit_lte?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInstant_eq?: InputMaybe<Scalars['Int']['input']>;
  pInstant_gt?: InputMaybe<Scalars['Int']['input']>;
  pInstant_gte?: InputMaybe<Scalars['Int']['input']>;
  pInstant_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInstant_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pInstant_lt?: InputMaybe<Scalars['Int']['input']>;
  pInstant_lte?: InputMaybe<Scalars['Int']['input']>;
  pInstant_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pInstant_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  shares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stake_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stake_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stake_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  state_eq?: InputMaybe<WorkerState>;
  state_in?: InputMaybe<Array<WorkerState>>;
  state_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  state_not_eq?: InputMaybe<WorkerState>;
  state_not_in?: InputMaybe<Array<WorkerState>>;
  totalReward_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalReward_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalReward_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  v_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  v_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  v_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  ve_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  ve_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ve_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  worker?: InputMaybe<WorkerWhereInput>;
  worker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

type SessionsConnection = {
  edges: Array<SessionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type SquidStatus = {
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

type StakePool = {
  basePool: BasePool;
  /** null means infinite */
  capacity?: Maybe<Scalars['BigDecimal']['output']>;
  /** null means infinite */
  delegable?: Maybe<Scalars['BigDecimal']['output']>;
  /** pid */
  id: Scalars['String']['output'];
  idleWorkerCount: Scalars['Int']['output'];
  idleWorkerShares: Scalars['BigDecimal']['output'];
  ownerReward: Scalars['BigDecimal']['output'];
  workerCount: Scalars['Int']['output'];
  workers: Array<Worker>;
};


type StakePoolWorkersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WorkerOrderByInput>>;
  where?: InputMaybe<WorkerWhereInput>;
};

type StakePoolEdge = {
  cursor: Scalars['String']['output'];
  node: StakePool;
};

const StakePoolOrderByInput = {
  BasePoolAprMultiplierAsc: 'basePool_aprMultiplier_ASC',
  BasePoolAprMultiplierAscNullsFirst: 'basePool_aprMultiplier_ASC_NULLS_FIRST',
  BasePoolAprMultiplierDesc: 'basePool_aprMultiplier_DESC',
  BasePoolAprMultiplierDescNullsLast: 'basePool_aprMultiplier_DESC_NULLS_LAST',
  BasePoolCidAsc: 'basePool_cid_ASC',
  BasePoolCidAscNullsFirst: 'basePool_cid_ASC_NULLS_FIRST',
  BasePoolCidDesc: 'basePool_cid_DESC',
  BasePoolCidDescNullsLast: 'basePool_cid_DESC_NULLS_LAST',
  BasePoolCommissionAsc: 'basePool_commission_ASC',
  BasePoolCommissionAscNullsFirst: 'basePool_commission_ASC_NULLS_FIRST',
  BasePoolCommissionDesc: 'basePool_commission_DESC',
  BasePoolCommissionDescNullsLast: 'basePool_commission_DESC_NULLS_LAST',
  BasePoolCumulativeOwnerRewardsAsc: 'basePool_cumulativeOwnerRewards_ASC',
  BasePoolCumulativeOwnerRewardsAscNullsFirst: 'basePool_cumulativeOwnerRewards_ASC_NULLS_FIRST',
  BasePoolCumulativeOwnerRewardsDesc: 'basePool_cumulativeOwnerRewards_DESC',
  BasePoolCumulativeOwnerRewardsDescNullsLast: 'basePool_cumulativeOwnerRewards_DESC_NULLS_LAST',
  BasePoolDelegatorCountAsc: 'basePool_delegatorCount_ASC',
  BasePoolDelegatorCountAscNullsFirst: 'basePool_delegatorCount_ASC_NULLS_FIRST',
  BasePoolDelegatorCountDesc: 'basePool_delegatorCount_DESC',
  BasePoolDelegatorCountDescNullsLast: 'basePool_delegatorCount_DESC_NULLS_LAST',
  BasePoolFreeValueAsc: 'basePool_freeValue_ASC',
  BasePoolFreeValueAscNullsFirst: 'basePool_freeValue_ASC_NULLS_FIRST',
  BasePoolFreeValueDesc: 'basePool_freeValue_DESC',
  BasePoolFreeValueDescNullsLast: 'basePool_freeValue_DESC_NULLS_LAST',
  BasePoolIdAsc: 'basePool_id_ASC',
  BasePoolIdAscNullsFirst: 'basePool_id_ASC_NULLS_FIRST',
  BasePoolIdDesc: 'basePool_id_DESC',
  BasePoolIdDescNullsLast: 'basePool_id_DESC_NULLS_LAST',
  BasePoolKindAsc: 'basePool_kind_ASC',
  BasePoolKindAscNullsFirst: 'basePool_kind_ASC_NULLS_FIRST',
  BasePoolKindDesc: 'basePool_kind_DESC',
  BasePoolKindDescNullsLast: 'basePool_kind_DESC_NULLS_LAST',
  BasePoolPidAsc: 'basePool_pid_ASC',
  BasePoolPidAscNullsFirst: 'basePool_pid_ASC_NULLS_FIRST',
  BasePoolPidDesc: 'basePool_pid_DESC',
  BasePoolPidDescNullsLast: 'basePool_pid_DESC_NULLS_LAST',
  BasePoolReleasingValueAsc: 'basePool_releasingValue_ASC',
  BasePoolReleasingValueAscNullsFirst: 'basePool_releasingValue_ASC_NULLS_FIRST',
  BasePoolReleasingValueDesc: 'basePool_releasingValue_DESC',
  BasePoolReleasingValueDescNullsLast: 'basePool_releasingValue_DESC_NULLS_LAST',
  BasePoolSharePriceAsc: 'basePool_sharePrice_ASC',
  BasePoolSharePriceAscNullsFirst: 'basePool_sharePrice_ASC_NULLS_FIRST',
  BasePoolSharePriceDesc: 'basePool_sharePrice_DESC',
  BasePoolSharePriceDescNullsLast: 'basePool_sharePrice_DESC_NULLS_LAST',
  BasePoolTotalSharesAsc: 'basePool_totalShares_ASC',
  BasePoolTotalSharesAscNullsFirst: 'basePool_totalShares_ASC_NULLS_FIRST',
  BasePoolTotalSharesDesc: 'basePool_totalShares_DESC',
  BasePoolTotalSharesDescNullsLast: 'basePool_totalShares_DESC_NULLS_LAST',
  BasePoolTotalValueAsc: 'basePool_totalValue_ASC',
  BasePoolTotalValueAscNullsFirst: 'basePool_totalValue_ASC_NULLS_FIRST',
  BasePoolTotalValueDesc: 'basePool_totalValue_DESC',
  BasePoolTotalValueDescNullsLast: 'basePool_totalValue_DESC_NULLS_LAST',
  BasePoolWhitelistEnabledAsc: 'basePool_whitelistEnabled_ASC',
  BasePoolWhitelistEnabledAscNullsFirst: 'basePool_whitelistEnabled_ASC_NULLS_FIRST',
  BasePoolWhitelistEnabledDesc: 'basePool_whitelistEnabled_DESC',
  BasePoolWhitelistEnabledDescNullsLast: 'basePool_whitelistEnabled_DESC_NULLS_LAST',
  BasePoolWithdrawingSharesAsc: 'basePool_withdrawingShares_ASC',
  BasePoolWithdrawingSharesAscNullsFirst: 'basePool_withdrawingShares_ASC_NULLS_FIRST',
  BasePoolWithdrawingSharesDesc: 'basePool_withdrawingShares_DESC',
  BasePoolWithdrawingSharesDescNullsLast: 'basePool_withdrawingShares_DESC_NULLS_LAST',
  BasePoolWithdrawingValueAsc: 'basePool_withdrawingValue_ASC',
  BasePoolWithdrawingValueAscNullsFirst: 'basePool_withdrawingValue_ASC_NULLS_FIRST',
  BasePoolWithdrawingValueDesc: 'basePool_withdrawingValue_DESC',
  BasePoolWithdrawingValueDescNullsLast: 'basePool_withdrawingValue_DESC_NULLS_LAST',
  CapacityAsc: 'capacity_ASC',
  CapacityAscNullsFirst: 'capacity_ASC_NULLS_FIRST',
  CapacityDesc: 'capacity_DESC',
  CapacityDescNullsLast: 'capacity_DESC_NULLS_LAST',
  DelegableAsc: 'delegable_ASC',
  DelegableAscNullsFirst: 'delegable_ASC_NULLS_FIRST',
  DelegableDesc: 'delegable_DESC',
  DelegableDescNullsLast: 'delegable_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  IdleWorkerCountAsc: 'idleWorkerCount_ASC',
  IdleWorkerCountAscNullsFirst: 'idleWorkerCount_ASC_NULLS_FIRST',
  IdleWorkerCountDesc: 'idleWorkerCount_DESC',
  IdleWorkerCountDescNullsLast: 'idleWorkerCount_DESC_NULLS_LAST',
  IdleWorkerSharesAsc: 'idleWorkerShares_ASC',
  IdleWorkerSharesAscNullsFirst: 'idleWorkerShares_ASC_NULLS_FIRST',
  IdleWorkerSharesDesc: 'idleWorkerShares_DESC',
  IdleWorkerSharesDescNullsLast: 'idleWorkerShares_DESC_NULLS_LAST',
  OwnerRewardAsc: 'ownerReward_ASC',
  OwnerRewardAscNullsFirst: 'ownerReward_ASC_NULLS_FIRST',
  OwnerRewardDesc: 'ownerReward_DESC',
  OwnerRewardDescNullsLast: 'ownerReward_DESC_NULLS_LAST',
  WorkerCountAsc: 'workerCount_ASC',
  WorkerCountAscNullsFirst: 'workerCount_ASC_NULLS_FIRST',
  WorkerCountDesc: 'workerCount_DESC',
  WorkerCountDescNullsLast: 'workerCount_DESC_NULLS_LAST'
} as const;

export type StakePoolOrderByInput = typeof StakePoolOrderByInput[keyof typeof StakePoolOrderByInput];
type StakePoolWhereInput = {
  AND?: InputMaybe<Array<StakePoolWhereInput>>;
  OR?: InputMaybe<Array<StakePoolWhereInput>>;
  basePool?: InputMaybe<BasePoolWhereInput>;
  basePool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  capacity_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  capacity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  capacity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  capacity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  capacity_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  capacity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  capacity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  capacity_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  capacity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegable_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegable_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegable_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegable_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delegable_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  delegable_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegable_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegable_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  delegable_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  idleWorkerCount_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorkerCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorkerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorkerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorkerShares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  idleWorkerShares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorkerShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  idleWorkerShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  ownerReward_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  ownerReward_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ownerReward_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ownerReward_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  ownerReward_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ownerReward_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ownerReward_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ownerReward_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  ownerReward_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  workerCount_eq?: InputMaybe<Scalars['Int']['input']>;
  workerCount_gt?: InputMaybe<Scalars['Int']['input']>;
  workerCount_gte?: InputMaybe<Scalars['Int']['input']>;
  workerCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  workerCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  workerCount_lt?: InputMaybe<Scalars['Int']['input']>;
  workerCount_lte?: InputMaybe<Scalars['Int']['input']>;
  workerCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  workerCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  workers_every?: InputMaybe<WorkerWhereInput>;
  workers_none?: InputMaybe<WorkerWhereInput>;
  workers_some?: InputMaybe<WorkerWhereInput>;
};

type StakePoolsConnection = {
  edges: Array<StakePoolEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type Vault = {
  basePool: BasePool;
  claimableOwnerShares: Scalars['BigDecimal']['output'];
  /** pid */
  id: Scalars['String']['output'];
  /** share price of owner's last gain */
  lastSharePriceCheckpoint: Scalars['BigDecimal']['output'];
};

type VaultEdge = {
  cursor: Scalars['String']['output'];
  node: Vault;
};

const VaultOrderByInput = {
  BasePoolAprMultiplierAsc: 'basePool_aprMultiplier_ASC',
  BasePoolAprMultiplierAscNullsFirst: 'basePool_aprMultiplier_ASC_NULLS_FIRST',
  BasePoolAprMultiplierDesc: 'basePool_aprMultiplier_DESC',
  BasePoolAprMultiplierDescNullsLast: 'basePool_aprMultiplier_DESC_NULLS_LAST',
  BasePoolCidAsc: 'basePool_cid_ASC',
  BasePoolCidAscNullsFirst: 'basePool_cid_ASC_NULLS_FIRST',
  BasePoolCidDesc: 'basePool_cid_DESC',
  BasePoolCidDescNullsLast: 'basePool_cid_DESC_NULLS_LAST',
  BasePoolCommissionAsc: 'basePool_commission_ASC',
  BasePoolCommissionAscNullsFirst: 'basePool_commission_ASC_NULLS_FIRST',
  BasePoolCommissionDesc: 'basePool_commission_DESC',
  BasePoolCommissionDescNullsLast: 'basePool_commission_DESC_NULLS_LAST',
  BasePoolCumulativeOwnerRewardsAsc: 'basePool_cumulativeOwnerRewards_ASC',
  BasePoolCumulativeOwnerRewardsAscNullsFirst: 'basePool_cumulativeOwnerRewards_ASC_NULLS_FIRST',
  BasePoolCumulativeOwnerRewardsDesc: 'basePool_cumulativeOwnerRewards_DESC',
  BasePoolCumulativeOwnerRewardsDescNullsLast: 'basePool_cumulativeOwnerRewards_DESC_NULLS_LAST',
  BasePoolDelegatorCountAsc: 'basePool_delegatorCount_ASC',
  BasePoolDelegatorCountAscNullsFirst: 'basePool_delegatorCount_ASC_NULLS_FIRST',
  BasePoolDelegatorCountDesc: 'basePool_delegatorCount_DESC',
  BasePoolDelegatorCountDescNullsLast: 'basePool_delegatorCount_DESC_NULLS_LAST',
  BasePoolFreeValueAsc: 'basePool_freeValue_ASC',
  BasePoolFreeValueAscNullsFirst: 'basePool_freeValue_ASC_NULLS_FIRST',
  BasePoolFreeValueDesc: 'basePool_freeValue_DESC',
  BasePoolFreeValueDescNullsLast: 'basePool_freeValue_DESC_NULLS_LAST',
  BasePoolIdAsc: 'basePool_id_ASC',
  BasePoolIdAscNullsFirst: 'basePool_id_ASC_NULLS_FIRST',
  BasePoolIdDesc: 'basePool_id_DESC',
  BasePoolIdDescNullsLast: 'basePool_id_DESC_NULLS_LAST',
  BasePoolKindAsc: 'basePool_kind_ASC',
  BasePoolKindAscNullsFirst: 'basePool_kind_ASC_NULLS_FIRST',
  BasePoolKindDesc: 'basePool_kind_DESC',
  BasePoolKindDescNullsLast: 'basePool_kind_DESC_NULLS_LAST',
  BasePoolPidAsc: 'basePool_pid_ASC',
  BasePoolPidAscNullsFirst: 'basePool_pid_ASC_NULLS_FIRST',
  BasePoolPidDesc: 'basePool_pid_DESC',
  BasePoolPidDescNullsLast: 'basePool_pid_DESC_NULLS_LAST',
  BasePoolReleasingValueAsc: 'basePool_releasingValue_ASC',
  BasePoolReleasingValueAscNullsFirst: 'basePool_releasingValue_ASC_NULLS_FIRST',
  BasePoolReleasingValueDesc: 'basePool_releasingValue_DESC',
  BasePoolReleasingValueDescNullsLast: 'basePool_releasingValue_DESC_NULLS_LAST',
  BasePoolSharePriceAsc: 'basePool_sharePrice_ASC',
  BasePoolSharePriceAscNullsFirst: 'basePool_sharePrice_ASC_NULLS_FIRST',
  BasePoolSharePriceDesc: 'basePool_sharePrice_DESC',
  BasePoolSharePriceDescNullsLast: 'basePool_sharePrice_DESC_NULLS_LAST',
  BasePoolTotalSharesAsc: 'basePool_totalShares_ASC',
  BasePoolTotalSharesAscNullsFirst: 'basePool_totalShares_ASC_NULLS_FIRST',
  BasePoolTotalSharesDesc: 'basePool_totalShares_DESC',
  BasePoolTotalSharesDescNullsLast: 'basePool_totalShares_DESC_NULLS_LAST',
  BasePoolTotalValueAsc: 'basePool_totalValue_ASC',
  BasePoolTotalValueAscNullsFirst: 'basePool_totalValue_ASC_NULLS_FIRST',
  BasePoolTotalValueDesc: 'basePool_totalValue_DESC',
  BasePoolTotalValueDescNullsLast: 'basePool_totalValue_DESC_NULLS_LAST',
  BasePoolWhitelistEnabledAsc: 'basePool_whitelistEnabled_ASC',
  BasePoolWhitelistEnabledAscNullsFirst: 'basePool_whitelistEnabled_ASC_NULLS_FIRST',
  BasePoolWhitelistEnabledDesc: 'basePool_whitelistEnabled_DESC',
  BasePoolWhitelistEnabledDescNullsLast: 'basePool_whitelistEnabled_DESC_NULLS_LAST',
  BasePoolWithdrawingSharesAsc: 'basePool_withdrawingShares_ASC',
  BasePoolWithdrawingSharesAscNullsFirst: 'basePool_withdrawingShares_ASC_NULLS_FIRST',
  BasePoolWithdrawingSharesDesc: 'basePool_withdrawingShares_DESC',
  BasePoolWithdrawingSharesDescNullsLast: 'basePool_withdrawingShares_DESC_NULLS_LAST',
  BasePoolWithdrawingValueAsc: 'basePool_withdrawingValue_ASC',
  BasePoolWithdrawingValueAscNullsFirst: 'basePool_withdrawingValue_ASC_NULLS_FIRST',
  BasePoolWithdrawingValueDesc: 'basePool_withdrawingValue_DESC',
  BasePoolWithdrawingValueDescNullsLast: 'basePool_withdrawingValue_DESC_NULLS_LAST',
  ClaimableOwnerSharesAsc: 'claimableOwnerShares_ASC',
  ClaimableOwnerSharesAscNullsFirst: 'claimableOwnerShares_ASC_NULLS_FIRST',
  ClaimableOwnerSharesDesc: 'claimableOwnerShares_DESC',
  ClaimableOwnerSharesDescNullsLast: 'claimableOwnerShares_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  LastSharePriceCheckpointAsc: 'lastSharePriceCheckpoint_ASC',
  LastSharePriceCheckpointAscNullsFirst: 'lastSharePriceCheckpoint_ASC_NULLS_FIRST',
  LastSharePriceCheckpointDesc: 'lastSharePriceCheckpoint_DESC',
  LastSharePriceCheckpointDescNullsLast: 'lastSharePriceCheckpoint_DESC_NULLS_LAST'
} as const;

export type VaultOrderByInput = typeof VaultOrderByInput[keyof typeof VaultOrderByInput];
type VaultWhereInput = {
  AND?: InputMaybe<Array<VaultWhereInput>>;
  OR?: InputMaybe<Array<VaultWhereInput>>;
  basePool?: InputMaybe<BasePoolWhereInput>;
  basePool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  claimableOwnerShares_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  claimableOwnerShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  claimableOwnerShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  claimableOwnerShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  claimableOwnerShares_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  claimableOwnerShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  claimableOwnerShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  claimableOwnerShares_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  claimableOwnerShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  lastSharePriceCheckpoint_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastSharePriceCheckpoint_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastSharePriceCheckpoint_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastSharePriceCheckpoint_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastSharePriceCheckpoint_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastSharePriceCheckpoint_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastSharePriceCheckpoint_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastSharePriceCheckpoint_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastSharePriceCheckpoint_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

type VaultsConnection = {
  edges: Array<VaultEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type WhereIdInput = {
  id: Scalars['String']['input'];
};

type Worker = {
  confidenceLevel: Scalars['Int']['output'];
  /** worker public key */
  id: Scalars['String']['output'];
  initialScore?: Maybe<Scalars['Int']['output']>;
  session?: Maybe<Session>;
  stakePool?: Maybe<StakePool>;
};

type WorkerEdge = {
  cursor: Scalars['String']['output'];
  node: Worker;
};

const WorkerOrderByInput = {
  ConfidenceLevelAsc: 'confidenceLevel_ASC',
  ConfidenceLevelAscNullsFirst: 'confidenceLevel_ASC_NULLS_FIRST',
  ConfidenceLevelDesc: 'confidenceLevel_DESC',
  ConfidenceLevelDescNullsLast: 'confidenceLevel_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  InitialScoreAsc: 'initialScore_ASC',
  InitialScoreAscNullsFirst: 'initialScore_ASC_NULLS_FIRST',
  InitialScoreDesc: 'initialScore_DESC',
  InitialScoreDescNullsLast: 'initialScore_DESC_NULLS_LAST',
  SessionCoolingDownStartTimeAsc: 'session_coolingDownStartTime_ASC',
  SessionCoolingDownStartTimeAscNullsFirst: 'session_coolingDownStartTime_ASC_NULLS_FIRST',
  SessionCoolingDownStartTimeDesc: 'session_coolingDownStartTime_DESC',
  SessionCoolingDownStartTimeDescNullsLast: 'session_coolingDownStartTime_DESC_NULLS_LAST',
  SessionIdAsc: 'session_id_ASC',
  SessionIdAscNullsFirst: 'session_id_ASC_NULLS_FIRST',
  SessionIdDesc: 'session_id_DESC',
  SessionIdDescNullsLast: 'session_id_DESC_NULLS_LAST',
  SessionPInitAsc: 'session_pInit_ASC',
  SessionPInitAscNullsFirst: 'session_pInit_ASC_NULLS_FIRST',
  SessionPInitDesc: 'session_pInit_DESC',
  SessionPInitDescNullsLast: 'session_pInit_DESC_NULLS_LAST',
  SessionPInstantAsc: 'session_pInstant_ASC',
  SessionPInstantAscNullsFirst: 'session_pInstant_ASC_NULLS_FIRST',
  SessionPInstantDesc: 'session_pInstant_DESC',
  SessionPInstantDescNullsLast: 'session_pInstant_DESC_NULLS_LAST',
  SessionSharesAsc: 'session_shares_ASC',
  SessionSharesAscNullsFirst: 'session_shares_ASC_NULLS_FIRST',
  SessionSharesDesc: 'session_shares_DESC',
  SessionSharesDescNullsLast: 'session_shares_DESC_NULLS_LAST',
  SessionStakeAsc: 'session_stake_ASC',
  SessionStakeAscNullsFirst: 'session_stake_ASC_NULLS_FIRST',
  SessionStakeDesc: 'session_stake_DESC',
  SessionStakeDescNullsLast: 'session_stake_DESC_NULLS_LAST',
  SessionStateAsc: 'session_state_ASC',
  SessionStateAscNullsFirst: 'session_state_ASC_NULLS_FIRST',
  SessionStateDesc: 'session_state_DESC',
  SessionStateDescNullsLast: 'session_state_DESC_NULLS_LAST',
  SessionTotalRewardAsc: 'session_totalReward_ASC',
  SessionTotalRewardAscNullsFirst: 'session_totalReward_ASC_NULLS_FIRST',
  SessionTotalRewardDesc: 'session_totalReward_DESC',
  SessionTotalRewardDescNullsLast: 'session_totalReward_DESC_NULLS_LAST',
  SessionVAsc: 'session_v_ASC',
  SessionVAscNullsFirst: 'session_v_ASC_NULLS_FIRST',
  SessionVDesc: 'session_v_DESC',
  SessionVDescNullsLast: 'session_v_DESC_NULLS_LAST',
  SessionVeAsc: 'session_ve_ASC',
  SessionVeAscNullsFirst: 'session_ve_ASC_NULLS_FIRST',
  SessionVeDesc: 'session_ve_DESC',
  SessionVeDescNullsLast: 'session_ve_DESC_NULLS_LAST',
  StakePoolCapacityAsc: 'stakePool_capacity_ASC',
  StakePoolCapacityAscNullsFirst: 'stakePool_capacity_ASC_NULLS_FIRST',
  StakePoolCapacityDesc: 'stakePool_capacity_DESC',
  StakePoolCapacityDescNullsLast: 'stakePool_capacity_DESC_NULLS_LAST',
  StakePoolDelegableAsc: 'stakePool_delegable_ASC',
  StakePoolDelegableAscNullsFirst: 'stakePool_delegable_ASC_NULLS_FIRST',
  StakePoolDelegableDesc: 'stakePool_delegable_DESC',
  StakePoolDelegableDescNullsLast: 'stakePool_delegable_DESC_NULLS_LAST',
  StakePoolIdAsc: 'stakePool_id_ASC',
  StakePoolIdAscNullsFirst: 'stakePool_id_ASC_NULLS_FIRST',
  StakePoolIdDesc: 'stakePool_id_DESC',
  StakePoolIdDescNullsLast: 'stakePool_id_DESC_NULLS_LAST',
  StakePoolIdleWorkerCountAsc: 'stakePool_idleWorkerCount_ASC',
  StakePoolIdleWorkerCountAscNullsFirst: 'stakePool_idleWorkerCount_ASC_NULLS_FIRST',
  StakePoolIdleWorkerCountDesc: 'stakePool_idleWorkerCount_DESC',
  StakePoolIdleWorkerCountDescNullsLast: 'stakePool_idleWorkerCount_DESC_NULLS_LAST',
  StakePoolIdleWorkerSharesAsc: 'stakePool_idleWorkerShares_ASC',
  StakePoolIdleWorkerSharesAscNullsFirst: 'stakePool_idleWorkerShares_ASC_NULLS_FIRST',
  StakePoolIdleWorkerSharesDesc: 'stakePool_idleWorkerShares_DESC',
  StakePoolIdleWorkerSharesDescNullsLast: 'stakePool_idleWorkerShares_DESC_NULLS_LAST',
  StakePoolOwnerRewardAsc: 'stakePool_ownerReward_ASC',
  StakePoolOwnerRewardAscNullsFirst: 'stakePool_ownerReward_ASC_NULLS_FIRST',
  StakePoolOwnerRewardDesc: 'stakePool_ownerReward_DESC',
  StakePoolOwnerRewardDescNullsLast: 'stakePool_ownerReward_DESC_NULLS_LAST',
  StakePoolWorkerCountAsc: 'stakePool_workerCount_ASC',
  StakePoolWorkerCountAscNullsFirst: 'stakePool_workerCount_ASC_NULLS_FIRST',
  StakePoolWorkerCountDesc: 'stakePool_workerCount_DESC',
  StakePoolWorkerCountDescNullsLast: 'stakePool_workerCount_DESC_NULLS_LAST'
} as const;

export type WorkerOrderByInput = typeof WorkerOrderByInput[keyof typeof WorkerOrderByInput];
type WorkerSnapshot = {
  confidenceLevel: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  initialScore?: Maybe<Scalars['Int']['output']>;
  pInit: Scalars['Int']['output'];
  pInstant: Scalars['Int']['output'];
  session: Scalars['String']['output'];
  stake: Scalars['BigDecimal']['output'];
  stakePool: Scalars['String']['output'];
  state: WorkerState;
  totalReward: Scalars['BigDecimal']['output'];
  /** block time */
  updatedTime: Scalars['DateTime']['output'];
  v: Scalars['BigDecimal']['output'];
  ve: Scalars['BigDecimal']['output'];
  worker: Scalars['String']['output'];
};

type WorkerSnapshotEdge = {
  cursor: Scalars['String']['output'];
  node: WorkerSnapshot;
};

const WorkerSnapshotOrderByInput = {
  ConfidenceLevelAsc: 'confidenceLevel_ASC',
  ConfidenceLevelAscNullsFirst: 'confidenceLevel_ASC_NULLS_FIRST',
  ConfidenceLevelDesc: 'confidenceLevel_DESC',
  ConfidenceLevelDescNullsLast: 'confidenceLevel_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  InitialScoreAsc: 'initialScore_ASC',
  InitialScoreAscNullsFirst: 'initialScore_ASC_NULLS_FIRST',
  InitialScoreDesc: 'initialScore_DESC',
  InitialScoreDescNullsLast: 'initialScore_DESC_NULLS_LAST',
  PInitAsc: 'pInit_ASC',
  PInitAscNullsFirst: 'pInit_ASC_NULLS_FIRST',
  PInitDesc: 'pInit_DESC',
  PInitDescNullsLast: 'pInit_DESC_NULLS_LAST',
  PInstantAsc: 'pInstant_ASC',
  PInstantAscNullsFirst: 'pInstant_ASC_NULLS_FIRST',
  PInstantDesc: 'pInstant_DESC',
  PInstantDescNullsLast: 'pInstant_DESC_NULLS_LAST',
  SessionAsc: 'session_ASC',
  SessionAscNullsFirst: 'session_ASC_NULLS_FIRST',
  SessionDesc: 'session_DESC',
  SessionDescNullsLast: 'session_DESC_NULLS_LAST',
  StakePoolAsc: 'stakePool_ASC',
  StakePoolAscNullsFirst: 'stakePool_ASC_NULLS_FIRST',
  StakePoolDesc: 'stakePool_DESC',
  StakePoolDescNullsLast: 'stakePool_DESC_NULLS_LAST',
  StakeAsc: 'stake_ASC',
  StakeAscNullsFirst: 'stake_ASC_NULLS_FIRST',
  StakeDesc: 'stake_DESC',
  StakeDescNullsLast: 'stake_DESC_NULLS_LAST',
  StateAsc: 'state_ASC',
  StateAscNullsFirst: 'state_ASC_NULLS_FIRST',
  StateDesc: 'state_DESC',
  StateDescNullsLast: 'state_DESC_NULLS_LAST',
  TotalRewardAsc: 'totalReward_ASC',
  TotalRewardAscNullsFirst: 'totalReward_ASC_NULLS_FIRST',
  TotalRewardDesc: 'totalReward_DESC',
  TotalRewardDescNullsLast: 'totalReward_DESC_NULLS_LAST',
  UpdatedTimeAsc: 'updatedTime_ASC',
  UpdatedTimeAscNullsFirst: 'updatedTime_ASC_NULLS_FIRST',
  UpdatedTimeDesc: 'updatedTime_DESC',
  UpdatedTimeDescNullsLast: 'updatedTime_DESC_NULLS_LAST',
  VAsc: 'v_ASC',
  VAscNullsFirst: 'v_ASC_NULLS_FIRST',
  VDesc: 'v_DESC',
  VDescNullsLast: 'v_DESC_NULLS_LAST',
  VeAsc: 've_ASC',
  VeAscNullsFirst: 've_ASC_NULLS_FIRST',
  VeDesc: 've_DESC',
  VeDescNullsLast: 've_DESC_NULLS_LAST',
  WorkerAsc: 'worker_ASC',
  WorkerAscNullsFirst: 'worker_ASC_NULLS_FIRST',
  WorkerDesc: 'worker_DESC',
  WorkerDescNullsLast: 'worker_DESC_NULLS_LAST'
} as const;

export type WorkerSnapshotOrderByInput = typeof WorkerSnapshotOrderByInput[keyof typeof WorkerSnapshotOrderByInput];
type WorkerSnapshotWhereInput = {
  AND?: InputMaybe<Array<WorkerSnapshotWhereInput>>;
  OR?: InputMaybe<Array<WorkerSnapshotWhereInput>>;
  confidenceLevel_eq?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_gt?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_gte?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  confidenceLevel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  confidenceLevel_lt?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_lte?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_not_eq?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  initialScore_eq?: InputMaybe<Scalars['Int']['input']>;
  initialScore_gt?: InputMaybe<Scalars['Int']['input']>;
  initialScore_gte?: InputMaybe<Scalars['Int']['input']>;
  initialScore_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  initialScore_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  initialScore_lt?: InputMaybe<Scalars['Int']['input']>;
  initialScore_lte?: InputMaybe<Scalars['Int']['input']>;
  initialScore_not_eq?: InputMaybe<Scalars['Int']['input']>;
  initialScore_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInit_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_gt?: InputMaybe<Scalars['Int']['input']>;
  pInit_gte?: InputMaybe<Scalars['Int']['input']>;
  pInit_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pInit_lt?: InputMaybe<Scalars['Int']['input']>;
  pInit_lte?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInstant_eq?: InputMaybe<Scalars['Int']['input']>;
  pInstant_gt?: InputMaybe<Scalars['Int']['input']>;
  pInstant_gte?: InputMaybe<Scalars['Int']['input']>;
  pInstant_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInstant_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pInstant_lt?: InputMaybe<Scalars['Int']['input']>;
  pInstant_lte?: InputMaybe<Scalars['Int']['input']>;
  pInstant_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pInstant_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  session_contains?: InputMaybe<Scalars['String']['input']>;
  session_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  session_endsWith?: InputMaybe<Scalars['String']['input']>;
  session_eq?: InputMaybe<Scalars['String']['input']>;
  session_gt?: InputMaybe<Scalars['String']['input']>;
  session_gte?: InputMaybe<Scalars['String']['input']>;
  session_in?: InputMaybe<Array<Scalars['String']['input']>>;
  session_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  session_lt?: InputMaybe<Scalars['String']['input']>;
  session_lte?: InputMaybe<Scalars['String']['input']>;
  session_not_contains?: InputMaybe<Scalars['String']['input']>;
  session_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  session_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  session_not_eq?: InputMaybe<Scalars['String']['input']>;
  session_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  session_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  session_startsWith?: InputMaybe<Scalars['String']['input']>;
  stakePool_contains?: InputMaybe<Scalars['String']['input']>;
  stakePool_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  stakePool_endsWith?: InputMaybe<Scalars['String']['input']>;
  stakePool_eq?: InputMaybe<Scalars['String']['input']>;
  stakePool_gt?: InputMaybe<Scalars['String']['input']>;
  stakePool_gte?: InputMaybe<Scalars['String']['input']>;
  stakePool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakePool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stakePool_lt?: InputMaybe<Scalars['String']['input']>;
  stakePool_lte?: InputMaybe<Scalars['String']['input']>;
  stakePool_not_contains?: InputMaybe<Scalars['String']['input']>;
  stakePool_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  stakePool_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  stakePool_not_eq?: InputMaybe<Scalars['String']['input']>;
  stakePool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  stakePool_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  stakePool_startsWith?: InputMaybe<Scalars['String']['input']>;
  stake_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stake_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stake_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  state_eq?: InputMaybe<WorkerState>;
  state_in?: InputMaybe<Array<WorkerState>>;
  state_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  state_not_eq?: InputMaybe<WorkerState>;
  state_not_in?: InputMaybe<Array<WorkerState>>;
  totalReward_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalReward_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalReward_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalReward_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  updatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  v_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  v_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  v_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  ve_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  ve_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ve_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  ve_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  worker_contains?: InputMaybe<Scalars['String']['input']>;
  worker_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  worker_endsWith?: InputMaybe<Scalars['String']['input']>;
  worker_eq?: InputMaybe<Scalars['String']['input']>;
  worker_gt?: InputMaybe<Scalars['String']['input']>;
  worker_gte?: InputMaybe<Scalars['String']['input']>;
  worker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  worker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  worker_lt?: InputMaybe<Scalars['String']['input']>;
  worker_lte?: InputMaybe<Scalars['String']['input']>;
  worker_not_contains?: InputMaybe<Scalars['String']['input']>;
  worker_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  worker_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  worker_not_eq?: InputMaybe<Scalars['String']['input']>;
  worker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  worker_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  worker_startsWith?: InputMaybe<Scalars['String']['input']>;
};

type WorkerSnapshotsConnection = {
  edges: Array<WorkerSnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

const WorkerState = {
  Ready: 'Ready',
  WorkerCoolingDown: 'WorkerCoolingDown',
  WorkerIdle: 'WorkerIdle',
  WorkerUnresponsive: 'WorkerUnresponsive'
} as const;

export type WorkerState = typeof WorkerState[keyof typeof WorkerState];
type WorkerWhereInput = {
  AND?: InputMaybe<Array<WorkerWhereInput>>;
  OR?: InputMaybe<Array<WorkerWhereInput>>;
  confidenceLevel_eq?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_gt?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_gte?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  confidenceLevel_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  confidenceLevel_lt?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_lte?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_not_eq?: InputMaybe<Scalars['Int']['input']>;
  confidenceLevel_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  initialScore_eq?: InputMaybe<Scalars['Int']['input']>;
  initialScore_gt?: InputMaybe<Scalars['Int']['input']>;
  initialScore_gte?: InputMaybe<Scalars['Int']['input']>;
  initialScore_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  initialScore_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  initialScore_lt?: InputMaybe<Scalars['Int']['input']>;
  initialScore_lte?: InputMaybe<Scalars['Int']['input']>;
  initialScore_not_eq?: InputMaybe<Scalars['Int']['input']>;
  initialScore_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  session?: InputMaybe<SessionWhereInput>;
  session_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stakePool?: InputMaybe<StakePoolWhereInput>;
  stakePool_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

type WorkersConnection = {
  edges: Array<WorkerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type BasePoolsQueryVariables = Exact<{
  orderBy: Array<BasePoolOrderByInput> | BasePoolOrderByInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BasePoolWhereInput>;
}>;


type BasePoolsQuery = { basePoolsConnection: { totalCount: number, edges: Array<{ node: { withdrawingShares: string, id: string, kind: BasePoolKind, releasingValue: string, withdrawingValue: string, freeValue: string } }> } };

type GlobalStateAndSnapshotsQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalStateAndSnapshotsQuery = { globalStateById?: { averageApr: string, averageBlockTime: number, budgetPerBlock: string, budgetPerShare: string, cumulativeRewards: string, delegatorCount: number, height: number, idleWorkerCount: number, idleWorkerShares: string, totalValue: string, workerCount: number } | null, globalStateSnapshotsConnection: { edges: Array<{ node: { updatedTime: string, idleWorkerCount: number, totalValue: string, workerCount: number, delegatorCount: number, height: number, cumulativeRewards: string, averageApr: string, budgetPerShare: string } }> } };

type OnlineWorkersQueryVariables = Exact<{ [key: string]: never; }>;


type OnlineWorkersQuery = { workersConnection: { edges: Array<{ node: { id: string } }> } };

type ReclaimableWorkersQueryVariables = Exact<{
  orderBy: Array<WorkerOrderByInput> | WorkerOrderByInput;
  where?: InputMaybe<WorkerWhereInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


type ReclaimableWorkersQuery = { workersConnection: { totalCount: number, edges: Array<{ node: { id: string, stakePool?: { id: string } | null } }> } };

type TokenomicUpdatedTimeQueryVariables = Exact<{ [key: string]: never; }>;


type TokenomicUpdatedTimeQuery = { globalStateById?: { tokenomicUpdatedTime: string } | null };


 const BasePoolsDocument = gql`
    query BasePools($orderBy: [BasePoolOrderByInput!]!, $first: Int, $where: BasePoolWhereInput) {
  basePoolsConnection(orderBy: $orderBy, first: $first, where: $where) {
    edges {
      node {
        withdrawingShares
        id
        kind
        releasingValue
        withdrawingValue
        freeValue
      }
    }
    totalCount
  }
}
    `;
 const GlobalStateAndSnapshotsDocument = gql`
    query GlobalStateAndSnapshots {
  globalStateById(id: "0") {
    averageApr
    averageBlockTime
    budgetPerBlock
    budgetPerShare
    cumulativeRewards
    delegatorCount
    height
    idleWorkerCount
    idleWorkerShares
    totalValue
    workerCount
  }
  globalStateSnapshotsConnection(orderBy: updatedTime_DESC, first: 999) {
    edges {
      node {
        updatedTime
        idleWorkerCount
        totalValue
        workerCount
        delegatorCount
        height
        cumulativeRewards
        averageApr
        budgetPerShare
      }
    }
  }
}
    `;
 const OnlineWorkersDocument = gql`
    query OnlineWorkers {
  workersConnection(
    orderBy: id_ASC
    where: {session: {state_eq: WorkerIdle}}
    first: 9999999
  ) {
    edges {
      node {
        id
      }
    }
  }
}
    `;
 const ReclaimableWorkersDocument = gql`
    query ReclaimableWorkers($orderBy: [WorkerOrderByInput!]!, $where: WorkerWhereInput, $first: Int) {
  workersConnection(orderBy: $orderBy, where: $where, first: $first) {
    totalCount
    edges {
      node {
        id
        stakePool {
          id
        }
      }
    }
  }
}
    `;
 const TokenomicUpdatedTimeDocument = gql`
    query TokenomicUpdatedTime {
  globalStateById(id: "0") {
    tokenomicUpdatedTime
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    BasePools(variables: BasePoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<BasePoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BasePoolsQuery>(BasePoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'BasePools', 'query', variables);
    },
    GlobalStateAndSnapshots(variables?: GlobalStateAndSnapshotsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GlobalStateAndSnapshotsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GlobalStateAndSnapshotsQuery>(GlobalStateAndSnapshotsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GlobalStateAndSnapshots', 'query', variables);
    },
    OnlineWorkers(variables?: OnlineWorkersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<OnlineWorkersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OnlineWorkersQuery>(OnlineWorkersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'OnlineWorkers', 'query', variables);
    },
    ReclaimableWorkers(variables: ReclaimableWorkersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ReclaimableWorkersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ReclaimableWorkersQuery>(ReclaimableWorkersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ReclaimableWorkers', 'query', variables);
    },
    TokenomicUpdatedTime(variables?: TokenomicUpdatedTimeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenomicUpdatedTimeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenomicUpdatedTimeQuery>(TokenomicUpdatedTimeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TokenomicUpdatedTime', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;