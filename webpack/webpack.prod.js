const {
  merge,
} = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env.production'),
});

// TODO: extracting CSS based on entry when importing routes dynamically
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  cache: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      // Change this to be product name
      title: 'react structure template',
      filename: '[name].html',
      templateContent: `
         <!DOCTYPE html>
         <html>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <body id="root">
            <div id="app"></div>
          </body>
        </html>
      `,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    }],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      '...',
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
});
