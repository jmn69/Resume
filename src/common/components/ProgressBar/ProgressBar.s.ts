import styled from 'styled-components';

export const Container = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : 'auto')};
  @keyframes expandWidth {
    0% {
      width: 0;
      opacity: 0;
    }
  }
`;

export const ProgressBarText = styled.span`
  margin-left: 15px;
  line-height: 30px;
  font-size: 0.9em;
  color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 991px) {
    margin-left: 5px;
  }

  @media screen and (min-width: 1280px) {
    line-height: 40px;
  }

  @media screen and (min-width: 2000px) {
    line-height: 50px;
  }
`;

export const ProgressBarComp = styled.div<{ percentage: string }>`
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => props.theme.colors.darkGray};
  height: 30px;
  border-radius: 2px;
  animation: expandWidth 1.3s ease-in-out;
  animation-fill-mode: forwards;
  text-align: left;

  @media screen and (min-width: 1280px) {
    height: 40px;
  }

  @media screen and (min-width: 2000px) {
    height: 50px;
  }
`;
