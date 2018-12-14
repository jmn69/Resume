import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { withTheme } from 'styled-components';
import Text from 'Common/components/Text';

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
} from './HomeSection.s';

class HomeSection extends Component {
  static propTypes = {
    isFullPageReady: T.bool.isRequired,
    theme: T.any,
  };

  static defaultProps = {
    theme: null,
  };

  render() {
    const { isFullPageReady, theme } = this.props;

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
            </ContentContainer>
          </InnerContainer>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFullPageReady: state.settings.isFullPageReady,
});

export default connect(mapStateToProps)(withTheme(HomeSection));
