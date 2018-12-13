import styled from 'styled-components';

export const Container = styled.ul`
  @media screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (max-device-width: 600px) {
    display: none;
  }

  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 70;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  letter-spacing: 1px;
  list-style: none;
  margin: 0;
  padding: 0;

  .active {
    & > a {
      &:after {
        content: '';
        height: 2px;
        background: #fff;
        display: block;
        position: absolute;
        bottom: 8px;
        left: 0;
        right: 0;
        display: block;
      }
    }
  }
`;

export const MenuItem = styled.li`
  display: inline-block;
  margin: 10px 25px;
  position: relative;
`;

export const MenuLink = styled.a`
  padding: 0 1.1em 1.1em 1.1em;
  text-decoration: none;
`;
