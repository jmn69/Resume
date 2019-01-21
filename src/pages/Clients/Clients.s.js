import styled from 'styled-components';
import CardBase from 'Common/components/Card';
import Animated from 'Common/components/Animated';
import Text from 'Common/components/Text';

export const Container = styled.div`
  min-height: min-content;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  background: rgb(105, 234, 228); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(105, 234, 228, 1) 0%,
    rgba(100, 219, 213, 1) 25%,
    rgba(0, 198, 191, 1) 50%,
    rgba(0, 192, 198, 1) 75%,
    rgba(0, 186, 196, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(105, 234, 228, 1) 0%,
    rgba(100, 219, 213, 1) 25%,
    rgba(0, 198, 191, 1) 50%,
    rgba(0, 192, 198, 1) 75%,
    rgba(0, 186, 196, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(105, 234, 228, 1) 0%,
    rgba(100, 219, 213, 1) 25%,
    rgba(0, 198, 191, 1) 50%,
    rgba(0, 192, 198, 1) 75%,
    rgba(0, 186, 196, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#69eae4',
      endColorstr='#00bac4',
      GradientType=1
    );
`;

export const Card = styled(CardBase)`
  width: 100%;
  margin-bottom: 60px;
  box-shadow: 1px 2px 15px 0 rgba(56, 56, 56, 0.16);
  height: 280px;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 1280px) {
    height: 320px;
  }
`;

export const CardsContainer = styled.div`
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3%;

  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;

export const ImageContainer = styled.div`
  flex: 5;
  background: ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  font-size: 20px;
`;

export const StyledAnimated = styled(Animated)`
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 47%;
  }

  @media screen and (min-width: 992px) {
    width: 30%;
  }
`;

export const CardContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 47%;
  }

  @media screen and (min-width: 980px) {
    width: 30%;
  }
`;

export const MobileHiddingContainer = styled.div`
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const DesktopHiddingContainer = styled.div`
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const TechContainer = styled.div`
  background: ${props => props.theme.colors.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 46px;
  left: 0;
  bottom: -54px;
  width: 100%;
  padding: 4px;
  color: ${props => props.theme.colors.lightGray};
`;

export const TitleContainer = styled.div`
  width: 80%;
  margin-left: 40px;
`;

export const RecommandationTitleContainer = styled.div`
  width: 80%;
  margin-left: 40px;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 30px;
  display: inline-block;
  margin-right: 1%;
`;

export const RecommendationsContainer = styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 2%;
`;

export const RecommendationText = styled.a`
  font-size: ${props => props.theme.fontSizes.title};
  font-style: oblique;
  text-decoration: none;
  font-weight: 300;
  color: grey;
`;

export const Ref = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${props => props.theme.colors.darkGray};
`;

export const Source = styled(Text)`
  font-size: 16px;
`;

export const Company = styled(Text)`
  font-size: 16px;
`;

export const ContentContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
