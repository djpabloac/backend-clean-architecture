import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'dist', 'src/**/*.js', 'eslint.config.mjs'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tseslint.parser,
      sourceType: 'module',
    },
    rules: {
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': 'error',
      'comma-dangle': ['error', 'never'],
      'comma-spacing': ['error', { after: true, before: false }],
      'comma-style': ['error', 'last'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'key-spacing': ['error', { align: 'colon' }],
      'no-console': 'error',
      'no-trailing-spaces': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never'],
      'sort-keys': 'error',
      'space-before-blocks': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
    },
  },
)
