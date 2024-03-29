const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
  }
};