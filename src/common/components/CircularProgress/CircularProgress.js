import React from 'react';
import T from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';
import { withTheme } from 'styled-components';

const getPercentText = percentage => {
  if (!percentage) {
    return '';
  }

  if (percentage < 30) {
    return 'Débutant';
  }
  else if (percentage >= 30 && percentage < 50) {
    return 'Moyen';
  }
  else if (percentage >= 50 && percentage < 80) {
    return 'Confirmé';
  }
  else if (percentage >= 80 && percentage <= 100) {
    return 'Expert';
  }
  return 'Trop de power';
};

class CircularProgress extends React.Component {
  static propTypes = {
    percentage: T.number,
    theme: T.any,
    delay: T.number,
    animate: T.bool,
  };

  static defaultProps = {
    percentage: 50,
    theme: null,
    delay: 0,
    animate: true,
  };

  state = {
    percentText: getPercentText(this.props.percentage),
    percent: this.props.animate ? 0 : this.props.percentage,
  };

  componentDidMount() {
    if (this.props.animate) {
      this.delayedAnimationCiPgTimeout = setTimeout(() => {
        this.setState({ percent: this.props.percentage });
      }, this.props.delay);
    }
  }

  componentWillUnmount() {
    this.delayedAnimationCiPgTimeout &&
      clearTimeout(this.delayedAnimationCiPgTimeout);
  }

  render() {
    const { percent, percentText } = this.state;
    const { theme } = this.props;

    return (
      <CircularProgressbar
        percentage={percent}
        text={percentText}
        strokeWidth={5}
        styles={{
          path: {
            stroke: theme.colors.primary,
            strokeLinecap: 'round',
            transition: 'stroke-dashoffset 0.5s ease 0s',
          },
          trail: {
            stroke: '#d6d6d6',
          },
          text: {
            fill: theme.colors.primary,
            fontSize: theme.fontSizes.large,
          },
        }}
      />
    );
  }
}

export default withTheme(CircularProgress);
