import React, { Component } from 'react';

import TopMenu from './pages/Home/topMenu/TopMenuContainer';
import Switcher from './pages/Switcher';
import { AppContainer } from './App.s';

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <TopMenu />
        <Switcher />
      </AppContainer>
    );
  }
}
