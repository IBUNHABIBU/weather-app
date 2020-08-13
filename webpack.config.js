const path = require('path');
const webpack = require('webpack');
const htmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: {
        myFile: './src/modules/app.js',
  },
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    // libraryTarget: 'commonjs',
    // library: 'myfirstlibrary'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use:[
          {
            loader: 'html-loader'
            // option: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 1234,
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [ 
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
   ]
};