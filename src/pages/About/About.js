import React, { Component } from 'react';
import T from 'prop-types';
import LanguageSelector from 'Common/components/LanguageSelector';
import TopMenu from '../topMenu/TopMenuContainer';

import {
  Container,
  FunFactContainer,
  InformationContainer,
  ContactMeContainer,
  AboutContainer,
  ContentContainer,
} from './About.s';

export default class About extends Component {
  render() {
    return (
      <Container>
        <LanguageSelector />
        <TopMenu />
        <ContentContainer>
          <FunFactContainer>content</FunFactContainer>
          <AboutContainer>
            <InformationContainer>info</InformationContainer>
            <ContactMeContainer>contact</ContactMeContainer>
          </AboutContainer>
        </ContentContainer>
      </Container>
    );
  }
}
