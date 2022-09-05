/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  'root': true,
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
  ],
  'env': {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  'plugins': ['react', 'react-hooks', '@typescript-eslint'],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      "jsx": true
    }
  },
  'rules': {
    'eqeqeq': 'error',
    'indent': ['error', 2],
    'curly': ['error', 'multi'],
    'quotes': ['error', 'single'],
    'no-console': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    '@typescript-eslint/no-var-requires': 0,
  },
};