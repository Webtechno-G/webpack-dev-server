'use strict';

module.exports = (api) => {
  api.cache(true);

  return {
    parserOpts: {
      // For `jest`
      allowReturnOutsideFunction: true,
    },
    presets: ['@babel/preset-env'],
    env: {
      test: {
        plugins: ['@babel/plugin-transform-runtime'],
      },
    },
  };
};
