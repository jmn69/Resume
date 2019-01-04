import React, { Component } from 'react';
import T from 'prop-types';

export default class Animated extends Component {
  static propTypes = {
    initiallyVisible: T.bool,
    delay: T.number,
    children: T.any.isRequired,
    animation: T.string.isRequired,
    animationDuration: T.string,
    animate: T.bool.isRequired,
    style: T.any,
  };

  static defaultProps = {
    initiallyVisible: false,
    delay: 0,
    style: {},
    animationDuration: '1s',
  };

  state = {
    ContentAnimationClasses: '',
    ContentAnimationStyle: { opacity: this.props.initiallyVisible ? 1 : 0 },
  };

  componentDidMount() {
    if (this.props.animate) {
      this.delayedAnimationTimeout = setTimeout(() => {
        this.setState({
          ContentAnimationClasses: `animated ${this.props.animation}`,
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
