const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');

module.exports = {
	mode:         'development',
	entry:        path.resolve(__dirname, 'index.js'),
	watch:        true,
	watchOptions: {
		poll: 1000
	},
	output:       {
		filename: "bundle.js",
		path:     path.resolve(__dirname, 'dist'),

	},
	resolve:      {
		extensions: ['.js', '.ts', '.tsx', '.vue', '.json'],
	},
	devServer:    {
		contentBase: 'dist',
		hot:          true,
		host:         'localHost',
		port:         4040,
	},
	module:       {
		rules: [
			{
				test: /\.scss?$/i,
				use:  ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/,
				use:  ['style-loader', 'css-loader'],
			},
		]
	},
	plugins:      [
		new HtmlWebpackPlugin({
			template: "index.html"
		})
	],
}