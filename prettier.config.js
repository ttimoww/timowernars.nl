/** @type {import('prettier').Config} */

module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  printWidth: 180,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '^@/app/(.*)$',
    '^@/config/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
