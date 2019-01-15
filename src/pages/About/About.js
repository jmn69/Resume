import React, { Component } from 'react';
import T from 'prop-types';
import TopMenu from '../topMenu/TopMenuContainer';

import { Container } from './About.s';

export default class About extends Component {
  render() {
    return (
      <Container>
        <TopMenu />
      </Container>
    );
  }
}
