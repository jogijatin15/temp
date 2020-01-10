'use strict';

module.exports = function (api) {

  api.cache(true);
  const presets = [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: '2.0.0',
      targets: {
        node: 'current'
      }
    }],
    '@babel/react'
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties'
  ];
  return {
    presets,
    plugins
  };
};
