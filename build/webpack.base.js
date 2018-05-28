var path = require('path');
var webpack = require('webpack');
// var glob = require('glob')
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin') var PurifyCSSPlugin =
// require('purifycss-webpack')

module.exports = {
  entry: {
    index: './src/app/app.js',
    react_vendor: ['react', 'react-dom', 'react-router-dom'],
    vendor: ['axios', 'classnames', 'mobx', 'mobx-react']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name][hash].js',
    chunkFilename: '[name][hash].js'
  },
  resolve: {
    extensions: ['.js', 'html', '.jsx', 'sass', 'scss', 'css', 'png', 'jpg', 'jpeg', '.json'],
    alias: {
      '@core': path.resolve(__dirname, '../src/app/core'),
      '@context': path.resolve(__dirname, '../src/app/context'),
      '@components': path.resolve(__dirname, '../src/app/components'),
      '@resources': path.resolve(__dirname, '../src/app/resources'),
      '@models': path.resolve(__dirname, '../src/app/models'),
      '@services': path.resolve(__dirname, '../src/app/services'),
      '@stores': path.resolve(__dirname, '../src/app/stores'),
      '@utils': path.resolve(__dirname, '../src/app/utils'),
      '@styles': path.resolve(__dirname, '../src/app/styles'),
      '@pages': path.resolve(__dirname, '../src/app/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  'env',
                  {
                    targets: {
                      browsers: '> 5%' // ['last 2 versions', 'ie >= 9']
                    },
                    module: false
                  }
                ],
                'stage-0',
                'react'
              ],
              plugins: ['transform-decorators-legacy']
            }
          },
          'eslint-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: loader => [
                  autoprefixer('last 2 versions'),
                  cssnano({
                    discardComments: {
                      removeAll: true
                    },
                    reduceIdents: {
                      keyframes: false
                    },
                    discardUnused: {
                      keyframes: false
                    }
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: loader => [
                  autoprefixer('last 2 versions'),
                  cssnano({
                    discardComments: { removeAll: true },
                    reduceIdents: { keyframes: false },
                    discardUnused: { keyframes: false }
                  })
                ]
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: loader => [
                  autoprefixer('last 2 versions'),
                  cssnano({
                    discardComments: { removeAll: true },
                    reduceIdents: { keyframes: false },
                    discardUnused: { keyframes: false }
                  })
                ]
              }
            },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ]
        })
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, '../src/assets/icons'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { cleanupAttrs: true },
                { cleanupEnableBackground: true },
                { cleanupIDs: true },
                { cleanupListOfValues: true },
                { cleanupNumericValues: true },
                { collapseGroups: true },
                { convertColors: true },
                { convertPathData: true },
                { convertShapeToPath: true },
                { convertStyleToAttrs: true },
                { convertTransform: true },
                { mergePaths: true },
                { removeComments: true },
                { removeDesc: true },
                { removeDimensions: true },
                { removeDoctype: true },
                { removeEditorsNSData: true },
                { removeEmptyAttrs: true },
                { removeEmptyContainers: true },
                { removeEmptyText: true },
                { removeHiddenElems: true },
                { removeMetadata: true },
                { removeNonInheritableGroupAttrs: true },
                { removeRasterImages: true },
                { removeTitle: true },
                { removeUnknownsAndDefaults: true },
                { removeUselessDefs: true },
                { removeUnusedNS: true },
                { removeUselessStrokeAndFill: true },
                { removeAttrs: { attrs: 'fill' } },
                { removeXMLProcInst: true },
                { removeStyleElement: true },
                { removeUnknownsAndDefaults: true },
                { sortAttrs: true }
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 8192,
              name: 'assets/images/[name].[ext]'
            }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        exclude: path.resolve(__dirname, '../src/assets/icons'),
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: 'assets/fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['react_vendor', 'vendor', 'manifest'],
      minChunks: Infinity
    }),

    new ExtractTextPlugin('css/styles.[chunkhash].css'),
    // new PurifyCSSPlugin({
    //   styleExtensions: ['.css', '.scss', 'sass'],
    //   moduleExtensions: ['.js', '.jsx', '.html'],
    //   paths: glob.sync(path.join(__dirname, '../src/app/*.jsx'))
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      minify: false,
      template: './src/app/app.html'
    })
    // new CopyWebpackPlugin([
    //   {
    //     from: 'src/assets/favicon',
    //     to: 'assets/favicon'
    //   }
    // ])
  ]
};
