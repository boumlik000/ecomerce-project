var path =require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports={
	entry:{
		app:'./src/index.js',
	},
	output:{
		path: path.join(__dirname, "/dist"),
		publicPath:'',
		filename:"main.js"
	},
	mode: "development",
	
	module:{
		rules:[
			//html loader
				{
					test:/\.html$/,
					use:
					[
						{
							loader:"html-loader",
							options:{
								minimize:true,
							}
						}
					]
				},
			//css loader	
				{
					test:/\.css$/,
					use:
					[
						{
							loader:MiniCssExtractPlugin.loader,
							options:{
								publicPath:'../',
							},
						},
						'css-loader',
					]
		
				},
			//img loader
				{
					test:/\.(png|svg|jpe?g|gif)$/,
					use:[
						{
							loader:"file-loader",
							options:{
								name:'[name].[ext]',
								outputPath:"images",
							}
						}
					]
				},
			//fonts loader
				{
					test: /\.(svg|eot|woff|woff2|ttf)$/,
					use: [
					  {
						loader: "file-loader", 
						options: {
						  name: '[name].[ext]',
						  outputPath: "fonts",
						  esModule: false,
						}
					  }
					]
				},
			//jquerry loader
				{
					test: require.resolve("jquery"),
					loader: "expose-loader",
					options: {
					  exposes: ["$", "jQuery"],
					},
				  },
			]
		},

		

	devServer:{
		contentBase:path.join(__dirname,"/dist"),
		port:2001,
		writeToDisk: true,
		open:true
	},

	plugins:[
		new HtmlWebpackPlugin({
			filename:"index.html",
			template:"./src/index.html",
		}),
		new HtmlWebpackPlugin({
			filename:"product.html",
			template:"./src/product.html",
		}),
		new HtmlWebpackPlugin({
			filename:"checkout.html",
			template:"./src/checkout.html",
		}),

		new MiniCssExtractPlugin({filename: 'css/style.css'}),
		new OptimizeCSSAssetsPlugin({}),
	],
};