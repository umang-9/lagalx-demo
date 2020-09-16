const localeMapper = {
  'en-GB': 'en-us',
  'en-us': 'en-us',
  'zh-CN': 'zh-ch',
  'zh-HK': 'zh-hk',
  'zh-TW': 'zh-hk',
  en: 'en',
  zh: 'zh-cn',
};

const languageHeaderDetect = {
  name: 'language-header-detect',
  lookup: (req) => {
    return localeMapper[req.locale] || 'en-us';
  },
};

module.exports = languageHeaderDetect;
