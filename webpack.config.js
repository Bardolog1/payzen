const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.export = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)
  config.module.rules.push({
    test: /\.jsx$/,
    loader: 'babel-loader',
    include: [
        path.join(__dirname, 'node_modules/react-router-native'),
    ],     
  })
    return config
}