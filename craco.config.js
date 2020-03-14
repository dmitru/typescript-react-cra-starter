const { ESLINT_MODES } = require('@craco/craco')
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')

module.exports = {
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig: config }) => {
          const wasmExtensionRegExp = /\.wasm$/

          config.module.rules.forEach(rule => {
            if (!rule.oneOf) {
              return
            }
            rule.oneOf.forEach(oneOf => {
              if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
                // make file-loader ignore WASM files
                oneOf.exclude.push(wasmExtensionRegExp)
              }
            })
          })

          return config
        },
      },
    },
    {
      plugin: reactHotReloadPlugin,
    },
    // Enable React-🔥-Dom - see https://github.com/gaearon/react-hot-loader#react--dom
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig, context: { env, paths } }) => {
          webpackConfig.resolve.alias['react-dom'] = '@hot-loader/react-dom'

          return webpackConfig
        },
      },
    },
  ],
  eslint: {
    mode: ESLINT_MODES.file,
  },
}
