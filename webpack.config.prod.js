const path = require('path');
const config = require('./webpack.config.common')

const commonConfig = config('production')

module.exports = {
  ...commonConfig,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
};