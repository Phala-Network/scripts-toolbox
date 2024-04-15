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
  bigint: { input: string; output: string; }
  date: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
const CursorOrdering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC'
} as const;

export type CursorOrdering = typeof CursorOrdering[keyof typeof CursorOrdering];
/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
type DateComparisonExp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** column ordering options */
const OrderBy = {
  /** in ascending order, nulls last */
  Asc: 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst: 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast: 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc: 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst: 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast: 'DESC_NULLS_LAST'
} as const;

export type OrderBy = typeof OrderBy[keyof typeof OrderBy];
/** columns and relationships of "phat_offline_execution" */
type PhatOfflineExecution = {
  dt: Scalars['date']['output'];
  executionCount?: Maybe<Scalars['bigint']['output']>;
  userCount?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "phat_offline_execution" */
type PhatOfflineExecutionAggregate = {
  aggregate?: Maybe<PhatOfflineExecutionAggregateFields>;
  nodes: Array<PhatOfflineExecution>;
};

/** aggregate fields of "phat_offline_execution" */
type PhatOfflineExecutionAggregateFields = {
  avg?: Maybe<PhatOfflineExecutionAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PhatOfflineExecutionMaxFields>;
  min?: Maybe<PhatOfflineExecutionMinFields>;
  stddev?: Maybe<PhatOfflineExecutionStddevFields>;
  stddevPop?: Maybe<PhatOfflineExecutionStddevPopFields>;
  stddevSamp?: Maybe<PhatOfflineExecutionStddevSampFields>;
  sum?: Maybe<PhatOfflineExecutionSumFields>;
  varPop?: Maybe<PhatOfflineExecutionVarPopFields>;
  varSamp?: Maybe<PhatOfflineExecutionVarSampFields>;
  variance?: Maybe<PhatOfflineExecutionVarianceFields>;
};


/** aggregate fields of "phat_offline_execution" */
type PhatOfflineExecutionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PhatOfflineExecutionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
type PhatOfflineExecutionAvgFields = {
  executionCount?: Maybe<Scalars['Float']['output']>;
  userCount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "phat_offline_execution". All fields are combined with a logical 'AND'. */
type PhatOfflineExecutionBoolExp = {
  _and?: InputMaybe<Array<PhatOfflineExecutionBoolExp>>;
  _not?: InputMaybe<PhatOfflineExecutionBoolExp>;
  _or?: InputMaybe<Array<PhatOfflineExecutionBoolExp>>;
  dt?: InputMaybe<DateComparisonExp>;
  executionCount?: InputMaybe<BigintComparisonExp>;
  userCount?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "phat_offline_execution" */
const PhatOfflineExecutionConstraint = {
  /** unique or primary key constraint on columns "dt" */
  PhatOfflineExecutionPkey: 'phat_offline_execution_pkey'
} as const;

export type PhatOfflineExecutionConstraint = typeof PhatOfflineExecutionConstraint[keyof typeof PhatOfflineExecutionConstraint];
/** input type for incrementing numeric columns in table "phat_offline_execution" */
type PhatOfflineExecutionIncInput = {
  executionCount?: InputMaybe<Scalars['bigint']['input']>;
  userCount?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "phat_offline_execution" */
type PhatOfflineExecutionInsertInput = {
  dt?: InputMaybe<Scalars['date']['input']>;
  executionCount?: InputMaybe<Scalars['bigint']['input']>;
  userCount?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
type PhatOfflineExecutionMaxFields = {
  dt?: Maybe<Scalars['date']['output']>;
  executionCount?: Maybe<Scalars['bigint']['output']>;
  userCount?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
type PhatOfflineExecutionMinFields = {
  dt?: Maybe<Scalars['date']['output']>;
  executionCount?: Maybe<Scalars['bigint']['output']>;
  userCount?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "phat_offline_execution" */
type PhatOfflineExecutionMutationResponse = {
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PhatOfflineExecution>;
};

/** on_conflict condition type for table "phat_offline_execution" */
type PhatOfflineExecutionOnConflict = {
  constraint: PhatOfflineExecutionConstraint;
  updateColumns?: Array<PhatOfflineExecutionUpdateColumn>;
  where?: InputMaybe<PhatOfflineExecutionBoolExp>;
};

/** Ordering options when selecting data from "phat_offline_execution". */
type PhatOfflineExecutionOrderBy = {
  dt?: InputMaybe<OrderBy>;
  executionCount?: InputMaybe<OrderBy>;
  userCount?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: phat_offline_execution */
type PhatOfflineExecutionPkColumnsInput = {
  dt: Scalars['date']['input'];
};

/** select columns of table "phat_offline_execution" */
const PhatOfflineExecutionSelectColumn = {
  /** column name */
  Dt: 'dt',
  /** column name */
  ExecutionCount: 'executionCount',
  /** column name */
  UserCount: 'userCount'
} as const;

export type PhatOfflineExecutionSelectColumn = typeof PhatOfflineExecutionSelectColumn[keyof typeof PhatOfflineExecutionSelectColumn];
/** input type for updating data in table "phat_offline_execution" */
type PhatOfflineExecutionSetInput = {
  dt?: InputMaybe<Scalars['date']['input']>;
  executionCount?: InputMaybe<Scalars['bigint']['input']>;
  userCount?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
type PhatOfflineExecutionStddevFields = {
  executionCount?: Maybe<Scalars['Float']['output']>;
  userCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
type PhatOfflineExecutionStddevPopFields = {
  executionCount?: Maybe<Scalars['Float']['output']>;
  userCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
type PhatOfflineExecutionStddevSampFields = {
  executionCount?: Maybe<Scalars['Float']['output']>;
  userCount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "phat_offline_execution" */
type PhatOfflineExecutionStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PhatOfflineExecutionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
type PhatOfflineExecutionStreamCursorValueInput = {
  dt?: InputMaybe<Scalars['date']['input']>;
  executionCount?: InputMaybe<Scalars['bigint']['input']>;
  userCount?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
type PhatOfflineExecutionSumFields = {
  executionCount?: Maybe<Scalars['bigint']['output']>;
  userCount?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "phat_offline_execution" */
const PhatOfflineExecutionUpdateColumn = {
  /** column name */
  Dt: 'dt',
  /** column name */
  ExecutionCount: 'executionCount',
  /** column name */
  UserCount: 'userCount'
} as const;

export type PhatOfflineExecutionUpdateColumn = typeof PhatOfflineExecutionUpdateColumn[keyof typeof PhatOfflineExecutionUpdateColumn];
type PhatOfflineExecutionUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PhatOfflineExecutionIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PhatOfflineExecutionSetInput>;
  /** filter the rows which have to be updated */
  where: PhatOfflineExecutionBoolExp;
};

/** aggregate varPop on columns */
type PhatOfflineExecutionVarPopFields = {
  executionCount?: Maybe<Scalars['Float']['output']>;
  userCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
type PhatOfflineExecutionVarSampFields = {
  executionCount?: Maybe<Scalars['Float']['output']>;
  userCount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
type PhatOfflineExecutionVarianceFields = {
  executionCount?: Maybe<Scalars['Float']['output']>;
  userCount?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
type Mutation_Root = {
  /** delete data from the table: "phat_offline_execution" */
  deletePhatOfflineExecution?: Maybe<PhatOfflineExecutionMutationResponse>;
  /** delete single row from the table: "phat_offline_execution" */
  deletePhatOfflineExecutionByPk?: Maybe<PhatOfflineExecution>;
  /** insert data into the table: "phat_offline_execution" */
  insertPhatOfflineExecution?: Maybe<PhatOfflineExecutionMutationResponse>;
  /** insert a single row into the table: "phat_offline_execution" */
  insertPhatOfflineExecutionOne?: Maybe<PhatOfflineExecution>;
  /** update data of the table: "phat_offline_execution" */
  updatePhatOfflineExecution?: Maybe<PhatOfflineExecutionMutationResponse>;
  /** update single row of the table: "phat_offline_execution" */
  updatePhatOfflineExecutionByPk?: Maybe<PhatOfflineExecution>;
  /** update multiples rows of table: "phat_offline_execution" */
  updatePhatOfflineExecutionMany?: Maybe<Array<Maybe<PhatOfflineExecutionMutationResponse>>>;
};


/** mutation root */
type Mutation_RootDeletePhatOfflineExecutionArgs = {
  where: PhatOfflineExecutionBoolExp;
};


/** mutation root */
type Mutation_RootDeletePhatOfflineExecutionByPkArgs = {
  dt: Scalars['date']['input'];
};


/** mutation root */
type Mutation_RootInsertPhatOfflineExecutionArgs = {
  objects: Array<PhatOfflineExecutionInsertInput>;
  onConflict?: InputMaybe<PhatOfflineExecutionOnConflict>;
};


/** mutation root */
type Mutation_RootInsertPhatOfflineExecutionOneArgs = {
  object: PhatOfflineExecutionInsertInput;
  onConflict?: InputMaybe<PhatOfflineExecutionOnConflict>;
};


/** mutation root */
type Mutation_RootUpdatePhatOfflineExecutionArgs = {
  _inc?: InputMaybe<PhatOfflineExecutionIncInput>;
  _set?: InputMaybe<PhatOfflineExecutionSetInput>;
  where: PhatOfflineExecutionBoolExp;
};


/** mutation root */
type Mutation_RootUpdatePhatOfflineExecutionByPkArgs = {
  _inc?: InputMaybe<PhatOfflineExecutionIncInput>;
  _set?: InputMaybe<PhatOfflineExecutionSetInput>;
  pkColumns: PhatOfflineExecutionPkColumnsInput;
};


/** mutation root */
type Mutation_RootUpdatePhatOfflineExecutionManyArgs = {
  updates: Array<PhatOfflineExecutionUpdates>;
};

type Query_Root = {
  /** fetch data from the table: "phat_offline_execution" */
  phatOfflineExecution: Array<PhatOfflineExecution>;
  /** fetch aggregated fields from the table: "phat_offline_execution" */
  phatOfflineExecutionAggregate: PhatOfflineExecutionAggregate;
  /** fetch data from the table: "phat_offline_execution" using primary key columns */
  phatOfflineExecutionByPk?: Maybe<PhatOfflineExecution>;
};


type Query_RootPhatOfflineExecutionArgs = {
  distinctOn?: InputMaybe<Array<PhatOfflineExecutionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PhatOfflineExecutionOrderBy>>;
  where?: InputMaybe<PhatOfflineExecutionBoolExp>;
};


type Query_RootPhatOfflineExecutionAggregateArgs = {
  distinctOn?: InputMaybe<Array<PhatOfflineExecutionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PhatOfflineExecutionOrderBy>>;
  where?: InputMaybe<PhatOfflineExecutionBoolExp>;
};


type Query_RootPhatOfflineExecutionByPkArgs = {
  dt: Scalars['date']['input'];
};

type Subscription_Root = {
  /** fetch data from the table: "phat_offline_execution" */
  phatOfflineExecution: Array<PhatOfflineExecution>;
  /** fetch aggregated fields from the table: "phat_offline_execution" */
  phatOfflineExecutionAggregate: PhatOfflineExecutionAggregate;
  /** fetch data from the table: "phat_offline_execution" using primary key columns */
  phatOfflineExecutionByPk?: Maybe<PhatOfflineExecution>;
  /** fetch data from the table in a streaming manner: "phat_offline_execution" */
  phatOfflineExecutionStream: Array<PhatOfflineExecution>;
};


type Subscription_RootPhatOfflineExecutionArgs = {
  distinctOn?: InputMaybe<Array<PhatOfflineExecutionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PhatOfflineExecutionOrderBy>>;
  where?: InputMaybe<PhatOfflineExecutionBoolExp>;
};


type Subscription_RootPhatOfflineExecutionAggregateArgs = {
  distinctOn?: InputMaybe<Array<PhatOfflineExecutionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PhatOfflineExecutionOrderBy>>;
  where?: InputMaybe<PhatOfflineExecutionBoolExp>;
};


type Subscription_RootPhatOfflineExecutionByPkArgs = {
  dt: Scalars['date']['input'];
};


type Subscription_RootPhatOfflineExecutionStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PhatOfflineExecutionStreamCursorInput>>;
  where?: InputMaybe<PhatOfflineExecutionBoolExp>;
};

type OfflineExecutionQueryVariables = Exact<{ [key: string]: never; }>;


type OfflineExecutionQuery = { phatOfflineExecution: Array<{ dt: string, executionCount?: string | null, userCount?: string | null }> };


 const OfflineExecutionDocument = gql`
    query OfflineExecution {
  phatOfflineExecution(limit: 1825, orderBy: {dt: DESC}) {
    dt
    executionCount
    userCount
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    OfflineExecution(variables?: OfflineExecutionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<OfflineExecutionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OfflineExecutionQuery>(OfflineExecutionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'OfflineExecution', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;