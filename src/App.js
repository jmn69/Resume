import React, { Component } from 'react';

import TopMenu from './pages/topMenu/TopMenuContainer';
import TopMenuMobile from './pages/topMenuMobile/TopMenuMobileContainer';
import Switcher from './pages/Switcher';
import { AppContainer } from './App.s';

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <TopMenu />
        <TopMenuMobile />
        <Switcher />
      </AppContainer>
    );
  }
}
