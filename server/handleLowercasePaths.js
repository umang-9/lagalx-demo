import url from 'url';
import isStaticPath from './isStaticPath';

// Taken from https://github.com/iZettle/express-lowercase-paths/blob/master/express-lowercase-paths.js
function handleLowercasePaths(req, res, next) {
  if (!isStaticPath(req.path)) {
    if (req.path.toLowerCase() !== req.path) {
      const parsed = url.parse(req.originalUrl);
      parsed.pathname = parsed.pathname.toLowerCase();
      return res.redirect(301, url.format(parsed));
    }
  }

  return next();
}

export default handleLowercasePaths;
