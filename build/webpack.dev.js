var webpack = require('webpack');
var baseConfig = require('./webpack.base.js');
var webpackMerge = require('webpack-merge');

// Webpack Config
var webpackConfig = {
  output: {
    publicPath: '/'
  },

  devtool: 'source-map',

  devServer: {
    port: 3000,
    inline: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/': 'http://106.75.67.64'
    },
    watchOptions: {
      aggregateTimeout: 2000,
      poll: 2000
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = webpackMerge(baseConfig, webpackConfig);
