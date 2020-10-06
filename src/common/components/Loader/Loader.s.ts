import styled from 'styled-components';

export const LoaderContainer = styled.div<{ fullPage?: boolean }>`
  width: ${(props) => (props.fullPage ? '100vw' : 'auto')};
  height: ${(props) => (props.fullPage ? '100vh' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageWrapper = styled.span`
  margin-left: 1%;
`;
