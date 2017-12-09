'use strict';

let webpack = require('webpack');
let path    = require('path');

let BUILD_DIR = path.resolve(__dirname, '../client/public/build/');
let APP_DIR   = path.resolve(__dirname, '../client/src/');

let config = {
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      'babel-polyfill',
      APP_DIR
    ],
  },
  output: {
    path: BUILD_DIR,
    publicPath:'http://localhost:3000/build/',
    filename: 'bundle.js'
  },
  module : {
   loaders : [
     {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel-loader',
     },
     {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
     },
     {
       test: /\.(scss)$/,
       use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles SASS to CSS
        }]
     },
     {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]',
      },
    },
    {
      test: /\.(jpg|png|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]',
      },
    },
   ]
  },
  devServer: {
    hot: true
  }
};

module.exports = config;
