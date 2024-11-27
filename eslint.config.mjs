import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    rules: {
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'semi': 'error'
    }
  },
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  tseslint.config({
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  })
];
