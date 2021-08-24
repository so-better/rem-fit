const path = require('path')

let params = {
	entry: './src/index.js', //入口文件
	output: { //输出
		path: path.resolve(__dirname, 'dist'),
		filename: "rem-fit.js",
		library: 'RemFit',
		libraryTarget: "umd"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	}
}

if (process.env.NODE_ENV == "development") {
	params.devtool = 'eval-source-map' //调试可看到源码
}

module.exports = params
