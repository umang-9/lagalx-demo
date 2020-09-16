import React, { ReactElement } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import getPageMeta from 'getPageMeta';
import HomePageLayout from 'layouts/HomePageLayout';
import { AppLocale } from 'locales';

function Home(): ReactElement {
  const { t, lang } = useTranslation();
  const pageMeta = getPageMeta(lang as AppLocale, '/');

  return (
    <>
      <Head>
        <title>{t('common:homeMetaTitle')}</title>
        <meta
          property="og:title"
          content={t('common:homeMetaTitle') as string}
        />
        <link rel="canonical" href={pageMeta.canonicalLink.href} />
        <meta property="og:url" content={pageMeta.canonicalLink.href} />
        {pageMeta.alternateLink.map((pm) => (
          <link
            key={pm.hrefLang}
            rel="alternate"
            hrefLang={pm.hrefLang}
            href={pm.href}
          />
        ))}
      </Head>
      <HomePageLayout />
    </>
  );
}

export default Home;
