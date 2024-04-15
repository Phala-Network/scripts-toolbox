import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://subsquid.phala.network/phat-contract-squid/graphql',
  documents: './src/gql/phat/operations/*.gql',
  generates: {
    './src/gql/phat/index.ts': {
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
          BigDecimal: 'string',
          BigInt: 'string',
          DateTime: 'string',
        },
        noExport: true,
      },
    },
  },
}

export default config
