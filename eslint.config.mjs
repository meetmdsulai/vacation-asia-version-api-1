import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier/flat';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/coverage/**',
      '**/generated/**',
      '.agents/**',
      '**/next-env.d.ts',
    ],
  },
  ...tseslint.configs.recommended,
  {
    files: ['apps/web/**/*.{ts,tsx}'],
    plugins: { '@next/next': nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'default', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'variable', modifiers: ['const'], format: ['camelCase', 'UPPER_CASE'] },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'import', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
        { selector: 'property', modifiers: ['requiresQuotes'], format: null },
        // Explicit adapter-boundary names from environment and node-postgres.
        {
          selector: 'property',
          filter: {
            regex:
              '^(NODE_ENV|API_HOST|API_PORT|WEB_ORIGIN|DATABASE_URL|REDIS_URL|RABBITMQ_URL|NEXT_TELEMETRY_DISABLED|query_timeout|statement_timeout)$',
            match: true,
          },
          format: null,
        },
      ],
    },
  },
  { files: ['apps/web/**/*.{ts,tsx}'], settings: { next: { rootDir: 'apps/web/' } } },
  prettier,
);
