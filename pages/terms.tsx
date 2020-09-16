import React, { ReactElement } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import getPageMeta from 'getPageMeta';
import TermsOfUseLayout from 'layouts/TermsOfUseLayout';
import { AppLocale } from 'locales';

function TermsOfUse(): ReactElement {
  const { t, lang } = useTranslation();
  const pageMeta = getPageMeta(lang as AppLocale, '/terms');

  return (
    <>
      <Head>
        <title>{t('common:termsOfUseMetaTitle')}</title>
        <meta
          property="og:title"
          content={t('common:termsOfUseMetaTitle') as string}
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
      <TermsOfUseLayout />
    </>
  );
}

export default TermsOfUse;
