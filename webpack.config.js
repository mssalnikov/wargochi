const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = ( env, options ) => {
	return {
		entry:  './src/client.js',
		plugins: [
            new CleanWebpackPlugin(['dist']),
        ],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			publicPath: "/static/",
		},

		resolve: {
			extensions: [ '.js', '.jsx', '.es6', '.ts', '.tsx'],
			modules: [
				'node_modules',
				path.resolve(__dirname, 'src'),
			]
		},
		devtool: 'inline-source-map',

		module: {
			rules: [
				{
					test: /\.jsx?$|\.tsx?$/,
					use: {
						loader: 'babel-loader'
					},
					exclude: /(node_modules|bower_components)/
				},
				{
					test: /\.(png|jpg|gif|svg|eot|ttf|otf|woff|ico)$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								name: '[name].[hash].[ext]',
								outputPath: '/assets/',
								limit: 10000
							}
						}
					]
				}
            ],
		},
	}
};