import styled, { css } from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 701px) {
    display: none;
  }

  @media only screen and (min-device-width: 701px) {
    display: none;
  }

  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  list-style: none;
  background: #383838;
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
  position: relative;
  cursor: pointer;
  height: 100%;
  width: 100%;
  text-align: center;
  padding: 4% 0;
  border-bottom: ${(props) => (props.isActive ? '3px solid white' : 'none')};
`;

const activeCss = css`
  position: absolute;
  bottom: -16px;
  left: 0px;
  height: 4px;
  background: white;
  width: 100%;
`;

export const MenuLink = styled.a<{ isActive?: boolean }>`
  padding: 0 1.1em 1.1em 1.1em;
  text-decoration: none;
  &:after {
    ${(props) => (props.isActive ? activeCss : '')}
  }
`;
