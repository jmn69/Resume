import React from 'react';
import {
  BarChartLegend,
  LegendLeft,
  LegendRight,
  StyledText,
} from './ProgressBarLegend.s';

type Props = {
  texts: string[];
};

const ProgressBarLegend = ({ texts }: Props) => {
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
};

export default ProgressBarLegend;
