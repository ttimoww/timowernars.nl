/** @type {import('prettier').Config} */

module.exports = {
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	printWidth: 120,
	importOrder: [
		'^(react/(.*)$)|^(react$)',
		'^(next/(.*)$)|^(next$)',
		'<THIRD_PARTY_MODULES>',
		'^@/lib/gql(.*)$',
		'^@/types/(.*)$',
		'^@/config/(.*)$',
		'^@/lib/(.*)$',
		'^@/hooks/(.*)$',
		'^@/components/(.*)$',
		'^@/styles/(.*)$',
		'^@/app/(.*)$',
		'^[./]'
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	plugins: ['@ianvs/prettier-plugin-sort-imports']
};
