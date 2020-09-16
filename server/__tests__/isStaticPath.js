import isStaticPath from '../isStaticPath';

describe('isStaticPath', () => {
  it('Should not throw an error if path was not given', () => {
    expect(isStaticPath()).toEqual(false);
  });

  it('Should not throw an error if path is not valid', () => {
    expect(isStaticPath(null)).toEqual(false);
    expect(isStaticPath(undefined)).toEqual(false);
  });

  it('Should return true if req.path is a next js path', () => {
    expect(
      isStaticPath('/_next/static/4PuLmx6MFl_w44SK084m_/pages/login.js')
    ).toEqual(true);
  });

  it('Should return true if req.path is a static asset path', () => {
    expect(isStaticPath('/public/static/images/banner.jpg')).toEqual(true);
  });
});
