import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';
import { withTheme } from 'styled-components';

import Text from 'Common/components/Text';
import TopMenuIntl from './TopMenu.i';
import { Container, MenuItem, MenuLink } from './TopMenu.s';

const selectColorByPageIndex = (currentPageIndex, theme) => {
  const colorByPageIndex = {
    0: theme.colors.lightGray,
    1: theme.colors.accent,
    2: theme.colors.lightGray,
    3: theme.colors.accent,
  };

  return colorByPageIndex[currentPageIndex] || 'white';
};

class TopMenuComponent extends Component {
  static propTypes = {
    currentPageIndex: T.number.isRequired,
    theme: T.any,
  };

  static defaultProps = {
    theme: null,
  };
  render() {
    const textColor = selectColorByPageIndex(
      this.props.currentPageIndex,
      this.props.theme,
    );
    return (
      <Container color={textColor} id='topMenu'>
        <MenuItem data-menuanchor='Home'>
          <MenuLink href='#Home'>
            <Text color={textColor}>
              <FormattedMessage {...TopMenuIntl.Home} />
            </Text>
          </MenuLink>
        </MenuItem>
        <MenuItem data-menuanchor='Skills'>
          <MenuLink href='#Skills'>
            <Text color={textColor}>
              <FormattedMessage {...TopMenuIntl.Skills} />
            </Text>
          </MenuLink>
        </MenuItem>
        <MenuItem data-menuanchor='Clients'>
          <MenuLink href='#Clients'>
            <Text color={textColor}>
              <FormattedMessage {...TopMenuIntl.Clients} />
            </Text>
          </MenuLink>
        </MenuItem>
        <MenuItem data-menuanchor='About'>
          <MenuLink href='#About'>
            <Text color={textColor}>
              <FormattedMessage {...TopMenuIntl.About} />
            </Text>
          </MenuLink>
        </MenuItem>
      </Container>
    );
  }
}

export default withTheme(TopMenuComponent);
