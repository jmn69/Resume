/* eslint-disable */
import React, { Component, ReactElement } from 'react';

type Props = {
  initiallyVisible?: boolean;
  delay?: number;
  children: any;
  animation: string;
  animationDuration?: string;
  animate: boolean;
  style?: any;
  className?: any;
};

type State = {
  ContentAnimationClasses: any;
  ContentAnimationStyle: any;
};

export default class Animated extends Component<Props, State> {
  private delayedAnimationTimeout: any;

  static defaultProps = {
    initiallyVisible: false,
    delay: 0,
    style: {},
    animationDuration: '1s',
    className: '',
  };

  state = {
    ContentAnimationClasses: this.props.className,
    ContentAnimationStyle: { opacity: this.props.initiallyVisible ? 1 : 0 },
  };

  componentDidMount() {
    if (this.props.animate) {
      this.delayedAnimationTimeout = setTimeout(() => {
        this.setState({
          ContentAnimationClasses: `animated ${this.props.animation} ${this.props.className}`,
          ContentAnimationStyle: {
            animationDuration: this.props.animationDuration,
            opacity: 1,
          },
        });
      }, this.props.delay);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.delayedAnimationTimeout);
  }

  render() {
    const { ContentAnimationClasses, ContentAnimationStyle } = this.state;

    return (
      <div
        className={ContentAnimationClasses}
        style={{ ...ContentAnimationStyle, ...this.props.style }}
      >
        {this.props.children}
      </div>
    );
  }
}
