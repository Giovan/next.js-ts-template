const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: [],
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  devIndicators: {
    autoPrerender: true,
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 3000
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped',
          },
        },
      ],
    });
    return config;
  },
  apiCalls: {
    localServerUrl: 'http://localhost:8000/',
    qaServerUrl: 'https://',
    prodServerUrl: 'https://'
  },
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
});
