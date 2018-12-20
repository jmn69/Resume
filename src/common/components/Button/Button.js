import React, { Component } from 'react';
import T from 'prop-types';
import {
  SvgContainer,
  ButtonText,
  DrawingRect,
  TextContainer,
} from './Button.s';

export default class Button extends Component {
  static propTypes = {
    text: T.string.isRequired,
    animate: T.bool,
    delay: T.number,
  };

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
          width='100%'
          height='100%'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
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
