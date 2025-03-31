import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{
		languageOptions: { globals: globals.browser },
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/require-await': 'off',
			'prettier/prettier': 'off',
			'no-console': 'error',
			'no-unused-vars': 'warn',
			'no-extra-boolean-cast': 'off',
			'no-lonely-if': 'error',
			'no-trailing-spaces': 'error',
			'no-multi-spaces': 'error',
			'no-multiple-empty-lines': 'error',
			'space-before-blocks': ['error', 'always'],
			'object-curly-spacing': ['error', 'always'],
			'array-bracket-spacing': 'error',
			'linebreak-style': 'off',
			'no-unexpected-multiline': 'error',
			'keyword-spacing': 'error',
			'arrow-spacing': 'error',
			'no-empty-pattern': 'warn',
			'prefer-const': 0,
		},
	},
]
