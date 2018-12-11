import React, { Component } from 'react';

import Switcher from './pages/Switcher';

import Toolbar from './components/toolbar/ToolbarContainer';
import Menu from './components/menu/Menu';
import { Container, AppContainer } from './App.s';

export default class App extends Component {
  state = {
    isMenuOpen: false,
  };

  static propTypes = {};

  render() {
    const { isMenuOpen } = this.state;
    return (
      <Container>
        <Menu
          isOpen={isMenuOpen}
          onLinkClick={this.handleLinkClick}
          onMenuStateChange={this.handleMenuStateChange}
        />
        <Toolbar onMenuClick={this.handleMenuClick} />
        <AppContainer>
          <Switcher />
        </AppContainer>
      </Container>
    );
  }

  handleMenuClick = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  handleLinkClick = () => {
    this.setState({ isMenuOpen: false });
  };

  handleMenuStateChange = state => {
    this.setState({ isMenuOpen: state.isOpen });
  };
}
