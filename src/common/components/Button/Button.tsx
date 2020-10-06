/* eslint-disable */
import React, { Component } from 'react';
import {
  SvgContainer,
  ButtonText,
  DrawingRect,
  TextContainer,
} from './Button.s';

type Props = {
  text: string;
  animate?: boolean;
  delay?: number;
};

type State = {
  internalAnimate: any;
  show: any;
};

export default class Button extends Component<Props, State> {
  private delayedButtonAnimationTimeout: any;
  private delayedAnimationTimeout: any;
  static defaultProps = {
    animate: true,
    delay: 0,
  };

  state = {
    internalAnimate: this.props.animate,
    show: false,
  };

  componentDidMount() {
    this.delayedButtonAnimationTimeout = setTimeout(() => {
      this.setState({
        show: true,
      });
    }, this.props.delay);
  }

  componentWillUnmount() {
    clearTimeout(this.delayedAnimationTimeout);
  }

  render() {
    const { text } = this.props;
    const { internalAnimate, show } = this.state;

    return show ? (
      <SvgContainer>
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <DrawingRect animate={internalAnimate} />
        </svg>
        <TextContainer>
          <ButtonText animate={internalAnimate}>{text}</ButtonText>
        </TextContainer>
      </SvgContainer>
    ) : null;
  }
}
