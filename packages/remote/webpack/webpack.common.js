const { pathResolve, alias } = require('./webpack.utils');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: ['web', 'es5'],
  entry: {
    main: pathResolve('src/index.ts'),
  },
  output: {
    filename: 'js/[name].js?[contenthash]',
    path: pathResolve('dist'),
    publicPath: 'auto',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss'],
    alias,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              "...",
              {
                tag: "script",
                attribute: "src",
                type: "src",
                filter: () => false,
              },
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: pathResolve('public/index.html'),
      filename: 'index.html',
      publicPath: '/',
    }),
  ]
};