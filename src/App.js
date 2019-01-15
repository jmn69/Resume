import React, { Component } from 'react';

import TopMenuMobile from './pages/topMenuMobile/TopMenuMobileContainer';
import Switcher from './pages/Switcher';
import { AppContainer } from './App.s';

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <TopMenuMobile />
        <Switcher />
      </AppContainer>
    );
  }
}
