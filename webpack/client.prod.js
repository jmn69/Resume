const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const sharedConfig = require('./config.shared.js');
const getLocalIdent = require('css-loader/lib/getLocalIdent');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'development',
  // devtool: 'source-map',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../buildClient'),
    publicPath: '/static/',
  },
  stats: 'verbose',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              getLocalIdent: (
                loaderContext,
                localIdentName,
                localName,
                options,
              ) =>
                loaderContext.resourcePath.includes('External.css')
                  ? localName
                  : getLocalIdent(
                    loaderContext,
                    localIdentName,
                    localName,
                    options,
                  ),
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: sharedConfig.alias,
  },
  optimization: {
    // FOR PRODUCTION
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
            ascii_only: true,
          },
          compress: {
            comparisons: false,
          },
        },
      }),
    ],
    // END
    // NEEDED BOTH IN PROD AND DEV BUILDS
    runtimeChunk: {
      name: 'bootstrap',
    },
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  },
  plugins: [
    new StatsPlugin('stats.json'),
    new ExtractCssChunks({ cssModules: true }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.HashedModuleIdsPlugin(), // not needed for strategy to work (just good practice)
  ],
};
