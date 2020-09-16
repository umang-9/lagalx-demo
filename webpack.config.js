const alias = require('./aliases');

// https://github.com/benmosher/eslint-plugin-import/issues/1286#issuecomment-468342946
module.exports = {
  resolve: {
    alias,
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
};
