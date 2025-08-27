module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: false,
  trailingComma: 'es5',
  semi: true,

  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className'],
};
