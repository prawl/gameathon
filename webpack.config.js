const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractSass
  ]
};

module.exports = config;