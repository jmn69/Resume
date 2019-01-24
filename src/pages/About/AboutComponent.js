import React, { Component } from 'react';
import T from 'prop-types';
import { compose } from 'redux';
import { injectIntl, FormattedMessage } from 'react-intl';
import LanguageSelector from 'Common/components/LanguageSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'Common/components/Button';
import { withTheme } from 'styled-components';
import { Malt, Linkedin, Github } from 'Common/devicon';
import universal from 'react-universal-component';

import HomeIntl from '../Home/Home.i';
import AboutIntl from './About.i';
import TopMenu from '../topMenu/TopMenuContainer';
import {
  Container,
  FunFactContainer,
  InformationContainer,
  ContactMeContainer,
  AboutContainer,
  ContentContainer,
  LeftContainer,
  RightContainer,
  Divider,
  TextInformation,
  MenuContainer,
  RowContainer,
  IconWrapper,
  DownloadIconContainer,
  DownloadTextContainer,
  RowLinksContainer,
  Link,
  RightInnerContainer,
  ButtonWrapper,
  TextContact,
} from './About.s';

const SkillsComponent = universal(() => import('../Skills'));
const ClientsComponent = universal(() => import('../Clients'));
const HomeComponent = universal(() => import('../Home'));

class AboutComponent extends Component {
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
    HomeComponent.preload();

    if (!hasInit) {
      setPageInit('About');
    }
  }

  render() {
    const { theme, hasInit, intl } = this.props;
    return (
      <Container>
        <LanguageSelector />
        <MenuContainer>
          <TopMenu />
        </MenuContainer>
        <ContentContainer>
          <FunFactContainer>content</FunFactContainer>
          <AboutContainer>
            <InformationContainer>
              <LeftContainer>
                <RowContainer>
                  <IconWrapper>
                    <FontAwesomeIcon
                      size='lg'
                      color={theme.colors.lightGray}
                      icon='map-marker'
                    />
                  </IconWrapper>
                  <TextInformation>
                    Travail à distance et sur Lyon
                  </TextInformation>
                </RowContainer>
                <RowContainer>
                  <IconWrapper>
                    <FontAwesomeIcon
                      size='lg'
                      color={theme.colors.lightGray}
                      icon='euro-sign'
                    />
                  </IconWrapper>
                  <TextInformation>TJM 450€</TextInformation>
                </RowContainer>
                <RowContainer>
                  <IconWrapper>
                    <FontAwesomeIcon
                      size='lg'
                      color={theme.colors.lightGray}
                      icon='globe-europe'
                    />
                  </IconWrapper>
                  <TextInformation>Français et Anglais</TextInformation>
                </RowContainer>
                <RowContainer>
                  <IconWrapper>
                    <FontAwesomeIcon
                      size='lg'
                      color={theme.colors.lightGray}
                      icon='hourglass-half'
                    />
                  </IconWrapper>
                  <TextInformation>
                    Horaires de travail flexibles
                  </TextInformation>
                </RowContainer>
                <RowContainer>
                  <IconWrapper>
                    <FontAwesomeIcon
                      size='lg'
                      color={theme.colors.lightGray}
                      icon='check'
                    />
                  </IconWrapper>
                  <TextInformation>Disponibilité immédiate</TextInformation>
                </RowContainer>
              </LeftContainer>
              <Divider />
              <RightContainer>
                <RightInnerContainer>
                  <Link href='./cv'>
                    <DownloadIconContainer>
                      <FontAwesomeIcon
                        size='2x'
                        color='#4caf50'
                        icon='download'
                      />
                    </DownloadIconContainer>
                    <DownloadTextContainer>
                      <TextInformation>
                        Télécharger mon CV au format pdf
                      </TextInformation>
                    </DownloadTextContainer>
                  </Link>
                </RightInnerContainer>
                <RightInnerContainer>
                  <DownloadTextContainer>
                    <TextInformation>Retrouvez moi aussi sur :</TextInformation>
                  </DownloadTextContainer>
                  <RowLinksContainer>
                    <Link href='https://www.malt.fr/profile/jordanemichon'>
                      <Malt style={{ marginTop: '-1px' }} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/jordane-michon-73779011b'>
                      <Linkedin style={{ marginTop: '-7px' }} />
                    </Link>
                    <Link href='https://github.com/jmn69'>
                      <Github style={{ marginTop: '-8px' }} />
                    </Link>
                  </RowLinksContainer>
                </RightInnerContainer>
              </RightContainer>
            </InformationContainer>
            <ContactMeContainer>
              <TextContact>
                <FormattedMessage
                  {...AboutIntl.ContactMeText}
                  values={{ eol: <br /> }}
                />
              </TextContact>
              <ButtonWrapper>
                <a href='mailto:jordane.michon@gmail.com'>
                  <Button
                    delay={300}
                    animate={!hasInit}
                    text={intl.formatMessage(HomeIntl.WorkWithMe)}
                  />
                </a>
              </ButtonWrapper>
            </ContactMeContainer>
          </AboutContainer>
        </ContentContainer>
      </Container>
    );
  }
}

export default compose(
  injectIntl,
  withTheme,
)(AboutComponent);
