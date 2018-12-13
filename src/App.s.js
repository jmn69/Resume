import styled from 'styled-components';

export const AppContainer = styled.div`
  @media screen and (min-width: 600px) {
    font-size: calc(14px + 8 * ((100vw - 600px) / 2000));
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.2rem;
  }
`;
