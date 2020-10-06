import React, { ReactElement } from 'react';
import styled from 'styled-components';
// import LanguageSelector from './LanguageSelector';

import TopMenuMobile from './topMenuMobile/TopMenuMobileContainer';

const Container = styled.div`
  @media screen and (min-width: 700px) {
    font-size: calc(14px + 8 * ((100vw - 700px) / 2000));
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.2rem;
  }
`;

type AppLayoutProps = {
  children: ReactElement;
};

const AppLayout = ({ children }: AppLayoutProps) => (
  <Container>
    {/* <LanguageSelector /> */}
    <TopMenuMobile />
    {children}
  </Container>
);

export default AppLayout;
