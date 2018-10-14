var merge = require('webpack-merge')
  // , webpack = require('webpack')
  , BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  , MiniCssExtractPlugin = require('mini-css-extract-plugin')
  , OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , path = require('path')
  , baseConfigs = require('./webpack.base')

module.exports = merge(baseConfigs, {
  mode: 'production',
  // devtool: 'source-map',
  context: path.join(__dirname, '../src'),
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:4].js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        // commons: {
        //   name: 'commons',
        //   chunks: 'initial',
        //   minChunks: 2
        // },
        vendor: {
          test: /node_modules\/(?!\@ant-design)/,
          chunks: 'initial',
          name: 'vendor',
        },
        braft: {
          test: /node_modules\/(braft-editor)/,
          chunks: 'all',
          name: 'braft-editor',
        },
        draft: {
          test: /node_modules\/(draft-js|draft-convert|immutable)/,
          chunks: 'all',
          name: 'draft',
        },
        antd: {
          test: /node_modules\/(antd)/,
          chunks: 'all',
          name: 'antd',
        },
      }
    }
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.css$/,
      cssProcessor: require('cssnano'),
      sourceMap: true,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        zindex: false,
        safe: true
      }
    }),
    new HtmlWebpackPlugin({
      minify: {},
      chunks: ['lib', 'index'],
      template: './index.html'
    })
  ]
})
