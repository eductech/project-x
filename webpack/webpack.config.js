const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'main.js',
    path: resolve(__dirname, '../dist')
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'planer',
    template: resolve(__dirname, './template.html')
  })]
}