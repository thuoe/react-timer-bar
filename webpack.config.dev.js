const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './demo/index.tsx',
  target: 'web',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'devDist'),
    filename: 'devBundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
			  test: /\.tsx?$/,
			  use: 'ts-loader',
			  exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader'],
      },
    ],
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