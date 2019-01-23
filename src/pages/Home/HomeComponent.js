import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';
import T from 'prop-types';
import { withTheme } from 'styled-components';
import Text from 'Common/components/Text';
import Button from 'Common/components/Button';
import Animated from 'Common/components/Animated';
import LanguageSelector from 'Common/components/LanguageSelector';
import universal from 'react-universal-component';

import TopMenu from '../topMenu/TopMenuContainer';
import HomeIntl from './Home.i';
import {
  Container,
  InnerContainer,
  ContentContainer,
  FullStackDevWrapper,
  IntroWrapper,
  FullStackWrapper,
  DevWrapper,
  ButtonWrapper,
  NameContainer,
  MenuContainer,
} from './Home.s';

const SkillsComponent = universal(() => import('../Skills'));
const ClientsComponent = universal(() => import('../Clients'));
const AboutComponent = universal(() => import('../About'));

class Home extends Component {
  static propTypes = {
    theme: T.any,
    intl: T.any,
    setPageInit: T.func.isRequired,
    hasInit: T.bool.isRequired,
  };

  static defaultProps = {
    theme: null,
    intl: null,
  };

  componentDidMount() {
    const { hasInit, setPageInit } = this.props;
    SkillsComponent.preload();
    ClientsComponent.preload();
    AboutComponent.preload();

    if (!hasInit) {
      setPageInit('Home');
    }
  }

  render() {
    const { theme, intl, hasInit } = this.props;

    return (
      <Container>
        <LanguageSelector />
        <MenuContainer>
          <TopMenu />
        </MenuContainer>
        <InnerContainer>
          <ContentContainer>
            <Animated
              initiallyVisible={hasInit}
              animate={!hasInit}
              animation='fadeInDown'
              delay={300}
            >
              <NameContainer>
                <Text color={theme.colors.lightGray2} fontSize={24}>
                  Jordane Michon (Temporary website)
                </Text>
              </NameContainer>
              <FullStackDevWrapper>
                <FullStackWrapper>
                  <FormattedMessage {...HomeIntl.FullStack} />
                </FullStackWrapper>
                <DevWrapper>
                  <FormattedMessage {...HomeIntl.Developer} />
                </DevWrapper>
              </FullStackDevWrapper>
              <IntroWrapper>
                <FormattedMessage
                  {...HomeIntl.Intro}
                  values={{ eol: <br /> }}
                />
              </IntroWrapper>
            </Animated>
            <ButtonWrapper>
              <a href='mailto:jordane.michon@gmail.com'>
                <Button
                  delay={300}
                  animate={!hasInit}
                  text={intl.formatMessage(HomeIntl.WorkWithMe)}
                />
              </a>
            </ButtonWrapper>
          </ContentContainer>
        </InnerContainer>
      </Container>
    );
  }
}

export default compose(
  injectIntl,
  withTheme,
)(Home);
