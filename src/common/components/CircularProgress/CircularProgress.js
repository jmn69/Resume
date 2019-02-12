import React from 'react';
import T from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';
import { withTheme } from 'styled-components';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import CircularIntl from './CircularProgress.i';

const getPercentText = (percentage, intl) => {
  if (!percentage) {
    return '';
  }

  if (percentage < 30) {
    return intl.formatMessage(CircularIntl.Beginner);
  }
  else if (percentage >= 30 && percentage < 50) {
    return intl.formatMessage(CircularIntl.Average);
  }
  else if (percentage >= 50 && percentage < 80) {
    return intl.formatMessage(CircularIntl.Confirmed);
  }
  return intl.formatMessage(CircularIntl.Expert);
};

class CircularProgress extends React.Component {
  static propTypes = {
    percentage: T.number,
    theme: T.any,
    intl: T.any,
    delay: T.number,
    animate: T.bool,
  };

  static defaultProps = {
    percentage: 50,
    theme: null,
    intl: null,
    delay: 0,
    animate: true,
  };

  state = {
    percentText: getPercentText(this.props.percentage, this.props.intl),
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
export default compose(
  injectIntl,
  withTheme,
)(CircularProgress);
