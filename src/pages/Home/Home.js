import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Loader from 'Common/components/Loader';

import HomeSection from './sections/home';
import SkillsSection from './sections/skills';
import ClientSection from './sections/clients';
import AboutSection from './sections/about';
import { LoadingContainer } from './Home.s';

const anchors = ['Home', 'Skills', 'Clients', 'About'];

export default () => (
  <ReactFullpage
    anchors={anchors}
    scrollBar
    autoScrolling={false}
    navigation
    navigationTooltips={anchors}
    menu='#topMenu'
    render={({ state, fullpageApi }) => (
      <ReactFullpage.Wrapper>
        {!state.initialized || fullpageApi === undefined ? (
          <LoadingContainer>
            <Loader fullPage />
          </LoadingContainer>
        ) : null}
        <HomeSection />
        <SkillsSection />
        <ClientSection />
        <AboutSection />
      </ReactFullpage.Wrapper>
    )}
  />
);
