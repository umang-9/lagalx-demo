function isStaticPath(path = '') {
  const p = path || '';
  return (
    p.indexOf('_next') > -1 ||
    p.indexOf('static/') > -1 ||
    p.indexOf('public/') > -1 ||
    p.indexOf('images/') > -1 ||
    p.indexOf('fonts/') > -1
  );
}

export default isStaticPath;
