import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { withTheme } from 'styled-components';
import Text from 'Common/components/Text';
import Button from 'Common/components/Button';
import Waypoint from 'react-waypoint';
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

  state = {
    showButton: false,
    ContentAnimationClasses: '',
    ContentAnimationStyle: { opacity: this.props.hasInit ? 1 : 0 },
  };

  componentDidMount() {
    SkillsComponent.preload();
    ClientsComponent.preload();
    AboutComponent.preload();

    if (!this.props.hasInit) {
      this.delayedAnimationTimeout = setTimeout(() => {
        this.setState({
          ContentAnimationClasses: 'animated fadeInDown',
          ContentAnimationStyle: {
            animationDuration: '1s',
            opacity: 1,
          },
        });
      }, 300);
      this.props.setPageInit('Home');
    }
  }

  componentWillUnmount() {
    clearTimeout(this.delayedAnimationTimeout);
  }

  render() {
    const { theme, intl } = this.props;
    const {
      showButton,
      ContentAnimationClasses,
      ContentAnimationStyle,
    } = this.state;

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
            <div
              className={ContentAnimationClasses}
              style={ContentAnimationStyle}
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
            </div>
            {showButton ? (
              <ButtonWrapper>
                <Button text={intl.formatMessage(HomeIntl.WorkWithMe)} />
              </ButtonWrapper>
            ) : null}

            <Waypoint onEnter={this.handleWaypointEnter} />
          </ContentContainer>
        </InnerContainer>
      </Container>
    );
  }

  handleWaypointEnter = () => {
    this.setState({ showButton: true });
  };
}

export default compose(
  injectIntl,
  withTheme,
)(Home);
