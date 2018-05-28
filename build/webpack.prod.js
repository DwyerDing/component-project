var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.base.js');
var webpackMerge = require('webpack-merge');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var SpritesmithPlugin = require('webpack-spritesmith');

// Webpack Config
var webpackConfig = {
  output: {
    publicPath: '/',
    filename: '[name][chunkhash].js',
    chunkFilename: '[name][chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, '../src/v3.x/app/img'),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, './dist/images/sprite.png'),
        css: path.resolve(__dirname, './dist/[chunkhash]sprite.css')
      },
      apiOptions: {
        cssImageRef: '../sprites/sprite.png'
      },
      spritesmithOptions: {
        algorithm: 'top-down'
      }
    }),
    new ImageminPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      output: {
        comments: false
      }, // prod
      mangle: {
        screw_ie8: true
      }, // prod
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      }
    })
  ]
};

module.exports = webpackMerge(baseConfig, webpackConfig);
