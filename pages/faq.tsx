import React, { ReactElement } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import FaqLayout from 'layouts/FaqLayout';
import getPageMeta from 'getPageMeta';
import { AppLocale } from 'locales';

function Faq(): ReactElement {
  const { t, lang } = useTranslation();
  const pageMeta = getPageMeta(lang as AppLocale, '/faq');

  return (
    <>
      <Head>
        <title>{t('common:faqMetaTitle')}</title>
        <meta
          property="og:title"
          content={t('common:faqMetaTitle') as string}
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
      <FaqLayout />
    </>
  );
}

export default Faq;
