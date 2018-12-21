import React, { Component } from 'react';
import T from 'prop-types';
import {
  BarChartLegend,
  LegendLeft,
  LegendRight,
  StyledText,
} from './ProgressBarLegend.s';

export default class ProgressBarLegend extends Component {
  static propTypes = {
    texts: T.arrayOf(T.string).isRequired,
  };
  render() {
    const { texts } = this.props;
    return (
      <BarChartLegend>
        <LegendLeft>
          <StyledText>{texts[0]}</StyledText>
        </LegendLeft>
        <LegendLeft>
          <StyledText>{texts[1]}</StyledText>
        </LegendLeft>
        <LegendRight>
          <StyledText>{texts[2]}</StyledText>
        </LegendRight>
        <LegendRight>
          <StyledText>{texts[3]}</StyledText>
        </LegendRight>
      </BarChartLegend>
    );
  }
}
