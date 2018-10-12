var merge = require('webpack-merge')
  , webpack = require('webpack')
  , MiniCssExtractPlugin = require('mini-css-extract-plugin')
  , OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , path = require('path')
  , baseConfigs = require('./webpack.base')

module.exports = merge(baseConfigs, {
  mode: 'production',
  devtool: 'source-map',
  context: path.join(__dirname, '../src'),
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash:10].js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    splitChunks: {      
      cacheGroups: {
        // commons: {
        //   chunks: "initial",
        //   minChunks: 2,
        //   maxInitialRequests: 5, // The default limit is too small to showcase the effect
        //   minSize: 0 // This is example is too small to create commons chunks
        // },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        },
      }
    } 
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
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
      // minify: {},
      // chunks: ['lib', 'index'],
      template: './index.html'
    })
  ]
})
