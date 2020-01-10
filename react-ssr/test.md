const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  // target: 'node',
  entry: './server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            ['@babel/preset-env', {
                targets: {
                  // node: 'current'
                  browsers: ['last 2 versions']
                }
            }],
            '@babel/react'
          ],
          plugins: [
            'babel-plugin-dynamic-import-node',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import'
          ]
        }
      }
    ]
  },
  // Tell webpack not to bundle any libraries that exist in the 'node_modules' folder
  // into the server bundle
  externals: [webpackNodeExternals()]
}
