const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: false,
  devServer: {
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: '../remote/dist/',
          to: 'remote',
        },
      ],
    }),
  ],
});