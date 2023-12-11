const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.common')

module.exports = {
  ...config('development'),
  entry: './demo/index.tsx',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'devDist'),
    filename: 'devBundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'devDist'),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'demo', 'index.html'),
    }),
  ],
};