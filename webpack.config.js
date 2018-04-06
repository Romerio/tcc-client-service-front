const webpack = require("webpack");
const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: __dirname + "/public",
		filename: "./app.js"
	},
	devServer: {
		port: process.env.PORT || 8080,
		contentBase: "./public" 
	},
	resolve: {
		extensions: ["", ".js", ".jsx"],
		alias: {
			modules: __dirname + "/node_modules"
		}
	},
	plugins: [
		new extractTextPlugin("app.css"),
		new webpack.DefinePlugin({
			"process.env": JSON.stringify({ 
				...process.env
			})
		}),
	],
	module: {
		loaders: [{
			test: /.js[x]?$/,
			loader: "babel-loader",
			exclude: /node_modules/,
			query: {
				presets: ["es2015", "react"],
				plugins: ["transform-object-rest-spread", "transform-runtime", "transform-async-to-generator"]
			}
		},{
			test: /\.css$/,
			loader: extractTextPlugin.extract("style-loader", "css-loader"),
		},{
			test: /\.woff|.woof2|.ttf|.eot|.svg*.*$/,
			loader: "file"
		}]
	}
};
