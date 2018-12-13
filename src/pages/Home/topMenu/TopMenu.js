import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Text from 'Common/components/Text';
import TopMenuIntl from './TopMenu.i';
import { Container, MenuItem, MenuLink } from './TopMenu.s';

export default class TopMenu extends Component {
  render() {
    return (
      <Container id='topMenu'>
        <MenuItem data-menuanchor='Home'>
          <MenuLink href='#Home'>
            <Text color='white'>
              <FormattedMessage {...TopMenuIntl.Home} />
            </Text>
          </MenuLink>
        </MenuItem>
        <MenuItem data-menuanchor='Skills'>
          <MenuLink href='#Skills'>
            <Text color='white'>
              <FormattedMessage {...TopMenuIntl.Skills} />
            </Text>
          </MenuLink>
        </MenuItem>
        <MenuItem data-menuanchor='Clients'>
          <MenuLink href='#Clients'>
            <Text color='white'>
              <FormattedMessage {...TopMenuIntl.Clients} />
            </Text>
          </MenuLink>
        </MenuItem>
        <MenuItem data-menuanchor='About'>
          <MenuLink href='#About'>
            <Text color='white'>
              <FormattedMessage {...TopMenuIntl.About} />
            </Text>
          </MenuLink>
        </MenuItem>
      </Container>
    );
  }
}
