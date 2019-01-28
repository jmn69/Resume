import styled from 'styled-components';
import Text from 'Common/components/Text';

export const Container = styled.div`
  min-height: min-content;
  background: ${props => props.theme.colors.white};
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
`;
export const InformationContainer = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.darkGray};
  color: ${props => props.theme.colors.lightGray};
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
  background: ${props => props.theme.colors.primary};
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
  font-size: ${props => props.theme.fontSizes.small}px;
  color: ${props => props.theme.colors.lightGray};
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
