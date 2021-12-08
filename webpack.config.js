const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	target: "web",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
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
        use: [ 'style-loader', 'css-loader']
      }
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html")
		})
	]
};