import express from 'express';
import next from 'next';
import i18nMiddleware from 'next-translate/i18nMiddleware';
import i18nConfig from '../i18n';
import handleLowercasePaths from './handleLowercasePaths';
import handleRedirectDomains from './handleRedirectDomains';
import secureHeaders from './secureHeaders';

const isProduction = process.env.NODE_ENV === 'production';
const deployCSP = process.env.DEPLOY_CSP !== 'false';
const app = next({ dev: !isProduction });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (isProduction && deployCSP) {
      // Setup Helmet Middleware for HTTP Headers Security
      secureHeaders(server);
    }

    // Middleware for redirecting uppercase urls to lowercase urls
    server.use(handleLowercasePaths);

    server.use(handleRedirectDomains);

    server.use(i18nMiddleware(i18nConfig));

    server.get('*', handle);

    server.listen(3000, (error) => {
      if (error) {
        throw error;
      }

      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error(error);
    return process.exit(1);
  });
