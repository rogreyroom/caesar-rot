/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'dist',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 5000,
    contentBase: path.join(__dirname, 'src'),
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s(a|c)ss?/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
})
