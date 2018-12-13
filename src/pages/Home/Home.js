import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import HomeSection from './sections/home';
import SkillsSection from './sections/skills';
import ClientSection from './sections/clients';
import AboutSection from './sections/about';

export default () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <HomeSection />
        <SkillsSection />
        <ClientSection />
        <AboutSection />
      </ReactFullpage.Wrapper>
    )}
  />
);
