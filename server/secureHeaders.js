import helmet from 'helmet';

function secureHeaders(app) {
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: [
          "'self'",
          'https://yunban.co',
          '*.yunban.co',
          '*.legalx.ai',
        ],
        styleSrc: [
          "'self'",
          'https://yunban.co',
          '*.yunban.co',
          '*.legalx.ai',
          "'unsafe-inline'",
        ],
        imgSrc: [
          "'self'",
          'data:',
          'blob:',
          'https://yunban.co',
          '*.yunban.co',
          '*.legalx.ai',
          'www.googletagmanager.com',
          'https://www.google-analytics.com',
          'https://stats.g.doubleclick.net',
        ],
        fontSrc: ['https://yunban.co', '*.yunban.co', '*.legalx.ai'],
        scriptSrc: [
          "'self'",
          'https://yunban.co',
          '*.yunban.co',
          '*.legalx.ai',
          'https://www.googletagmanager.com',
          'https://www.google-analytics.com',
          'https://googleads.g.doubleclick.net',
          'https://www.googleadservices.com',
          'https://stats.g.doubleclick.net',
          "'unsafe-inline'",
        ],
      },
    })
  );
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.frameguard({ action: 'sameorigin' }));
  app.use(helmet.hidePoweredBy());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
  app.use(helmet.xssFilter());
}

export default secureHeaders;
