import React, { Component } from 'react';

import Switcher from './pages/Switcher';
import { Container, AppContainer } from './App.s';

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppContainer>
          <Switcher />
        </AppContainer>
      </Container>
    );
  }
}
