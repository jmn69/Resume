import styled from 'styled-components';

export const Container = styled.div`
  min-height: min-content;
  background: ${props => props.theme.colors.white};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const FunFactContainer = styled.div`
  flex: 1;
  min-width: 500px;
`;
export const InformationContainer = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.darkGray};
`;
export const ContactMeContainer = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.primary};
`;
export const AboutContainer = styled.div`
  flex: 1;
  min-width: 600px;
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
