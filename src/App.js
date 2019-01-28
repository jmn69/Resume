import React, { Component } from 'react';
import LanguageSelector from 'Common/components/LanguageSelector';

import TopMenuMobile from './pages/topMenuMobile/TopMenuMobileContainer';
import Switcher from './pages/Switcher';
import { AppContainer } from './App.s';

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <LanguageSelector />
        <TopMenuMobile />
        <Switcher />
      </AppContainer>
    );
  }
}
