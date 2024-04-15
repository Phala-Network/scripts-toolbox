import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://subsquid.phala.network/phala-computation/graphql',
  documents: './src/gql/computation/operations/*.gql',
  generates: {
    './src/gql/computation/index.ts': {
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
