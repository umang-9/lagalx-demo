import React, { ReactElement } from 'react';
import HomePageChatSecurity from './HomePageChatSecurity';
import HomePageFeatures from './HomePageFeatures';
import HomePageHero from './HomePageHero';
import HomePagePainPoints from './HomePagePainPoints';
import HomePageSecureTechnology from './HomePageSecureTechnology';
import HomePageAbout from './HomePageAbout';
import HomePageContact from './HomePageContact';

function HomePageLayout(): ReactElement {
  return (
    <>
      <HomePageHero />
      <HomePageFeatures />
      <HomePagePainPoints />
      <HomePageChatSecurity />
      <HomePageSecureTechnology />
      <HomePageAbout />
      <HomePageContact />
    </>
  );
}

export default HomePageLayout;
