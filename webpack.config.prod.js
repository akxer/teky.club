const webpack = require('webpack'), path = require('path'), MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  profile: true,
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        parallel: true
      })
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'jquery': 'jquery/dist/jquery.slim.js'
    }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new MiniCssExtractPlugin({
      filename: "index.css"
    }),
    new webpack.ProvidePlugin({
      $: "jquerySlim",
      jQuery: "jquerySlim"
    }),
    new CompressionPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel-loader',
        query: {
          "presets": ["react", "es2015"], "plugins": [
            ["transform-class-properties", {"spec": true}],
            "transform-object-rest-spread"
          ]
        }
      },
      {
        test: /(\.s?css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};