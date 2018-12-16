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
  };

  static defaultProps = {
    percentage: 50,
    theme: null,
  };

  state = {
    percentText: getPercentText(this.props.percentage),
    cpt: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 10);
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  render() {
    const { cpt, percentText } = this.state;
    const { theme } = this.props;

    return (
      <CircularProgressbar
        percentage={cpt}
        text={percentText}
        strokeWidth={5}
        styles={{
          path: {
            stroke: theme.colors.primary,
            strokeLinecap: 'butt',
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
  intervalId = null;

  tick = () => {
    const currentCpt = this.state.cpt;
    if (currentCpt >= this.props.percentage) {
      clearInterval(this.intervalId);
    }

    this.setState({
      cpt: currentCpt + 1,
    });
  };
}

export default withTheme(CircularProgress);
