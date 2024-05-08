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
  DateTime: { input: string; output: string; }
};

type Account = {
  /** Account address */
  id: Scalars['String']['output'];
};

type AccountEdge = {
  cursor: Scalars['String']['output'];
  node: Account;
};

const AccountOrderByInput = {
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST'
} as const;

export type AccountOrderByInput = typeof AccountOrderByInput[keyof typeof AccountOrderByInput];
type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
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

type AccountsConnection = {
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type Cluster = {
  contract: Scalars['Int']['output'];
  createdTime: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  idleWorker: Scalars['Int']['output'];
  pInit: Scalars['Int']['output'];
  stake: Scalars['BigDecimal']['output'];
  staker: Scalars['Int']['output'];
  worker: Scalars['Int']['output'];
};

type ClusterEdge = {
  cursor: Scalars['String']['output'];
  node: Cluster;
};

const ClusterOrderByInput = {
  ContractAsc: 'contract_ASC',
  ContractAscNullsFirst: 'contract_ASC_NULLS_FIRST',
  ContractDesc: 'contract_DESC',
  ContractDescNullsLast: 'contract_DESC_NULLS_LAST',
  CreatedTimeAsc: 'createdTime_ASC',
  CreatedTimeAscNullsFirst: 'createdTime_ASC_NULLS_FIRST',
  CreatedTimeDesc: 'createdTime_DESC',
  CreatedTimeDescNullsLast: 'createdTime_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  IdleWorkerAsc: 'idleWorker_ASC',
  IdleWorkerAscNullsFirst: 'idleWorker_ASC_NULLS_FIRST',
  IdleWorkerDesc: 'idleWorker_DESC',
  IdleWorkerDescNullsLast: 'idleWorker_DESC_NULLS_LAST',
  PInitAsc: 'pInit_ASC',
  PInitAscNullsFirst: 'pInit_ASC_NULLS_FIRST',
  PInitDesc: 'pInit_DESC',
  PInitDescNullsLast: 'pInit_DESC_NULLS_LAST',
  StakeAsc: 'stake_ASC',
  StakeAscNullsFirst: 'stake_ASC_NULLS_FIRST',
  StakeDesc: 'stake_DESC',
  StakeDescNullsLast: 'stake_DESC_NULLS_LAST',
  StakerAsc: 'staker_ASC',
  StakerAscNullsFirst: 'staker_ASC_NULLS_FIRST',
  StakerDesc: 'staker_DESC',
  StakerDescNullsLast: 'staker_DESC_NULLS_LAST',
  WorkerAsc: 'worker_ASC',
  WorkerAscNullsFirst: 'worker_ASC_NULLS_FIRST',
  WorkerDesc: 'worker_DESC',
  WorkerDescNullsLast: 'worker_DESC_NULLS_LAST'
} as const;

export type ClusterOrderByInput = typeof ClusterOrderByInput[keyof typeof ClusterOrderByInput];
type ClusterWhereInput = {
  AND?: InputMaybe<Array<ClusterWhereInput>>;
  OR?: InputMaybe<Array<ClusterWhereInput>>;
  contract_eq?: InputMaybe<Scalars['Int']['input']>;
  contract_gt?: InputMaybe<Scalars['Int']['input']>;
  contract_gte?: InputMaybe<Scalars['Int']['input']>;
  contract_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  contract_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  contract_lt?: InputMaybe<Scalars['Int']['input']>;
  contract_lte?: InputMaybe<Scalars['Int']['input']>;
  contract_not_eq?: InputMaybe<Scalars['Int']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
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
  idleWorker_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_gt?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_gte?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorker_lt?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_lte?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInit_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_gt?: InputMaybe<Scalars['Int']['input']>;
  pInit_gte?: InputMaybe<Scalars['Int']['input']>;
  pInit_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pInit_lt?: InputMaybe<Scalars['Int']['input']>;
  pInit_lte?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stake_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stake_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stake_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  staker_eq?: InputMaybe<Scalars['Int']['input']>;
  staker_gt?: InputMaybe<Scalars['Int']['input']>;
  staker_gte?: InputMaybe<Scalars['Int']['input']>;
  staker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  staker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  staker_lt?: InputMaybe<Scalars['Int']['input']>;
  staker_lte?: InputMaybe<Scalars['Int']['input']>;
  staker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  staker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  worker_eq?: InputMaybe<Scalars['Int']['input']>;
  worker_gt?: InputMaybe<Scalars['Int']['input']>;
  worker_gte?: InputMaybe<Scalars['Int']['input']>;
  worker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  worker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  worker_lt?: InputMaybe<Scalars['Int']['input']>;
  worker_lte?: InputMaybe<Scalars['Int']['input']>;
  worker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  worker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

type ClustersConnection = {
  edges: Array<ClusterEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type Contract = {
  cluster: Cluster;
  deployer: Account;
  id: Scalars['String']['output'];
  instantiatedTime: Scalars['DateTime']['output'];
  stake: Scalars['BigDecimal']['output'];
  staker: Scalars['Int']['output'];
};

type ContractEdge = {
  cursor: Scalars['String']['output'];
  node: Contract;
};

const ContractOrderByInput = {
  ClusterContractAsc: 'cluster_contract_ASC',
  ClusterContractAscNullsFirst: 'cluster_contract_ASC_NULLS_FIRST',
  ClusterContractDesc: 'cluster_contract_DESC',
  ClusterContractDescNullsLast: 'cluster_contract_DESC_NULLS_LAST',
  ClusterCreatedTimeAsc: 'cluster_createdTime_ASC',
  ClusterCreatedTimeAscNullsFirst: 'cluster_createdTime_ASC_NULLS_FIRST',
  ClusterCreatedTimeDesc: 'cluster_createdTime_DESC',
  ClusterCreatedTimeDescNullsLast: 'cluster_createdTime_DESC_NULLS_LAST',
  ClusterIdAsc: 'cluster_id_ASC',
  ClusterIdAscNullsFirst: 'cluster_id_ASC_NULLS_FIRST',
  ClusterIdDesc: 'cluster_id_DESC',
  ClusterIdDescNullsLast: 'cluster_id_DESC_NULLS_LAST',
  ClusterIdleWorkerAsc: 'cluster_idleWorker_ASC',
  ClusterIdleWorkerAscNullsFirst: 'cluster_idleWorker_ASC_NULLS_FIRST',
  ClusterIdleWorkerDesc: 'cluster_idleWorker_DESC',
  ClusterIdleWorkerDescNullsLast: 'cluster_idleWorker_DESC_NULLS_LAST',
  ClusterPInitAsc: 'cluster_pInit_ASC',
  ClusterPInitAscNullsFirst: 'cluster_pInit_ASC_NULLS_FIRST',
  ClusterPInitDesc: 'cluster_pInit_DESC',
  ClusterPInitDescNullsLast: 'cluster_pInit_DESC_NULLS_LAST',
  ClusterStakeAsc: 'cluster_stake_ASC',
  ClusterStakeAscNullsFirst: 'cluster_stake_ASC_NULLS_FIRST',
  ClusterStakeDesc: 'cluster_stake_DESC',
  ClusterStakeDescNullsLast: 'cluster_stake_DESC_NULLS_LAST',
  ClusterStakerAsc: 'cluster_staker_ASC',
  ClusterStakerAscNullsFirst: 'cluster_staker_ASC_NULLS_FIRST',
  ClusterStakerDesc: 'cluster_staker_DESC',
  ClusterStakerDescNullsLast: 'cluster_staker_DESC_NULLS_LAST',
  ClusterWorkerAsc: 'cluster_worker_ASC',
  ClusterWorkerAscNullsFirst: 'cluster_worker_ASC_NULLS_FIRST',
  ClusterWorkerDesc: 'cluster_worker_DESC',
  ClusterWorkerDescNullsLast: 'cluster_worker_DESC_NULLS_LAST',
  DeployerIdAsc: 'deployer_id_ASC',
  DeployerIdAscNullsFirst: 'deployer_id_ASC_NULLS_FIRST',
  DeployerIdDesc: 'deployer_id_DESC',
  DeployerIdDescNullsLast: 'deployer_id_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  InstantiatedTimeAsc: 'instantiatedTime_ASC',
  InstantiatedTimeAscNullsFirst: 'instantiatedTime_ASC_NULLS_FIRST',
  InstantiatedTimeDesc: 'instantiatedTime_DESC',
  InstantiatedTimeDescNullsLast: 'instantiatedTime_DESC_NULLS_LAST',
  StakeAsc: 'stake_ASC',
  StakeAscNullsFirst: 'stake_ASC_NULLS_FIRST',
  StakeDesc: 'stake_DESC',
  StakeDescNullsLast: 'stake_DESC_NULLS_LAST',
  StakerAsc: 'staker_ASC',
  StakerAscNullsFirst: 'staker_ASC_NULLS_FIRST',
  StakerDesc: 'staker_DESC',
  StakerDescNullsLast: 'staker_DESC_NULLS_LAST'
} as const;

export type ContractOrderByInput = typeof ContractOrderByInput[keyof typeof ContractOrderByInput];
type ContractStake = {
  account: Account;
  amount: Scalars['BigDecimal']['output'];
  contract: Contract;
  id: Scalars['String']['output'];
};

type ContractStakeEdge = {
  cursor: Scalars['String']['output'];
  node: ContractStake;
};

const ContractStakeOrderByInput = {
  AccountIdAsc: 'account_id_ASC',
  AccountIdAscNullsFirst: 'account_id_ASC_NULLS_FIRST',
  AccountIdDesc: 'account_id_DESC',
  AccountIdDescNullsLast: 'account_id_DESC_NULLS_LAST',
  AmountAsc: 'amount_ASC',
  AmountAscNullsFirst: 'amount_ASC_NULLS_FIRST',
  AmountDesc: 'amount_DESC',
  AmountDescNullsLast: 'amount_DESC_NULLS_LAST',
  ContractIdAsc: 'contract_id_ASC',
  ContractIdAscNullsFirst: 'contract_id_ASC_NULLS_FIRST',
  ContractIdDesc: 'contract_id_DESC',
  ContractIdDescNullsLast: 'contract_id_DESC_NULLS_LAST',
  ContractInstantiatedTimeAsc: 'contract_instantiatedTime_ASC',
  ContractInstantiatedTimeAscNullsFirst: 'contract_instantiatedTime_ASC_NULLS_FIRST',
  ContractInstantiatedTimeDesc: 'contract_instantiatedTime_DESC',
  ContractInstantiatedTimeDescNullsLast: 'contract_instantiatedTime_DESC_NULLS_LAST',
  ContractStakeAsc: 'contract_stake_ASC',
  ContractStakeAscNullsFirst: 'contract_stake_ASC_NULLS_FIRST',
  ContractStakeDesc: 'contract_stake_DESC',
  ContractStakeDescNullsLast: 'contract_stake_DESC_NULLS_LAST',
  ContractStakerAsc: 'contract_staker_ASC',
  ContractStakerAscNullsFirst: 'contract_staker_ASC_NULLS_FIRST',
  ContractStakerDesc: 'contract_staker_DESC',
  ContractStakerDescNullsLast: 'contract_staker_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST'
} as const;

export type ContractStakeOrderByInput = typeof ContractStakeOrderByInput[keyof typeof ContractStakeOrderByInput];
type ContractStakeWhereInput = {
  AND?: InputMaybe<Array<ContractStakeWhereInput>>;
  OR?: InputMaybe<Array<ContractStakeWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  contract?: InputMaybe<ContractWhereInput>;
  contract_isNull?: InputMaybe<Scalars['Boolean']['input']>;
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

type ContractStakesConnection = {
  edges: Array<ContractStakeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type ContractWhereInput = {
  AND?: InputMaybe<Array<ContractWhereInput>>;
  OR?: InputMaybe<Array<ContractWhereInput>>;
  cluster?: InputMaybe<ClusterWhereInput>;
  cluster_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  deployer?: InputMaybe<AccountWhereInput>;
  deployer_isNull?: InputMaybe<Scalars['Boolean']['input']>;
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
  instantiatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  instantiatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  instantiatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  instantiatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  instantiatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  instantiatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  instantiatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  instantiatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  instantiatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  stake_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stake_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stake_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  staker_eq?: InputMaybe<Scalars['Int']['input']>;
  staker_gt?: InputMaybe<Scalars['Int']['input']>;
  staker_gte?: InputMaybe<Scalars['Int']['input']>;
  staker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  staker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  staker_lt?: InputMaybe<Scalars['Int']['input']>;
  staker_lte?: InputMaybe<Scalars['Int']['input']>;
  staker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  staker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

type ContractsConnection = {
  edges: Array<ContractEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type Meta = {
  cluster: Scalars['Int']['output'];
  contract: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  idleWorker: Scalars['Int']['output'];
  pInit: Scalars['Int']['output'];
  snapshotUpdatedTime: Scalars['DateTime']['output'];
  stake: Scalars['BigDecimal']['output'];
  staker: Scalars['Int']['output'];
  worker: Scalars['Int']['output'];
};

type MetaConnection = {
  edges: Array<MetaEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type MetaEdge = {
  cursor: Scalars['String']['output'];
  node: Meta;
};

const MetaOrderByInput = {
  ClusterAsc: 'cluster_ASC',
  ClusterAscNullsFirst: 'cluster_ASC_NULLS_FIRST',
  ClusterDesc: 'cluster_DESC',
  ClusterDescNullsLast: 'cluster_DESC_NULLS_LAST',
  ContractAsc: 'contract_ASC',
  ContractAscNullsFirst: 'contract_ASC_NULLS_FIRST',
  ContractDesc: 'contract_DESC',
  ContractDescNullsLast: 'contract_DESC_NULLS_LAST',
  HeightAsc: 'height_ASC',
  HeightAscNullsFirst: 'height_ASC_NULLS_FIRST',
  HeightDesc: 'height_DESC',
  HeightDescNullsLast: 'height_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  IdleWorkerAsc: 'idleWorker_ASC',
  IdleWorkerAscNullsFirst: 'idleWorker_ASC_NULLS_FIRST',
  IdleWorkerDesc: 'idleWorker_DESC',
  IdleWorkerDescNullsLast: 'idleWorker_DESC_NULLS_LAST',
  PInitAsc: 'pInit_ASC',
  PInitAscNullsFirst: 'pInit_ASC_NULLS_FIRST',
  PInitDesc: 'pInit_DESC',
  PInitDescNullsLast: 'pInit_DESC_NULLS_LAST',
  SnapshotUpdatedTimeAsc: 'snapshotUpdatedTime_ASC',
  SnapshotUpdatedTimeAscNullsFirst: 'snapshotUpdatedTime_ASC_NULLS_FIRST',
  SnapshotUpdatedTimeDesc: 'snapshotUpdatedTime_DESC',
  SnapshotUpdatedTimeDescNullsLast: 'snapshotUpdatedTime_DESC_NULLS_LAST',
  StakeAsc: 'stake_ASC',
  StakeAscNullsFirst: 'stake_ASC_NULLS_FIRST',
  StakeDesc: 'stake_DESC',
  StakeDescNullsLast: 'stake_DESC_NULLS_LAST',
  StakerAsc: 'staker_ASC',
  StakerAscNullsFirst: 'staker_ASC_NULLS_FIRST',
  StakerDesc: 'staker_DESC',
  StakerDescNullsLast: 'staker_DESC_NULLS_LAST',
  WorkerAsc: 'worker_ASC',
  WorkerAscNullsFirst: 'worker_ASC_NULLS_FIRST',
  WorkerDesc: 'worker_DESC',
  WorkerDescNullsLast: 'worker_DESC_NULLS_LAST'
} as const;

export type MetaOrderByInput = typeof MetaOrderByInput[keyof typeof MetaOrderByInput];
type MetaSnapshot = {
  cluster: Scalars['Int']['output'];
  contract: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  idleWorker: Scalars['Int']['output'];
  pInit: Scalars['Int']['output'];
  stake: Scalars['BigDecimal']['output'];
  staker: Scalars['Int']['output'];
  updatedTime: Scalars['DateTime']['output'];
  worker: Scalars['Int']['output'];
};

type MetaSnapshotEdge = {
  cursor: Scalars['String']['output'];
  node: MetaSnapshot;
};

const MetaSnapshotOrderByInput = {
  ClusterAsc: 'cluster_ASC',
  ClusterAscNullsFirst: 'cluster_ASC_NULLS_FIRST',
  ClusterDesc: 'cluster_DESC',
  ClusterDescNullsLast: 'cluster_DESC_NULLS_LAST',
  ContractAsc: 'contract_ASC',
  ContractAscNullsFirst: 'contract_ASC_NULLS_FIRST',
  ContractDesc: 'contract_DESC',
  ContractDescNullsLast: 'contract_DESC_NULLS_LAST',
  HeightAsc: 'height_ASC',
  HeightAscNullsFirst: 'height_ASC_NULLS_FIRST',
  HeightDesc: 'height_DESC',
  HeightDescNullsLast: 'height_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  IdleWorkerAsc: 'idleWorker_ASC',
  IdleWorkerAscNullsFirst: 'idleWorker_ASC_NULLS_FIRST',
  IdleWorkerDesc: 'idleWorker_DESC',
  IdleWorkerDescNullsLast: 'idleWorker_DESC_NULLS_LAST',
  PInitAsc: 'pInit_ASC',
  PInitAscNullsFirst: 'pInit_ASC_NULLS_FIRST',
  PInitDesc: 'pInit_DESC',
  PInitDescNullsLast: 'pInit_DESC_NULLS_LAST',
  StakeAsc: 'stake_ASC',
  StakeAscNullsFirst: 'stake_ASC_NULLS_FIRST',
  StakeDesc: 'stake_DESC',
  StakeDescNullsLast: 'stake_DESC_NULLS_LAST',
  StakerAsc: 'staker_ASC',
  StakerAscNullsFirst: 'staker_ASC_NULLS_FIRST',
  StakerDesc: 'staker_DESC',
  StakerDescNullsLast: 'staker_DESC_NULLS_LAST',
  UpdatedTimeAsc: 'updatedTime_ASC',
  UpdatedTimeAscNullsFirst: 'updatedTime_ASC_NULLS_FIRST',
  UpdatedTimeDesc: 'updatedTime_DESC',
  UpdatedTimeDescNullsLast: 'updatedTime_DESC_NULLS_LAST',
  WorkerAsc: 'worker_ASC',
  WorkerAscNullsFirst: 'worker_ASC_NULLS_FIRST',
  WorkerDesc: 'worker_DESC',
  WorkerDescNullsLast: 'worker_DESC_NULLS_LAST'
} as const;

export type MetaSnapshotOrderByInput = typeof MetaSnapshotOrderByInput[keyof typeof MetaSnapshotOrderByInput];
type MetaSnapshotWhereInput = {
  AND?: InputMaybe<Array<MetaSnapshotWhereInput>>;
  OR?: InputMaybe<Array<MetaSnapshotWhereInput>>;
  cluster_eq?: InputMaybe<Scalars['Int']['input']>;
  cluster_gt?: InputMaybe<Scalars['Int']['input']>;
  cluster_gte?: InputMaybe<Scalars['Int']['input']>;
  cluster_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cluster_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cluster_lt?: InputMaybe<Scalars['Int']['input']>;
  cluster_lte?: InputMaybe<Scalars['Int']['input']>;
  cluster_not_eq?: InputMaybe<Scalars['Int']['input']>;
  cluster_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  contract_eq?: InputMaybe<Scalars['Int']['input']>;
  contract_gt?: InputMaybe<Scalars['Int']['input']>;
  contract_gte?: InputMaybe<Scalars['Int']['input']>;
  contract_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  contract_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  contract_lt?: InputMaybe<Scalars['Int']['input']>;
  contract_lte?: InputMaybe<Scalars['Int']['input']>;
  contract_not_eq?: InputMaybe<Scalars['Int']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  idleWorker_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_gt?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_gte?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorker_lt?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_lte?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInit_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_gt?: InputMaybe<Scalars['Int']['input']>;
  pInit_gte?: InputMaybe<Scalars['Int']['input']>;
  pInit_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pInit_lt?: InputMaybe<Scalars['Int']['input']>;
  pInit_lte?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  stake_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stake_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stake_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  staker_eq?: InputMaybe<Scalars['Int']['input']>;
  staker_gt?: InputMaybe<Scalars['Int']['input']>;
  staker_gte?: InputMaybe<Scalars['Int']['input']>;
  staker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  staker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  staker_lt?: InputMaybe<Scalars['Int']['input']>;
  staker_lte?: InputMaybe<Scalars['Int']['input']>;
  staker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  staker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  updatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  worker_eq?: InputMaybe<Scalars['Int']['input']>;
  worker_gt?: InputMaybe<Scalars['Int']['input']>;
  worker_gte?: InputMaybe<Scalars['Int']['input']>;
  worker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  worker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  worker_lt?: InputMaybe<Scalars['Int']['input']>;
  worker_lte?: InputMaybe<Scalars['Int']['input']>;
  worker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  worker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

type MetaSnapshotsConnection = {
  edges: Array<MetaSnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type MetaWhereInput = {
  AND?: InputMaybe<Array<MetaWhereInput>>;
  OR?: InputMaybe<Array<MetaWhereInput>>;
  cluster_eq?: InputMaybe<Scalars['Int']['input']>;
  cluster_gt?: InputMaybe<Scalars['Int']['input']>;
  cluster_gte?: InputMaybe<Scalars['Int']['input']>;
  cluster_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cluster_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  cluster_lt?: InputMaybe<Scalars['Int']['input']>;
  cluster_lte?: InputMaybe<Scalars['Int']['input']>;
  cluster_not_eq?: InputMaybe<Scalars['Int']['input']>;
  cluster_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  contract_eq?: InputMaybe<Scalars['Int']['input']>;
  contract_gt?: InputMaybe<Scalars['Int']['input']>;
  contract_gte?: InputMaybe<Scalars['Int']['input']>;
  contract_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  contract_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  contract_lt?: InputMaybe<Scalars['Int']['input']>;
  contract_lte?: InputMaybe<Scalars['Int']['input']>;
  contract_not_eq?: InputMaybe<Scalars['Int']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  idleWorker_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_gt?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_gte?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  idleWorker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  idleWorker_lt?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_lte?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  idleWorker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInit_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_gt?: InputMaybe<Scalars['Int']['input']>;
  pInit_gte?: InputMaybe<Scalars['Int']['input']>;
  pInit_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pInit_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pInit_lt?: InputMaybe<Scalars['Int']['input']>;
  pInit_lte?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pInit_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  snapshotUpdatedTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  snapshotUpdatedTime_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  snapshotUpdatedTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  snapshotUpdatedTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  stake_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  stake_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  stake_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  stake_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  staker_eq?: InputMaybe<Scalars['Int']['input']>;
  staker_gt?: InputMaybe<Scalars['Int']['input']>;
  staker_gte?: InputMaybe<Scalars['Int']['input']>;
  staker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  staker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  staker_lt?: InputMaybe<Scalars['Int']['input']>;
  staker_lte?: InputMaybe<Scalars['Int']['input']>;
  staker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  staker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  worker_eq?: InputMaybe<Scalars['Int']['input']>;
  worker_gt?: InputMaybe<Scalars['Int']['input']>;
  worker_gte?: InputMaybe<Scalars['Int']['input']>;
  worker_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  worker_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  worker_lt?: InputMaybe<Scalars['Int']['input']>;
  worker_lte?: InputMaybe<Scalars['Int']['input']>;
  worker_not_eq?: InputMaybe<Scalars['Int']['input']>;
  worker_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  accounts: Array<Account>;
  accountsConnection: AccountsConnection;
  clusterById?: Maybe<Cluster>;
  /** @deprecated Use clusterById */
  clusterByUniqueInput?: Maybe<Cluster>;
  clusters: Array<Cluster>;
  clustersConnection: ClustersConnection;
  contractById?: Maybe<Contract>;
  /** @deprecated Use contractById */
  contractByUniqueInput?: Maybe<Contract>;
  contractStakeById?: Maybe<ContractStake>;
  /** @deprecated Use contractStakeById */
  contractStakeByUniqueInput?: Maybe<ContractStake>;
  contractStakes: Array<ContractStake>;
  contractStakesConnection: ContractStakesConnection;
  contracts: Array<Contract>;
  contractsConnection: ContractsConnection;
  meta: Array<Meta>;
  metaById?: Maybe<Meta>;
  /** @deprecated Use metaById */
  metaByUniqueInput?: Maybe<Meta>;
  metaConnection: MetaConnection;
  metaSnapshotById?: Maybe<MetaSnapshot>;
  /** @deprecated Use metaSnapshotById */
  metaSnapshotByUniqueInput?: Maybe<MetaSnapshot>;
  metaSnapshots: Array<MetaSnapshot>;
  metaSnapshotsConnection: MetaSnapshotsConnection;
  squidStatus?: Maybe<SquidStatus>;
  workerById?: Maybe<Worker>;
  /** @deprecated Use workerById */
  workerByUniqueInput?: Maybe<Worker>;
  workers: Array<Worker>;
  workersConnection: WorkersConnection;
};


type QueryAccountByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryAccountByUniqueInputArgs = {
  where: WhereIdInput;
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


type QueryClusterByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryClusterByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryClustersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ClusterOrderByInput>>;
  where?: InputMaybe<ClusterWhereInput>;
};


type QueryClustersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ClusterOrderByInput>;
  where?: InputMaybe<ClusterWhereInput>;
};


type QueryContractByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryContractByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryContractStakeByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryContractStakeByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryContractStakesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContractStakeOrderByInput>>;
  where?: InputMaybe<ContractStakeWhereInput>;
};


type QueryContractStakesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ContractStakeOrderByInput>;
  where?: InputMaybe<ContractStakeWhereInput>;
};


type QueryContractsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ContractOrderByInput>>;
  where?: InputMaybe<ContractWhereInput>;
};


type QueryContractsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ContractOrderByInput>;
  where?: InputMaybe<ContractWhereInput>;
};


type QueryMetaArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetaOrderByInput>>;
  where?: InputMaybe<MetaWhereInput>;
};


type QueryMetaByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryMetaByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryMetaConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<MetaOrderByInput>;
  where?: InputMaybe<MetaWhereInput>;
};


type QueryMetaSnapshotByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryMetaSnapshotByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryMetaSnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetaSnapshotOrderByInput>>;
  where?: InputMaybe<MetaSnapshotWhereInput>;
};


type QueryMetaSnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<MetaSnapshotOrderByInput>;
  where?: InputMaybe<MetaSnapshotWhereInput>;
};


type QueryWorkerByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryWorkerByUniqueInputArgs = {
  where: WhereIdInput;
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

type SquidStatus = {
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

type WhereIdInput = {
  id: Scalars['String']['input'];
};

type Worker = {
  cluster?: Maybe<Cluster>;
  id: Scalars['String']['output'];
  pInit: Scalars['Int']['output'];
  session?: Maybe<Scalars['String']['output']>;
  state: WorkerState;
};

type WorkerEdge = {
  cursor: Scalars['String']['output'];
  node: Worker;
};

const WorkerOrderByInput = {
  ClusterContractAsc: 'cluster_contract_ASC',
  ClusterContractAscNullsFirst: 'cluster_contract_ASC_NULLS_FIRST',
  ClusterContractDesc: 'cluster_contract_DESC',
  ClusterContractDescNullsLast: 'cluster_contract_DESC_NULLS_LAST',
  ClusterCreatedTimeAsc: 'cluster_createdTime_ASC',
  ClusterCreatedTimeAscNullsFirst: 'cluster_createdTime_ASC_NULLS_FIRST',
  ClusterCreatedTimeDesc: 'cluster_createdTime_DESC',
  ClusterCreatedTimeDescNullsLast: 'cluster_createdTime_DESC_NULLS_LAST',
  ClusterIdAsc: 'cluster_id_ASC',
  ClusterIdAscNullsFirst: 'cluster_id_ASC_NULLS_FIRST',
  ClusterIdDesc: 'cluster_id_DESC',
  ClusterIdDescNullsLast: 'cluster_id_DESC_NULLS_LAST',
  ClusterIdleWorkerAsc: 'cluster_idleWorker_ASC',
  ClusterIdleWorkerAscNullsFirst: 'cluster_idleWorker_ASC_NULLS_FIRST',
  ClusterIdleWorkerDesc: 'cluster_idleWorker_DESC',
  ClusterIdleWorkerDescNullsLast: 'cluster_idleWorker_DESC_NULLS_LAST',
  ClusterPInitAsc: 'cluster_pInit_ASC',
  ClusterPInitAscNullsFirst: 'cluster_pInit_ASC_NULLS_FIRST',
  ClusterPInitDesc: 'cluster_pInit_DESC',
  ClusterPInitDescNullsLast: 'cluster_pInit_DESC_NULLS_LAST',
  ClusterStakeAsc: 'cluster_stake_ASC',
  ClusterStakeAscNullsFirst: 'cluster_stake_ASC_NULLS_FIRST',
  ClusterStakeDesc: 'cluster_stake_DESC',
  ClusterStakeDescNullsLast: 'cluster_stake_DESC_NULLS_LAST',
  ClusterStakerAsc: 'cluster_staker_ASC',
  ClusterStakerAscNullsFirst: 'cluster_staker_ASC_NULLS_FIRST',
  ClusterStakerDesc: 'cluster_staker_DESC',
  ClusterStakerDescNullsLast: 'cluster_staker_DESC_NULLS_LAST',
  ClusterWorkerAsc: 'cluster_worker_ASC',
  ClusterWorkerAscNullsFirst: 'cluster_worker_ASC_NULLS_FIRST',
  ClusterWorkerDesc: 'cluster_worker_DESC',
  ClusterWorkerDescNullsLast: 'cluster_worker_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  PInitAsc: 'pInit_ASC',
  PInitAscNullsFirst: 'pInit_ASC_NULLS_FIRST',
  PInitDesc: 'pInit_DESC',
  PInitDescNullsLast: 'pInit_DESC_NULLS_LAST',
  SessionAsc: 'session_ASC',
  SessionAscNullsFirst: 'session_ASC_NULLS_FIRST',
  SessionDesc: 'session_DESC',
  SessionDescNullsLast: 'session_DESC_NULLS_LAST',
  StateAsc: 'state_ASC',
  StateAscNullsFirst: 'state_ASC_NULLS_FIRST',
  StateDesc: 'state_DESC',
  StateDescNullsLast: 'state_DESC_NULLS_LAST'
} as const;

export type WorkerOrderByInput = typeof WorkerOrderByInput[keyof typeof WorkerOrderByInput];
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
  cluster?: InputMaybe<ClusterWhereInput>;
  cluster_isNull?: InputMaybe<Scalars['Boolean']['input']>;
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
  state_eq?: InputMaybe<WorkerState>;
  state_in?: InputMaybe<Array<WorkerState>>;
  state_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  state_not_eq?: InputMaybe<WorkerState>;
  state_not_in?: InputMaybe<Array<WorkerState>>;
};

type WorkersConnection = {
  edges: Array<WorkerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type ContractsQueryVariables = Exact<{ [key: string]: never; }>;


type ContractsQuery = { contractsConnection: { edges: Array<{ node: { id: string, instantiatedTime: string, stake: string, staker: number, deployer: { id: string }, cluster: { id: string } } }> } };

type MetaQueryVariables = Exact<{ [key: string]: never; }>;


type MetaQuery = { metaById?: { contract: number, idleWorker: number, stake: string, staker: number, worker: number } | null, metaSnapshotsConnection: { edges: Array<{ node: { updatedTime: string, contract: number, idleWorker: number, stake: string, staker: number, worker: number } }> } };


 const ContractsDocument = gql`
    query Contracts {
  contractsConnection(orderBy: instantiatedTime_DESC, first: 100) {
    edges {
      node {
        id
        deployer {
          id
        }
        cluster {
          id
        }
        instantiatedTime
        stake
        staker
      }
    }
  }
}
    `;
 const MetaDocument = gql`
    query Meta {
  metaById(id: "0") {
    contract
    idleWorker
    stake
    staker
    worker
  }
  metaSnapshotsConnection(orderBy: updatedTime_DESC, first: 999) {
    edges {
      node {
        updatedTime
        contract
        idleWorker
        stake
        staker
        worker
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Contracts(variables?: ContractsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContractsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContractsQuery>(ContractsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Contracts', 'query', variables);
    },
    Meta(variables?: MetaQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MetaQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetaQuery>(MetaDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Meta', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;