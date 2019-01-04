import styled, { css } from 'styled-components';
import T from 'prop-types';

const Container = styled.ul`
  display: ${props => (props.hideMenu ? 'none' : 'unset')};
  @media screen and (max-width: 700px) {
    display: none;
  }

  @media only screen and (max-device-width: 700px) {
    display: none;
  }

  @media only screen and (max-device-width: 991px) {
    top: 1%;
  }

  position: fixed;
  top: 4%;
  right: 20%;
  z-index: 70;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  letter-spacing: 1px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

Container.propTypes = {
  hideMenu: T.bool.isRequired,
};

export { Container };

export const MenuItem = styled.li`
  display: inline-block;
  margin: 4% 25px;
  position: relative;
  cursor: pointer;
`;

const activeCss = css`
  content: '';
  height: 2px;
  background: ${props => props.color};
  display: block;
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  display: block;
`;

const MenuLink = styled.span`
  padding: 0 1.1em 1.1em 1.1em;
  text-decoration: none;
  &:after {
    ${props => (props.isActive ? activeCss : '')}
  }
`;

MenuLink.propTypes = {
  color: T.string.isRequired,
  isActive: T.bool.isRequired,
};

export { MenuLink };
