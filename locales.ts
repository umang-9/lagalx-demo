export const EnglishLocale = 'en';

export const SimplifiedChineseLocale = 'zh-hans';

export const TraditionalChineseLocale = 'zh-hant';

export type AppLocale =
  | typeof EnglishLocale
  | typeof SimplifiedChineseLocale
  | typeof TraditionalChineseLocale;

export const AppLocaleCodes: AppLocale[] = [
  EnglishLocale,
  SimplifiedChineseLocale,
  TraditionalChineseLocale,
];
