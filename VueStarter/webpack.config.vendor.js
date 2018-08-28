const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = () => {
  const isDev = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')

  return [{
    mode: process.env.NODE_ENV,
    stats: { modules: false },
    performance: {
      hints: false
    },
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },
        { test: /\.css$/, use: isDev ? ['style-loader', 'css-loader'] : [MiniCssExtractPlugin.loader] }
      ]
    },
    entry: {
      vendor: ['event-source-polyfill', 'vue', 'axios', 'vue-router']
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
          uglifyOptions: {
            compress: {
              inline: false
            }
          }
        })
      ],
      runtimeChunk: false
    },
    output: {
      path: path.join(__dirname, 'wwwroot', 'dist'),
      publicPath: '/dist/',
      filename: '[name].js',
      library: '[name]_[hash]'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'vendor.css'
      }),
      new webpack.DllPlugin({
        path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
        name: '[name]_[hash]'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDev ? '"development"' : '"production"'
      })
    ]
  }]
}