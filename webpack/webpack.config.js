const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, '../src/index.jsx'),
  output: {
    filename: 'main.js',
    path: resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'planer',
    template: resolve(__dirname, './template.html')
  })]
}