import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from 'next/router';
import appWithI18n from 'next-translate/appWithI18n';
import ContactFormDialogProvider from 'components/ContactFormDialogProvider';
import Footer from 'components/Footer';
import i18nConfig from 'i18n';
import LanguageBar from 'components/LanguageBar';
import NavBar from 'components/NavBar';
import theme from 'theme';
import { pageView } from 'gtag';
import '../global.css';
import '../material-icons.css';
import '../roboto.css';

Router.events.on('routeChangeComplete', (url) => pageView(url));

function App({ Component, pageProps = {} }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContactFormDialogProvider>
        {/* <LanguageBar /> */}
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ContactFormDialogProvider>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default appWithI18n(App, i18nConfig);
