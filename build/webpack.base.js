var path = require('path')
  , fs = require('fs')
  , MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    //加载器配置
    rules: [
      { 
        test: /\.(scss|css)$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /dist/
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.babelrc'))),
            },
          },
          'eslint-loader'
        ]
      }, {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100,
              name: 'images/[name].[ext]'
            }
          }
        ]
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000,
              name: '[name].[ext]',
              publicPath: './'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      'immutable': path.join(__dirname, '../node_modules', 'immutable'),
      'react': path.join(__dirname, '../node_modules', 'react'),
      'scssinc': path.join(__dirname, '../src/assets/scss/_inc.scss'),
      '@ant-design/icons/lib/dist$': path.resolve(__dirname, '../src/icons.js'),
    },
    extensions: ['.js', '.jsx']
  }
}