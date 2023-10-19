module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint','unused-imports','prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
  rules: {
    'react/jsx-wrap-multilines': [
      1,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'never'],
    quotes: ['error', 'single', { allowTemplateLiterals: false, avoidEscape: true }],
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'import/no-anonymous-default-export': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/jsx-uses-vars': 'error',
    'react/self-closing-comp': 'warn',
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/jsx-indent-props': [2, 2],
    'no-compare-neg-zero': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-extra-boolean-cast': 0,
    'no-unexpected-multiline': 'warn',
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  overrides: [
    {
      files: ['**/*.json'],
      rules: {
        quotes: ['error', 'double'],
      },
    },
    {
      files: ['**/*.test.ts', '**/*.spec.ts', '**/*.config.ts', '**/*.config.js', 'cypress/plugins/index.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
