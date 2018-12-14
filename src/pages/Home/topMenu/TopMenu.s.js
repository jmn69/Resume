import styled from 'styled-components';
import T from 'prop-types';

const Container = styled.ul`
  @media screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (max-device-width: 600px) {
    display: none;
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

  .active {
    & > a {
      &:after {
        content: '';
        height: 2px;
        background: ${props => props.color};
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

Container.propTypes = {
  color: T.string.isRequired,
};

export { Container };

export const MenuItem = styled.li`
  display: inline-block;
  margin: 4% 25px;
  position: relative;
`;

export const MenuLink = styled.a`
  padding: 0 1.1em 1.1em 1.1em;
  text-decoration: none;
`;
