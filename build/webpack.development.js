var webpack = require('webpack')
  , merge = require('webpack-merge')
  , path = require('path')
  // , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , baseConfigs = require('./webpack.base')
  , MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfigs, {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:5995',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    publicPath: '/',
    stats: { chunks:false },
    contentBase: './src',
    port: 5995,
    hot: true
  }
})