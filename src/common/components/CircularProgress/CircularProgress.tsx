/* eslint-disable */

import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { withTheme } from 'styled-components';

const getPercentText = (percentage: number): string => {
  if (!percentage) {
    return '';
  }

  if (percentage < 30) {
    return 'Beginner';
  }
  if (percentage >= 30 && percentage < 50) {
    return 'Average';
  }
  if (percentage >= 50 && percentage < 80) {
    return 'Confirmed';
  }
  return 'Expert';
};

type Props = {
  percentage: number;
  theme: any;
  delay: number;
  animate: boolean;
};

type State = {
  percentText: any;
  percent: any;
};

class CircularProgress extends React.Component<Props, State> {
  private delayedAnimationCiPgTimeout: any;

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
            fontSize: 18,
          },
        }}
      />
    );
  }
}
export default withTheme(CircularProgress);
