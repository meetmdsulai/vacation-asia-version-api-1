// Merge these rules into the repository's ESLint flat configuration.
// Requires @typescript-eslint/parser and @typescript-eslint/eslint-plugin.
export const namingRules = {
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
    },
    {
      selector: ['function', 'parameter'],
      format: ['camelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: ['classMethod', 'typeMethod', 'objectLiteralMethod'],
      format: ['camelCase'],
    },
    {
      selector: ['classProperty', 'typeProperty', 'objectLiteralProperty'],
      format: ['camelCase'],
      leadingUnderscore: 'allow',
      modifiers: ['requiresQuotes'],
    },
  ],
};
