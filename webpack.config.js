const webpack = require('webpack')
const { resolve } = require('path')

module.exports = function (env) {
  return {
    devtool: 'cheap-module-eval-source-map',
    context: resolve(__dirname, 'chrome'),
    entry: {
      main: './src/index.js',
      vendor: ['react',  'react-dom'] 
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'chrome/build'),
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
              name: ['vendor'] // Specify the common bundle's name.
          })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    }
  }
}
