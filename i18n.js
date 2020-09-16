module.exports = {
  allLanguages: ['en', 'zh-hans', 'zh-hant'],
  defaultLanguage: 'en',
  defaultLangRedirect: 'root',
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    '*': ['common'],
  },
};
