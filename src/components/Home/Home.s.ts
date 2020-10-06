import styled from 'styled-components';
import Text from '@/common/components/Text';

export const Container = styled.div`
  min-height: min-content;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

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

export const InnerContainer = styled.div`
  @media screen and (min-width: 1280px) {
    width: 1200px;
  }

  @media screen and (min-width: 700px) {
    width: 80%;
  }
  width: 90%;
  margin: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 700px) {
    align-items: center;
  }
`;

export const FullStackDevWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`;

export const FullStackWrapper = styled(Text)`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: 4.4rem;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-weight: 800;
  margin-right: 30px;

  @media screen and (max-width: 700px) {
    font-size: 3.3rem;
    letter-spacing: 0px;
    margin-right: 0px;
  }

  @media only screen and (max-device-width: 700px) {
    font-size: 3.3rem;
    letter-spacing: 0px;
  }
`;

export const DevWrapper = styled(Text)`
  color: ${(props) => props.theme.colors.lightGray2};
  font-size: 4.4rem;

  @media screen and (max-width: 700px) {
    font-size: 3.3rem;
  }

  @media only screen and (max-device-width: 700px) {
    font-size: 3.3rem;
  }
`;

export const IntroWrapper = styled(Text)`
  max-width: 700px;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  line-height: 1.6;

  @media screen and (max-height: 700px) {
    line-height: 1.4;
  }

  @media screen and (min-width: 700px) {
    line-height: 1.8;
  }

  @media screen and (min-width: 1280px) {
    line-height: 2.3;
    letter-spacing: 0.4px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 25%;
  min-width: 250px;
  @media screen and (min-width: 700px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 40px;
    width: 300px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
