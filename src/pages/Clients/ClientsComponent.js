import React, { Component } from 'react';
import T from 'prop-types';
import universal from 'react-universal-component';
import Animated from 'Common/components/Animated';

import {
  Container,
  ClientCardContainer,
  ClientCardInnerContainer,
  CardsContainer,
  Card,
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
      setPageInit('Home');
    }
  }

  render() {
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
          <Animated
            initiallyVisible={hasInit}
            animate={!hasInit}
            animation='bounceInLeft'
            delay={delay}
            style={{ width: '30%' }}
          >
            <Card>{client.name}</Card>
          </Animated>
        );
      });

    return (
      <Container>
        <CardsContainer>{cards}</CardsContainer>
      </Container>
    );
  }
}
