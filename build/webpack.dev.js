const path = require('path')

const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './examples/entry.js',
  output: {
    path: path.resolve(process.cwd(), './examples/element-ui'),
    filename: '[name][hash:7].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
    ]
  },
  
  devServer: {
    host: 'localhost',
    port: 8001,
    hot: true,
    publicPath: '/'
  },
  
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: './index.html',
    }),
  ],
}