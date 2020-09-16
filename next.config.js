const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === '1',
});
const aliases = require('./aliases');

module.exports = withPlugins([[withBundleAnalyzer, {}]], {
  webpack: (config) => {
    const { alias } = config.resolve;
    config.resolve.alias = {
      ...alias,
      ...aliases,
    };

    return config;
  },
  distDir: 'build',
});
