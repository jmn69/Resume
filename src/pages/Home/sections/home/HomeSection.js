import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';
import { connect } from 'react-redux';
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
} from './HomeSection.s';

class HomeSection extends Component {
  static propTypes = {
    isFullPageReady: T.bool.isRequired,
    theme: T.any,
  };

  static defaultProps = {
    theme: null,
  };

  state = {
    showButton: false,
  };

  render() {
    const { isFullPageReady, theme } = this.props;
    const { showButton } = this.state;

    return (
      <div className='section'>
        <Container isFullPageReady={isFullPageReady}>
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
                <Text color={theme.colors.lightGray2} fontSize={24}>
                  Jordane Michon
                </Text>
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
                  <Button text='Work with me' />
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

const mapStateToProps = state => ({
  isFullPageReady: state.settings.isFullPageReady,
});

export default connect(mapStateToProps)(withTheme(HomeSection));
