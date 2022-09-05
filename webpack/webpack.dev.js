const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  cache: true,
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    hot:true,
    port: 9000,
    compress: true,
    historyApiFallback: true,
    // config the proxy when api needed
/*    proxy: {
      '/api': {
        target: 'https://other-server.example.com',
        secure: false,
      },
    },*/
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../.eng.development'),
    })
  ],
  optimization: {
    usedExports: true,
    runtimeChunk: 'single',
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  output: {
    path: path.join(__dirname, '../dist'),
    // There will be one main bundle, and one file per asynchronous chunk.
    // In development, it does not produce real files.
    filename: 'static/js/[name].bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },
});