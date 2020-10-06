import styled from 'styled-components';
import Text from '@/common/components/Text';

export const Container = styled.div`
  min-height: min-content;
  background: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const FunFactContainer = styled.div`
  @media screen and (min-width: 600px) {
    min-width: 600px;
  }

  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InformationContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: min-content;

  @media screen and (min-width: 1100px) {
    flex-wrap: nowrap;
  }
`;
export const ContactMeContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
`;
export const AboutContainer = styled.div`
  @media screen and (min-width: 600px) {
    min-width: 600px;
  }

  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;
export const ContentContainer = styled.div`
  @media screen and (min-width: 980px) {
    min-height: calc(100% - 110px);
  }

  @media screen and (min-width: 1280px) {
    min-height: calc(100% - 150px);
  }

  display: flex;
  flex-wrap: wrap;
  min-height: calc(100% - 80px);
`;

export const LeftContainer = styled.div`
  @media screen and (min-width: 600px) {
    min-width: 300px;
  }

  flex: 1;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const RightContainer = styled.div`
  @media screen and (min-width: 600px) {
    min-width: 300px;
  }

  flex: 1;
  min-width: 150px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: min-content;

  @media screen and (min-width: 1100px) {
    margin-left: 0;
    min-height: 100%;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 90%;
  background: darkgray;
  margin: 10px 0;

  @media screen and (min-width: 1100px) {
    height: 90%;
    min-width: 1px;
    width: 1px;
    margin: 0 10px;
  }
`;

export const TextInformation = styled(Text)`
  font-size: ${(props) => props.theme.font.sizes.small}px;
  color: ${(props) => props.theme.colors.lightGray};
  display: inline-block;
  margin-left: 8px;
`;

export const TextContact = styled(Text)`
  max-width: 700px;
  font-size: 1rem;
  letter-spacing: 0.3px;
  line-height: 1.6;
  width: 90%;

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

export const TextFunFact = styled(Text)`
  text-align: center;
  max-width: 700px;
  font-size: 1rem;
  letter-spacing: 0.3px;
  line-height: 1.6;
  width: 90%;
  font-style: oblique;
  color: grey;

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
  margin-bottom: 20px;
`;

export const RowContainer = styled.div`
  padding: 10px 0;
  display: flex;
`;

export const IconWrapper = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
`;

export const DownloadIconContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DownloadTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RowLinksContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  margin-top: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  height: 100%;
`;

export const RightInnerContainer = styled.div`
  height: 100px;
`;

export const ButtonWrapper = styled.div`
  width: 35%;
  min-width: 250px;
`;

export const DescriptionContainer = styled.div`
  font-size: 1rem;
  letter-spacing: 0.3px;
  line-height: 1.6;
  margin-top: 40px;
  text-align: center;
`;

export const TitleContainer = styled.div`
  width: 80%;
  margin-left: 40px;

  @media screen and (max-width: 1099px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
    margin-top: 3%;
  }
`;

export const Title = styled(Text)`
  font-size: 30px;
  display: inline-block;
  margin-right: 1%;
`;

export const ButtonCircle = styled.div`
  width: 80px;
  height: 80px;
  background: radial-gradient(
    rgba(254, 0, 6, 0.8) 60%,
    rgba(255, 255, 255, 1) 62%
  );
  border-radius: 50%;
  position: relative;
  display: block;
  margin: 100px auto;
  box-shadow: 0px 0px 25px 3px rgba(254, 0, 6, 0.8);
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-40%) translateY(-50%);
    transform: translateX(-40%) translateY(-50%);
    transform-origin: center center;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 25px solid #fff;
    z-index: 100;
    -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &:before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation: pulsate1 2s;
    animation: pulsate1 2s;
    -webkit-animation-direction: forwards;
    animation-direction: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: steps;
    animation-timing-function: steps;
    opacity: 1;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.75);
    top: -30%;
    left: -30%;
    background: rgba(254, 0, 6, 0);
  }
`;
