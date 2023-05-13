const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: false,
  devServer: {
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
});