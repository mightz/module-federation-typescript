const { pathResolve, alias } = require('./webpack.utils');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pathsTransformer = require("ts-transform-paths").default;
const { ModuleFederationPlugin } = require("webpack").container;

const dependencies = require("../package.json").dependencies;
const {
  'core-js': dependencyCoreJs,
  ...sharedDependencies
} = dependencies;

const moduleName = 'module-remote';
const moduleVarName = 'moduleRemote';

const federationConfig = {
  name: moduleName,
  library: {
    type: "var",
    name: moduleVarName,
  },
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    '.': './src/module',
  },
  shared: {
    ...sharedDependencies,
    react: {
      import: "react",
      shareKey: "react",
      shareScope: "default",
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};

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
        options: {
          getCustomTransformers: () => pathsTransformer(),
        },
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
    new ModuleFederationPlugin(federationConfig),
  ]
};