import styled from 'styled-components';

export const AppContainer = styled.div`
  @media screen and (min-width: 700px) {
    font-size: calc(14px + 8 * ((100vw - 700px) / 2000));
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.2rem;
  }
`;
