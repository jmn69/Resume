import React, { Component } from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTheme } from 'styled-components';

import { Container, MenuItem, MenuLink } from './TopMenuMobile.s';

const isActive = (actualPath, expectedPath) => actualPath === expectedPath;

class TopMenuMobileComponent extends Component {
  static propTypes = {
    theme: T.any,
    dispatch: T.func.isRequired,
    path: T.string.isRequired,
  };

  static defaultProps = {
    theme: null,
  };
  render() {
    const { dispatch, path, theme } = this.props;
    return (
      <Container>
        <MenuItem isActive={isActive(path, '/')}>
          <MenuLink onClick={() => dispatch({ type: 'HOME' })}>
            <FontAwesomeIcon
              size='1x'
              color={theme.colors.lightGray}
              icon='home'
            />
          </MenuLink>
        </MenuItem>
        <MenuItem isActive={isActive(path, '/skills')}>
          <MenuLink onClick={() => dispatch({ type: 'SKILLS' })}>
            <FontAwesomeIcon
              size='1x'
              color={theme.colors.lightGray}
              icon='code'
            />
          </MenuLink>
        </MenuItem>
        <MenuItem isActive={isActive(path, '/clients')}>
          <MenuLink onClick={() => dispatch({ type: 'CLIENTS' })}>
            <FontAwesomeIcon
              size='1x'
              color={theme.colors.lightGray}
              icon='users'
            />
          </MenuLink>
        </MenuItem>
        <MenuItem isActive={isActive(path, '/about')}>
          <MenuLink onClick={() => dispatch({ type: 'ABOUT' })}>
            <FontAwesomeIcon
              size='1x'
              color={theme.colors.lightGray}
              icon='info-circle'
            />
          </MenuLink>
        </MenuItem>
      </Container>
    );
  }
}

export default withTheme(TopMenuMobileComponent);
