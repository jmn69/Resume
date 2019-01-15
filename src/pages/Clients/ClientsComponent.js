import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import universal from 'react-universal-component';
import Text from 'Common/components/Text';
import TopMenu from '../topMenu/TopMenuContainer';

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
} from './Clients.s';

const HomeComponent = universal(() => import('../Home'));
const SkillsComponent = universal(() => import('../Skills'));
const AboutComponent = universal(() => import('../About'));

export default class Clients extends Component {
  static propTypes = {
    // theme: T.any,
    // intl: T.any,
    // Todo: define type
    data: T.any.isRequired,
    setPageInit: T.func.isRequired,
    hasInit: T.bool.isRequired,
  };

  // static defaultProps = {
  //   theme: null,
  //   intl: null,
  // };

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

    // Logic below is need to animate right to left card row by row
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
        return (
          <StyledAnimated
            initiallyVisible={hasInit}
            animate={!hasInit}
            animation='bounceInLeft'
            delay={delay}
            key={client.id}
          >
            <Card>
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
              <DescriptionContainer>{client.name}</DescriptionContainer>
            </Card>
          </StyledAnimated>
        );
      });

    return (
      <DesktopHiddingContainer>
        <Container>
          <TopMenu />
          <CardsContainer>{cards}</CardsContainer>
        </Container>
      </DesktopHiddingContainer>
    );
  }

  renderMobileTablet() {
    const { data } = this.props;

    const cards =
      data &&
      data.map(client => (
        <CardContainer key={client.id}>
          <Card>
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
            <DescriptionContainer>{client.name}</DescriptionContainer>
          </Card>
        </CardContainer>
      ));

    return (
      <MobileHiddingContainer>
        <Container>
          <TopMenu />
          <CardsContainer>{cards}</CardsContainer>
        </Container>
      </MobileHiddingContainer>
    );
  }
}
