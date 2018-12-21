import styled from 'styled-components';
import CardBase from 'Common/components/Card';
import Text from 'Common/components/Text';
import CircularProgress from 'Common/components/CircularProgress';

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 8%;

  @media screen and (max-width: 600px) {
    padding-top: 3%;
  }
`;

export const InnerCircularProgressContainer = styled.div`
  @media screen and (min-width: 1000px) {
    width: 90%;
    margin-bottom: 2%;
  }

  @media screen and (min-width: 1800px) {
    width: 80%;
    margin-bottom: 2%;
  }
  flex: 1;
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3%;
`;

export const InnerSkillsChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  width: 100%;
  background: ${props => props.theme.colors.primary};
`;

export const CircularProgressContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: -10px;
`;

export const SkillsChartsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -8%;
`;

export const ProgressBarContainer = styled.div`
  margin-bottom: 5px;
`;

export const Card = styled(CardBase)`
  box-shadow: 1px 2px 15px 0
    ${props =>
    props.selected ? 'rgba(56, 56, 56, 0.16)' : 'rgba(0, 198, 191, 0.16)'};
  max-width: 70%;
  padding: 5% 10%;
  cursor: pointer;
  min-width: 110px;

  @media screen and (min-width: 1280px) {
    min-width: unset;
  }

  @media screen and (min-width: 2150px) {
    min-width: unset;
  }
`;

export const TitleCard = styled.div`
  height: 10%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2%;
  margin-right: -2%;
`;

export const SkillCatCardContainer = styled.div`
  width: 100%;
  height: 100%;

  max-height: 210px;

  @media screen and (min-width: 1280px) {
    max-height: 280px;
  }

  @media screen and (min-width: 2150px) {
    max-height: 300px;
  }
`;

export const SkillCatCardInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Selector = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 15px 15px;
  border-color: transparent transparent ${props => props.theme.colors.accent}
    transparent;
  display: inline-block;
  position: absolute;
  bottom: -25px;

  @media screen and (min-width: 1000px) {
    border-width: 0 20px 20px 20px;
  }
`;

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
export const Clearfix = styled.div`
  &:after {
    display: block;
    content: '';
    clear: both;
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

export const TruncateText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0;
  font-size: calc(14px + 8 * ((100vw - 600px) / 2000));

  @media screen and (min-width: 1280px) {
    font-size: calc(16px + 8 * ((100vw - 600px) / 2000));
    letter-spacing: 0.5px;
  }

  @media screen and (min-width: 2150px) {
    font-size: calc(18px + 8 * ((100vw - 600px) / 2000));
    letter-spacing: 1px;
  }
`;

export const CircularProgressStyled = styled(CircularProgress)`
  min-width: 90px;
`;
