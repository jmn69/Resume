import React from 'react';
import T from 'prop-types';
import { withTheme } from 'styled-components';
import { Container, ProgressBarText, ProgressBarComp } from './ProgressBar.s';

class ProgressBar extends React.Component {
  static propTypes = {
    percentage: T.number,
    text: T.string,
  };

  static defaultProps = {
    percentage: 50,
    text: '',
  };

  render() {
    const { text, percentage } = this.props;

    return (
      <Container>
        <ProgressBarComp percentage={percentage}>
          <ProgressBarText>{text}</ProgressBarText>
        </ProgressBarComp>
      </Container>
    );
  }
}

export default withTheme(ProgressBar);
