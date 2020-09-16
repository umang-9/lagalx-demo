const path = require('path');

function getPath(p) {
  return path.join(__dirname, p);
}

const aliases = {
  api: getPath('api.ts'),
  codes: getPath('codes.ts'),
  components: getPath('components/'),
  config: getPath('config.js'),
  context: getPath('context/'),
  getPageMeta: getPath('getPageMeta.ts'),
  gtag: getPath('gtag.ts'),
  hooks: getPath('hooks/'),
  i18n: getPath('i18n.js'),
  layouts: getPath('layouts/'),
  locales: getPath('locales.ts'),
  theme: getPath('theme'),
  translations: getPath('translations.js'),
  types: getPath('types.ts'),
};

module.exports = aliases;
