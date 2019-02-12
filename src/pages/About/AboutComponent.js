import React, { Component } from 'react';
import T from 'prop-types';
import { compose } from 'redux';
import { injectIntl, FormattedMessage } from 'react-intl';
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
  DescriptionContainer,
  TitleContainer,
  Title,
  ButtonCircle,
  TextFunFact,
} from './About.s';

const SkillsComponent = universal(() => import('../Skills'));
const ClientsComponent = universal(() => import('../Clients'));
const HomeComponent = universal(() => import('../Home'));

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const funFacts = intl => [
  {
    id: 1,
    text: intl.formatMessage(AboutIntl.FunFact1),
  },
  {
    id: 2,
    text: intl.formatMessage(AboutIntl.FunFact2),
  },
  {
    id: 3,
    text: intl.formatMessage(AboutIntl.FunFact3),
  },
  {
    id: 4,
    text: intl.formatMessage(AboutIntl.FunFact4),
  },
  {
    id: 5,
    text: intl.formatMessage(AboutIntl.FunFact5),
  },
  {
    id: 6,
    text: intl.formatMessage(AboutIntl.FunFact6),
  },
  {
    id: 7,
    text: intl.formatMessage(AboutIntl.FunFact7),
  },
  {
    id: 8,
    text: intl.formatMessage(AboutIntl.FunFact8),
  },
  {
    id: 9,
    text: intl.formatMessage(AboutIntl.FunFact9),
  },
  {
    id: 10,
    text: intl.formatMessage(AboutIntl.FunFact10),
  },
];

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

  state = {
    currentFunFact: '',
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
    const { currentFunFact } = this.state;
    const { theme, hasInit, intl } = this.props;
    return (
      <Container>
        <MenuContainer>
          <TopMenu />
        </MenuContainer>
        <ContentContainer>
          <FunFactContainer>
            <TitleContainer>
              <Title>
                <FormattedMessage {...AboutIntl.FunFact} />
              </Title>
            </TitleContainer>
            <DescriptionContainer>
              <FormattedMessage
                {...AboutIntl.FunFactDescription}
                values={{ eol: <br /> }}
              />
            </DescriptionContainer>
            <ButtonCircle onClick={this.handleFunFactClick} />
            {currentFunFact ? (
              <TextFunFact>
                &laquo;&nbsp;{currentFunFact.text}&nbsp;&raquo;
              </TextFunFact>
            ) : null}
          </FunFactContainer>
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

  handleFunFactClick = () => {
    const tradFunFacts = funFacts(this.props.intl);
    const randomFunFactId = getRandomInt(tradFunFacts.length);
    this.setState({ currentFunFact: tradFunFacts[randomFunFactId] });
  };
}

export default compose(
  injectIntl,
  withTheme,
)(AboutComponent);
