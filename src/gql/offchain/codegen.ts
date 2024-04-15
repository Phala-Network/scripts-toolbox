import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://subsquid.phala.network/phat-offchain/v1/graphql',
  documents: './src/gql/offchain/operations/*.gql',
  generates: {
    './src/gql/offchain/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        useTypeImports: true,
        enumsAsConst: true,
        strictScalars: true,
        skipTypename: true,
        scalars: {
          date: 'string',
          bigint: 'string',
        },
        noExport: true,
      },
    },
  },
}

export default config
