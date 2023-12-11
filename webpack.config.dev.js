const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.common')

const commonConfig = config('development')

module.exports = {
  ...commonConfig,
  entry: './demo/index.tsx',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'devDist'),
    filename: 'devBundle.js',
    clean: true,
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