import styled from 'styled-components';
import CardBase from 'Common/components/Card';
import Text from 'Common/components/Text';
import CircularProgress from 'Common/components/CircularProgress';

export const DesktopContainer = styled.div`
  min-height: min-content;
  background: ${props => props.theme.colors.white};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-device-width: 991px) {
    display: none;
  }
`;

export const MobileHiddingContainer = styled.div`
  @media only screen and (min-device-width: 992px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
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

  @media screen and (max-width: 700px) {
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
  position: relative;
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
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 992px) {
    width: 60%;
  }
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

  @media screen and (max-width: 991px) {
    display: flex;
    justify-content: center;
  }

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

  @media screen and (max-width: 991px) {
    width: 80%;
  }
`;

export const TruncateText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0;
  font-size: calc(14px + 8 * ((100vw - 700px) / 2000));

  @media screen and (min-width: 1280px) {
    font-size: calc(16px + 8 * ((100vw - 700px) / 2000));
    letter-spacing: 0.5px;
  }

  @media screen and (min-width: 2150px) {
    font-size: calc(18px + 8 * ((100vw - 700px) / 2000));
    letter-spacing: 1px;
  }
`;

export const CircularProgressStyled = styled(CircularProgress)`
  min-width: 90px;
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

export const ArrowRightWrapper = styled.div`
  position: absolute;
  right: 0;
`;

export const ArrowLeftWrapper = styled.div`
  position: absolute;
  left: 0;
`;
