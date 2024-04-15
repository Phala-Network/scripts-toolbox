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

type Circulation = {
  blockHeight: Scalars['Int']['output'];
  chainBridge: Scalars['BigDecimal']['output'];
  circulation: Scalars['BigDecimal']['output'];
  crowdloan: Scalars['BigDecimal']['output'];
  id: Scalars['String']['output'];
  reward: Scalars['BigDecimal']['output'];
  sygmaBridge: Scalars['BigDecimal']['output'];
  timestamp: Scalars['DateTime']['output'];
  totalIssuance: Scalars['BigDecimal']['output'];
};

type CirculationEdge = {
  cursor: Scalars['String']['output'];
  node: Circulation;
};

const CirculationOrderByInput = {
  BlockHeightAsc: 'blockHeight_ASC',
  BlockHeightAscNullsFirst: 'blockHeight_ASC_NULLS_FIRST',
  BlockHeightDesc: 'blockHeight_DESC',
  BlockHeightDescNullsLast: 'blockHeight_DESC_NULLS_LAST',
  ChainBridgeAsc: 'chainBridge_ASC',
  ChainBridgeAscNullsFirst: 'chainBridge_ASC_NULLS_FIRST',
  ChainBridgeDesc: 'chainBridge_DESC',
  ChainBridgeDescNullsLast: 'chainBridge_DESC_NULLS_LAST',
  CirculationAsc: 'circulation_ASC',
  CirculationAscNullsFirst: 'circulation_ASC_NULLS_FIRST',
  CirculationDesc: 'circulation_DESC',
  CirculationDescNullsLast: 'circulation_DESC_NULLS_LAST',
  CrowdloanAsc: 'crowdloan_ASC',
  CrowdloanAscNullsFirst: 'crowdloan_ASC_NULLS_FIRST',
  CrowdloanDesc: 'crowdloan_DESC',
  CrowdloanDescNullsLast: 'crowdloan_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  RewardAsc: 'reward_ASC',
  RewardAscNullsFirst: 'reward_ASC_NULLS_FIRST',
  RewardDesc: 'reward_DESC',
  RewardDescNullsLast: 'reward_DESC_NULLS_LAST',
  SygmaBridgeAsc: 'sygmaBridge_ASC',
  SygmaBridgeAscNullsFirst: 'sygmaBridge_ASC_NULLS_FIRST',
  SygmaBridgeDesc: 'sygmaBridge_DESC',
  SygmaBridgeDescNullsLast: 'sygmaBridge_DESC_NULLS_LAST',
  TimestampAsc: 'timestamp_ASC',
  TimestampAscNullsFirst: 'timestamp_ASC_NULLS_FIRST',
  TimestampDesc: 'timestamp_DESC',
  TimestampDescNullsLast: 'timestamp_DESC_NULLS_LAST',
  TotalIssuanceAsc: 'totalIssuance_ASC',
  TotalIssuanceAscNullsFirst: 'totalIssuance_ASC_NULLS_FIRST',
  TotalIssuanceDesc: 'totalIssuance_DESC',
  TotalIssuanceDescNullsLast: 'totalIssuance_DESC_NULLS_LAST'
} as const;

export type CirculationOrderByInput = typeof CirculationOrderByInput[keyof typeof CirculationOrderByInput];
type CirculationWhereInput = {
  AND?: InputMaybe<Array<CirculationWhereInput>>;
  OR?: InputMaybe<Array<CirculationWhereInput>>;
  blockHeight_eq?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockHeight_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  blockHeight_lt?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_not_eq?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  chainBridge_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  chainBridge_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  chainBridge_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  circulation_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  circulation_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  circulation_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  crowdloan_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  crowdloan_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  crowdloan_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  reward_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reward_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reward_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sygmaBridge_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sygmaBridge_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sygmaBridge_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  totalIssuance_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalIssuance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalIssuance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

type CirculationsConnection = {
  edges: Array<CirculationEdge>;
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
  circulationById?: Maybe<Circulation>;
  /** @deprecated Use circulationById */
  circulationByUniqueInput?: Maybe<Circulation>;
  circulations: Array<Circulation>;
  circulationsConnection: CirculationsConnection;
  snapshotById?: Maybe<Snapshot>;
  /** @deprecated Use snapshotById */
  snapshotByUniqueInput?: Maybe<Snapshot>;
  snapshots: Array<Snapshot>;
  snapshotsConnection: SnapshotsConnection;
  squidStatus?: Maybe<SquidStatus>;
};


type QueryCirculationByIdArgs = {
  id: Scalars['String']['input'];
};


type QueryCirculationByUniqueInputArgs = {
  where: WhereIdInput;
};


type QueryCirculationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CirculationOrderByInput>>;
  where?: InputMaybe<CirculationWhereInput>;
};


type QueryCirculationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<CirculationOrderByInput>;
  where?: InputMaybe<CirculationWhereInput>;
};


type QuerySnapshotByIdArgs = {
  id: Scalars['String']['input'];
};


type QuerySnapshotByUniqueInputArgs = {
  where: WhereIdInput;
};


type QuerySnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SnapshotOrderByInput>>;
  where?: InputMaybe<SnapshotWhereInput>;
};


type QuerySnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<SnapshotOrderByInput>;
  where?: InputMaybe<SnapshotWhereInput>;
};

type Snapshot = {
  blockHeight: Scalars['Int']['output'];
  chainBridge: Scalars['BigDecimal']['output'];
  circulation: Scalars['BigDecimal']['output'];
  crowdloan: Scalars['BigDecimal']['output'];
  id: Scalars['String']['output'];
  reward: Scalars['BigDecimal']['output'];
  sygmaBridge: Scalars['BigDecimal']['output'];
  timestamp: Scalars['DateTime']['output'];
  totalIssuance: Scalars['BigDecimal']['output'];
};

type SnapshotEdge = {
  cursor: Scalars['String']['output'];
  node: Snapshot;
};

const SnapshotOrderByInput = {
  BlockHeightAsc: 'blockHeight_ASC',
  BlockHeightAscNullsFirst: 'blockHeight_ASC_NULLS_FIRST',
  BlockHeightDesc: 'blockHeight_DESC',
  BlockHeightDescNullsLast: 'blockHeight_DESC_NULLS_LAST',
  ChainBridgeAsc: 'chainBridge_ASC',
  ChainBridgeAscNullsFirst: 'chainBridge_ASC_NULLS_FIRST',
  ChainBridgeDesc: 'chainBridge_DESC',
  ChainBridgeDescNullsLast: 'chainBridge_DESC_NULLS_LAST',
  CirculationAsc: 'circulation_ASC',
  CirculationAscNullsFirst: 'circulation_ASC_NULLS_FIRST',
  CirculationDesc: 'circulation_DESC',
  CirculationDescNullsLast: 'circulation_DESC_NULLS_LAST',
  CrowdloanAsc: 'crowdloan_ASC',
  CrowdloanAscNullsFirst: 'crowdloan_ASC_NULLS_FIRST',
  CrowdloanDesc: 'crowdloan_DESC',
  CrowdloanDescNullsLast: 'crowdloan_DESC_NULLS_LAST',
  IdAsc: 'id_ASC',
  IdAscNullsFirst: 'id_ASC_NULLS_FIRST',
  IdDesc: 'id_DESC',
  IdDescNullsLast: 'id_DESC_NULLS_LAST',
  RewardAsc: 'reward_ASC',
  RewardAscNullsFirst: 'reward_ASC_NULLS_FIRST',
  RewardDesc: 'reward_DESC',
  RewardDescNullsLast: 'reward_DESC_NULLS_LAST',
  SygmaBridgeAsc: 'sygmaBridge_ASC',
  SygmaBridgeAscNullsFirst: 'sygmaBridge_ASC_NULLS_FIRST',
  SygmaBridgeDesc: 'sygmaBridge_DESC',
  SygmaBridgeDescNullsLast: 'sygmaBridge_DESC_NULLS_LAST',
  TimestampAsc: 'timestamp_ASC',
  TimestampAscNullsFirst: 'timestamp_ASC_NULLS_FIRST',
  TimestampDesc: 'timestamp_DESC',
  TimestampDescNullsLast: 'timestamp_DESC_NULLS_LAST',
  TotalIssuanceAsc: 'totalIssuance_ASC',
  TotalIssuanceAscNullsFirst: 'totalIssuance_ASC_NULLS_FIRST',
  TotalIssuanceDesc: 'totalIssuance_DESC',
  TotalIssuanceDescNullsLast: 'totalIssuance_DESC_NULLS_LAST'
} as const;

export type SnapshotOrderByInput = typeof SnapshotOrderByInput[keyof typeof SnapshotOrderByInput];
type SnapshotWhereInput = {
  AND?: InputMaybe<Array<SnapshotWhereInput>>;
  OR?: InputMaybe<Array<SnapshotWhereInput>>;
  blockHeight_eq?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_gt?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_gte?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockHeight_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  blockHeight_lt?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_lte?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_not_eq?: InputMaybe<Scalars['Int']['input']>;
  blockHeight_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  chainBridge_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  chainBridge_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  chainBridge_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  chainBridge_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  circulation_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  circulation_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  circulation_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  circulation_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  crowdloan_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  crowdloan_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  crowdloan_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  crowdloan_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  reward_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reward_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reward_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reward_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sygmaBridge_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sygmaBridge_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  sygmaBridge_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  sygmaBridge_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  totalIssuance_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalIssuance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalIssuance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalIssuance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

type SnapshotsConnection = {
  edges: Array<SnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

type SquidStatus = {
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

type WhereIdInput = {
  id: Scalars['String']['input'];
};

type SnapshotsQueryVariables = Exact<{ [key: string]: never; }>;


type SnapshotsQuery = { snapshotsConnection: { edges: Array<{ node: { circulation: string, timestamp: string } }> } };


 const SnapshotsDocument = gql`
    query Snapshots {
  snapshotsConnection(orderBy: timestamp_DESC, first: 1825) {
    edges {
      node {
        circulation
        timestamp
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Snapshots(variables?: SnapshotsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SnapshotsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SnapshotsQuery>(SnapshotsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Snapshots', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;