const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  devtool: "devtool: 'source-map'",
  entry: ['./src/index.js'],
  module: {
    rules: [
          {
            test: /\.(js|jsx|mjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/react', '@babel/env']
              }
            }
          },
          {
    				test: /\.css$/,
    				use: [
    					{
                loader: 'style-loader'
              },
    					{
    						loader: 'css-loader',
    							options: {
    								modules: true,
    								camelCase: 'only',
    								importLoaders: 2,
    								localIdentName: '[local]'
    							},
    					}
    				]
    			},
          {
            test: /\.less$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  modules: true,
                  camelCase: 'only',
                  importLoaders: 2,
                  localIdentName: "[local]___[hash:base64:5]"
                }
              },
              {
                loader: "less-loader"
              }
            ]
          },
          {
            test: /\.(pdf|jpg|png|gif|svg|ico)$/i,
            use: [
              {
                loader: 'url-loader',
              }
            ]
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        },
      ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
			template: 'public/index.html',
      inject: false,
      chunksSortMode: 'dependency',
			minify   : {
				html5                          : true,
				collapseWhitespace             : true,
				minifyCSS                      : true,
				minifyJS                       : true,
				minifyURLs                     : false,
				removeAttributeQuotes          : true,
				removeComments                 : true,
				removeEmptyAttributes          : true,
				removeOptionalTags             : true,
				removeRedundantAttributes      : true,
				removeScriptTypeAttributes     : true,
				removeStyleLinkTypeAttributese : true,
				useShortDoctype                : true
			}
		}),
    new webpack.HotModuleReplacementPlugin(),
    new ErrorOverlayPlugin(),
    // new FaviconsWebpackPlugin('my-logo.png'),
  ],
  devServer: {
    contentBase: ['./dist'],
    compress: true,
    hot: true,
    historyApiFallback: true,
  }
};
