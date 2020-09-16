import React, { ReactElement } from 'react';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import getPageMeta from 'getPageMeta';
import PrivacyPolicyLayout from 'layouts/PrivacyPolicyLayout';
import { AppLocale } from 'locales';

function PrivacyPolicy(): ReactElement {
  const { t, lang } = useTranslation();
  const pageMeta = getPageMeta(lang as AppLocale, '/privacy');

  return (
    <>
      <Head>
        <title>{t('common:privacyPolicyMetaTitle')}</title>
        <meta
          property="og:title"
          content={t('common:privacyPolicyMetaTitle') as string}
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
      <PrivacyPolicyLayout />
    </>
  );
}

export default PrivacyPolicy;
