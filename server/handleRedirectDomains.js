import url from 'url';

const hostnameRedirectMap = {
  'legalx.ai': 'yunban.co',
  'www.legalx.ai': 'yunban.co',
  'www.yunban.co': 'yunban.co',
  'staging.legalx.ai': 'staging.yunban.co',
};

function getRedirectDestination(host) {
  return hostnameRedirectMap[host] || null;
}

function handleRedirectDomains(req, res, next) {
  const destination = getRedirectDestination(req.hostname);

  if (destination) {
    const parsed = url.parse(req.originalUrl);
    parsed.hostname = destination;
    parsed.protocol = 'https';
    return res.redirect(301, url.format(parsed));
  }

  return next();
}

export default handleRedirectDomains;
