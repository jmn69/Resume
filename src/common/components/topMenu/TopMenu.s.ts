import styled, { css } from 'styled-components';

export const Container = styled.ul<{ hideMenu?: boolean }>`
  display: ${(props) => (props.hideMenu ? 'none' : 'flex')};
  @media screen and (max-width: 700px) {
    display: none;
  }

  @media only screen and (max-device-width: 700px) {
    display: none;
  }

  @media screen and (min-width: 980px) {
    height: 110px;
  }

  @media screen and (min-width: 1280px) {
    height: 150px;
  }

  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 80%;
  z-index: 70;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  letter-spacing: 1px;
  list-style: none;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 0 25px;
`;

const activeCss = css`
  content: '';
  height: 2px;
  background: ${(props: any) => props.color};
  display: block;
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  display: block;
`;

export const MenuLink = styled.a<{ isActive?: boolean }>`
  padding: 0 1.1em 1.1em 1.1em;
  text-decoration: none;
  &:after {
    ${(props) => (props.isActive ? activeCss : '')}
  }
`;

export const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
`;
