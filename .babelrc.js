const config = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          useBuiltIns: 'entry',
          corejs: 2,
        },
      },
    ],
  ],
};

if (process.env.NODE_ENV !== 'production') {
  config.presets = [['next/babel']];
}

module.exports = config;
