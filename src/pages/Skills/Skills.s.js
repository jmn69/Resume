import styled from 'styled-components';
import CardBase from 'Common/components/Card';

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  padding-top: 8%;

  @media screen and (max-width: 600px) {
    padding-top: 3%;
  }
`;

export const InnerContainer = styled.div`
  @media screen and (min-width: 1280px) {
    width: 1200px;
  }

  @media screen and (min-width: 600px) {
    width: 80%;
  }
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CircularProgressContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin: -10px;
`;

export const SkillsChartsContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(CardBase)`
  box-shadow: 1px 2px 15px 0
    ${props =>
    props.selected ? 'rgba(254, 0, 6, 0.16)' : 'rgba(0, 198, 191, 0.16)'};
  max-height: 50%;
  max-width: 10%;
  min-width: 230px;
  min-height: 230px;
  padding: 5%;
  cursor: pointer;
`;

export const TitleCard = styled.div`
  height: 10%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillCatCardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const SkillCatCardInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 100%;
  height: 100%;
`;

export const Selector = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 20px 20px;
  border-color: transparent transparent ${props => props.theme.colors.accent}
    transparent;
  display: inline-block;
  margin-top: 2%;
`;
