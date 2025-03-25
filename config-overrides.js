const { override, addWebpackAlias } = require('customize-cra')

const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@ui': path.resolve(__dirname, 'src/components/BagSwapUI'),
  }),
)
