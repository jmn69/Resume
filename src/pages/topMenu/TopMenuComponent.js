import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';
import { withTheme } from 'styled-components';

import Text from 'Common/components/Text';
import TopMenuIntl from './TopMenu.i';
import { Container, MenuItem, MenuLink } from './TopMenu.s';

const selectColorByPageIndex = (path, theme) => {
  const colorByPageIndex = {
    '/': theme.colors.lightGray,
    '/skills': theme.colors.primary,
    '/clients': theme.colors.lightGray,
    '/about': theme.colors.primary,
  };

  return colorByPageIndex[path] || 'white';
};

const isActive = (actualPath, expectedPath) => actualPath === expectedPath;

class TopMenuComponent extends Component {
  static propTypes = {
    theme: T.any,
    dispatch: T.func.isRequired,
    path: T.string.isRequired,
  };

  static defaultProps = {
    theme: null,
  };

  state = {
    lastScrollY: 0,
    hideMenu: false,
  };

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    const { dispatch, path } = this.props;
    const { hideMenu } = this.state;
    const textColor = selectColorByPageIndex(path, this.props.theme);
    return (
      <Container hideMenu={hideMenu}>
        <MenuItem onClick={() => dispatch({ type: 'HOME' })}>
          <MenuLink isActive={isActive(path, '/')} color={textColor}>
            <Text color={textColor}>
              <FormattedMessage {...TopMenuIntl.Home} />
            </Text>
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: 'SKILLS' })}>
          <MenuLink isActive={isActive(path, '/skills')} color={textColor}>
            <Text color={textColor}>
              <FormattedMessage {...TopMenuIntl.Skills} />
            </Text>
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: 'CLIENTS' })}>
          <MenuLink isActive={isActive(path, '/clients')} color={textColor}>
            <Text color={textColor}>
              <FormattedMessage {...TopMenuIntl.Clients} />
            </Text>
          </MenuLink>
        </MenuItem>
        <MenuItem onClick={() => dispatch({ type: 'ABOUT' })}>
          <MenuLink isActive={isActive(path, '/about')} color={textColor}>
            <Text color={textColor}>
              <FormattedMessage {...TopMenuIntl.About} />
            </Text>
          </MenuLink>
        </MenuItem>
      </Container>
    );
  }

  handleScroll = () => {
    if (typeof window !== 'undefined') {
      const { lastScrollY } = this.state;
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        this.setState({ hideMenu: true });
      }
      if (currentScrollY <= 40) {
        this.setState({ hideMenu: false });
      }
      this.setState({ lastScrollY: currentScrollY });
    }
  };
}

export default withTheme(TopMenuComponent);
