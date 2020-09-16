import { PageMeta, MetaLink } from 'types';
import { websiteUrl } from 'config';
import { EnglishLocale, AppLocale, AppLocaleCodes } from 'locales';

interface CanonicalLink extends MetaLink {
  rel: 'canonical';
}

interface AlternateLink extends MetaLink {
  hrefLang: AppLocale;
  rel: 'alternate';
}

function makeCanonical(locale: AppLocale, path: string): CanonicalLink {
  const formattedPath = path === '/' ? '' : path;

  const href =
    locale === EnglishLocale
      ? [websiteUrl, formattedPath]
      : [websiteUrl, `/${locale}`, formattedPath];
  return {
    href: href.join(''),
    rel: 'canonical',
  };
}

function makeAlternateLink(altLang: AppLocale, path: string): AlternateLink {
  const href =
    altLang === EnglishLocale
      ? [websiteUrl, path]
      : [websiteUrl, `/${altLang}`, path];

  if (path === '/') {
    href.pop();
  }

  return {
    href: href.join(''),
    hrefLang: altLang,
    rel: 'alternate',
  };
}

function makeAlternateLinks(locale: AppLocale, path: string): AlternateLink[] {
  const altLocales = [...AppLocaleCodes].filter((l) => l !== locale);

  return altLocales.map((altLang) => makeAlternateLink(altLang, path));
}

function getPageMeta(locale: AppLocale, path: string): PageMeta {
  return {
    canonicalLink: makeCanonical(locale, path),
    alternateLink: makeAlternateLinks(locale, path),
  };
}

export default getPageMeta;
