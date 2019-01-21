import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import universal from 'react-universal-component';
import Text from 'Common/components/Text';
import { FormattedMessage } from 'react-intl';
import {
  ReactIcon,
  Git,
  Js,
  Ts,
  Redux,
  Bootstrap,
  Android,
  DotNet,
  NodeJs,
} from 'Common/devicon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TopMenu from '../topMenu/TopMenuContainer';
import ClientsIntl from './Clients.i';
import {
  Container,
  ImageContainer,
  DescriptionContainer,
  CardsContainer,
  Card,
  StyledAnimated,
  CardContainer,
  MobileHiddingContainer,
  DesktopHiddingContainer,
  TechContainer,
  TitleContainer,
  Title,
  RecommendationsContainer,
  RecommendationText,
  Ref,
  RecommandationTitleContainer,
  Company,
  ContentContainer,
} from './Clients.s';

const HomeComponent = universal(() => import('../Home'));
const SkillsComponent = universal(() => import('../Skills'));
const AboutComponent = universal(() => import('../About'));

const techComponents = {
  React: <ReactIcon key='react' />,
  Redux: <Redux key='redux' />,
  Ts: <Ts key='Ts' />,
  Js: <Js key='Js' />,
  Bootstrap: <Bootstrap key='Bootstrap' />,
  Android: <Android key='Android' />,
  Dotnet: <DotNet key='Dotnet' />,
  Nodejs: <NodeJs key='Nodejs' />,
  Git: <Git textColor='white' key='Git' />,
};

export default class Clients extends Component {
  static propTypes = {
    data: T.any.isRequired,
    setPageInit: T.func.isRequired,
    hasInit: T.bool.isRequired,
  };

  state = {
    descriptionClassNames: {},
    techClassNames: {},
  };

  componentDidMount() {
    const { hasInit, setPageInit } = this.props;
    SkillsComponent.preload();
    HomeComponent.preload();
    AboutComponent.preload();

    if (!hasInit) {
      setPageInit('Clients');
    }
  }

  render() {
    return (
      <Fragment>
        {this.renderDesktop()}
        {this.renderMobileTablet()}
      </Fragment>
    );
  }

  renderDesktop() {
    const { data, hasInit } = this.props;
    const { descriptionClassNames, techClassNames } = this.state;

    // The logic below is needed to animate right to left card row by row
    const animationDelay = 300;
    let lastRowIndex = 0;
    const delayForRow = animationDelay * 3; // 3 cards per row so 3 x animation delay
    let delay = delayForRow;

    const cards =
      data &&
      data.map((client, index) => {
        const numberOfRemainingClient = data.length - index;
        if (index > 0) {
          delay -= animationDelay;
        }
        if (index === lastRowIndex + 3) {
          lastRowIndex += 3;
          const numberOfDoneRow = lastRowIndex / 3;
          if (numberOfRemainingClient >= 3) {
            delay = numberOfDoneRow * delayForRow + delayForRow;
          }
          else if (numberOfRemainingClient === 2) {
            delay = numberOfDoneRow * delayForRow + animationDelay * 2;
          }
          else {
            delay = numberOfDoneRow * delayForRow + animationDelay;
          }
        }

        const techIcons = client.technos.map(tech => techComponents[tech]);
        return (
          <StyledAnimated
            initiallyVisible={hasInit}
            animate={!hasInit}
            animation='bounceInLeft'
            delay={delay}
            key={client.id}
          >
            <Card
              onMouseOver={() => this.handleMouserEnter(client.id)}
              onMouseOut={() => this.handleMouserLeave(client.id)}
              onFocus={() => this.handleMouserEnter(client.id)}
              onBlur={() => this.handleMouserLeave(client.id)}
            >
              <ImageContainer>
                {client.image ? (
                  <img
                    height='100%'
                    width={client.width ? client.width : '100%'}
                    src={client.image}
                    alt='no images'
                  />
                ) : (
                  <Text>no images</Text>
                )}
              </ImageContainer>
              <DescriptionContainer
                className={descriptionClassNames[client.id]}
              >
                {client.name}
              </DescriptionContainer>
              <TechContainer className={techClassNames[client.id]}>
                {techIcons}
              </TechContainer>
            </Card>
          </StyledAnimated>
        );
      });

    return (
      <DesktopHiddingContainer>
        <Container>
          <TopMenu />
          <TitleContainer>
            <Title>
              <FormattedMessage {...ClientsIntl.PageTitle} />
            </Title>
          </TitleContainer>
          <CardsContainer>{cards}</CardsContainer>
          {this.renderRecommendation()}
        </Container>
      </DesktopHiddingContainer>
    );
  }

  renderRecommendation = () => (
    <RecommendationsContainer>
      <RecommandationTitleContainer>
        <Title>
          <FormattedMessage {...ClientsIntl.LastRecommendation} />
        </Title>
        <FontAwesomeIcon size='lg' color='#2196f3' icon='thumbs-up' />
      </RecommandationTitleContainer>
      <ContentContainer>
        <RecommendationText href='https://www.malt.fr/profile/jordanemichon'>
          &laquo;&nbsp;
          <FormattedMessage {...ClientsIntl.RecommendationContent} />
          &nbsp;&raquo;
        </RecommendationText>
        <Ref href='https://www.malt.fr/profile/jordanemichon'>
          Vincent Nguyen-Huu - Lead Front
        </Ref>
        <Company>Realytics</Company>
      </ContentContainer>
    </RecommendationsContainer>
  );

  handleMouserEnter = clientId => {
    this.setDynamicsClassNames(clientId, 'Enter');
  };

  handleMouserLeave = clientId => {
    this.setDynamicsClassNames(clientId, 'Leave');
  };

  handleCardTouch = clientId => {
    const { descriptionClassNames } = this.state;
    if (
      descriptionClassNames[clientId] &&
      descriptionClassNames[clientId] === 'DescriptionEnter'
    ) {
      this.setDynamicsClassNames(clientId, 'Leave');
    }
    else {
      this.setDynamicsClassNames(clientId, 'Enter');
    }
  };

  setDynamicsClassNames = (clientId, eventName) => {
    const { descriptionClassNames, techClassNames } = this.state;
    this.setState({
      descriptionClassNames: {
        ...descriptionClassNames,
        ...{ [clientId]: `Description${eventName}` },
      },
      techClassNames: {
        ...techClassNames,
        ...{ [clientId]: `Tech${eventName}` },
      },
    });
  };

  renderMobileTablet() {
    const { data } = this.props;
    const { descriptionClassNames, techClassNames } = this.state;

    const cards =
      data &&
      data.map(client => {
        const techIcons = client.technos.map(tech => techComponents[tech]);
        return (
          <CardContainer key={client.id}>
            <Card onClick={() => this.handleCardTouch(client.id)}>
              <ImageContainer>
                {client.image ? (
                  <img
                    height='100%'
                    width={client.width ? client.width : '100%'}
                    src={client.image}
                    alt='no images'
                  />
                ) : (
                  <Text>no images</Text>
                )}
              </ImageContainer>
              <DescriptionContainer
                className={descriptionClassNames[client.id]}
              >
                {client.name}
              </DescriptionContainer>
              <TechContainer className={techClassNames[client.id]}>
                {techIcons}
              </TechContainer>
            </Card>
          </CardContainer>
        );
      });

    return (
      <MobileHiddingContainer>
        <Container>
          <TopMenu />
          <CardsContainer>{cards}</CardsContainer>
          {this.renderRecommendation()}
        </Container>
      </MobileHiddingContainer>
    );
  }
}
