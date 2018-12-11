import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';
import { NavLink } from 'redux-first-router-link';

import MenuBase from 'Common/components/Menu';
// import NavItem from 'Common/components/NavItem';
import MenuIntl from './Menu.i';

export default class Menu extends Component {
  static propTypes = {
    isOpen: T.bool.isRequired,
    onLinkClick: T.func.isRequired,
    onMenuStateChange: T.func.isRequired,
  };

  render() {
    const { onLinkClick, onMenuStateChange, isOpen } = this.props;

    return (
      <MenuBase
        onStateChange={onMenuStateChange}
        customBurgerIcon={false}
        isOpen={isOpen}
      >
        <NavLink onClick={onLinkClick} to='/' exact>
          <FormattedMessage {...MenuIntl.Home} />
        </NavLink>
        <NavLink onClick={onLinkClick} to={{ type: 'SKILLS' }}>
          <FormattedMessage {...MenuIntl.Skills} />
        </NavLink>
        <NavLink onClick={onLinkClick} to={{ type: 'EXPERIENCES' }}>
          <FormattedMessage {...MenuIntl.Experiences} />
        </NavLink>
        <NavLink onClick={onLinkClick} to={{ type: 'CONTACT' }}>
          <FormattedMessage {...MenuIntl.Contact} />
        </NavLink>
      </MenuBase>
    );
  }
}
