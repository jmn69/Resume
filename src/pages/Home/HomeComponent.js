import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { withTheme } from 'styled-components';
import Text from 'Common/components/Text';
import Button from 'Common/components/Button';
import Animated from 'Common/components/Animated';
import universal from 'react-universal-component';

import HomeIntl from './Home.i';
import {
  Container,
  InnerContainer,
  LogoContainer,
  ContentContainer,
  FullStackDevWrapper,
  IntroWrapper,
  FullStackWrapper,
  DevWrapper,
  ButtonWrapper,
  NameContainer,
  LogoMobileContainer,
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
        <InnerContainer>
          <LogoContainer>
            <FontAwesomeIcon
              size='3x'
              color={theme.colors.lightGray}
              icon={faJedi}
            />
          </LogoContainer>
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
                <LogoMobileContainer>
                  <FontAwesomeIcon
                    size='3x'
                    color={theme.colors.lightGray}
                    icon={faJedi}
                  />
                </LogoMobileContainer>
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
              <Button
                delay={300}
                animate={!hasInit}
                text={intl.formatMessage(HomeIntl.WorkWithMe)}
              />
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
