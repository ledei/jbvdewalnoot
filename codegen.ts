import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/graphql-generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
      plugins: [
        'typescript', // Generate TypeScript types
        'typescript-operations', // Generate TypeScript operations
        {
          'typescript-react-apollo': {
            // Generate React hooks
            withHOC: false,
            withComponent: false,
            withRefetchFn: true,
          },
        },
      ],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
