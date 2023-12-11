const path = require('path');
const config = require('./webpack.config.common')

module.exports = {
  ...config('production'),
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};