import styled from 'styled-components';
import Text from '@/common/components/Text';

export const BarChartLegend = styled.div`
  margin-top: 20px;

  &:after {
    display: block;
    content: '';
    clear: both;
  }

  &:before {
    display: block;
    position: relative;
    content: '';
    width: 100%;
    height: 1px;
    margin-bottom: -10px;
    background: #00847f;
  }
`;
export const Legend = styled.div`
  display: inline-block;
  float: left;
  width: 25%;

  &:before {
    display: block;
    position: relative;
    content: '';
    width: 1px;
    height: 10px;
    margin: auto;
    margin-bottom: 5px;
    background: #00847f;
  }
`;
export const LegendLeft = styled(Legend)`
  text-align: left;
  &:before {
    margin-left: 0;
  }
`;
export const LegendRight = styled(Legend)`
  text-align: right;
  &:before {
    margin-right: 0;
  }
`;

export const StyledText = styled(Text)`
  color: ${(props) => props.theme.colors.white};
`;
