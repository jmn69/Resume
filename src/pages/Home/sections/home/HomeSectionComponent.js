import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { withTheme } from 'styled-components';
import Text from 'Common/components/Text';
import Button from 'Common/components/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import Waypoint from 'react-waypoint';

import HomeSectionIntl from './HomeSection.i';
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
} from './HomeSection.s';

class HomeSection extends Component {
  static propTypes = {
    theme: T.any,
    intl: T.any,
  };

  static defaultProps = {
    theme: null,
    intl: null,
  };

  state = {
    showButton: false,
  };

  render() {
    const { theme, intl } = this.props;
    const { showButton } = this.state;

    return (
      <div className='section'>
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
              <ScrollAnimation animateIn='fadeInDown'>
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
                    <FormattedMessage {...HomeSectionIntl.FullStack} />
                  </FullStackWrapper>
                  <DevWrapper>
                    <FormattedMessage {...HomeSectionIntl.Developer} />
                  </DevWrapper>
                </FullStackDevWrapper>
                <IntroWrapper>
                  <FormattedMessage
                    {...HomeSectionIntl.Intro}
                    values={{ eol: <br /> }}
                  />
                </IntroWrapper>
              </ScrollAnimation>
              {showButton ? (
                <ButtonWrapper>
                  <Button
                    text={intl.formatMessage(HomeSectionIntl.WorkWithMe)}
                  />
                </ButtonWrapper>
              ) : null}

              <Waypoint onEnter={this.handleWaypointEnter} />
            </ContentContainer>
          </InnerContainer>
        </Container>
      </div>
    );
  }

  handleWaypointEnter = () => {
    this.setState({ showButton: true });
  };
}

export default compose(injectIntl, withTheme)(HomeSection);
