import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import {
  EnglishLocale,
  SimplifiedChineseLocale,
  TraditionalChineseLocale,
} from 'locales';
import { gaTrackingId } from 'config';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    let locale = EnglishLocale;

    if (ctx.req.lang === SimplifiedChineseLocale) {
      locale = SimplifiedChineseLocale;
    } else if (ctx.req.lang === TraditionalChineseLocale) {
      locale = TraditionalChineseLocale;
    }

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps, // Styles fragment is rendered after the app and page rendering finish.
      styles: <>{sheets.getStyleElement()}</>,
      locale,
    };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <meta property="og:type" content="website" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          {gaTrackingId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaTrackingId}', {
                page_path: window.location.pathname,
              });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
