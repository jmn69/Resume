import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage, injectIntl } from 'react-intl';
import T from 'prop-types';
import { compose } from 'redux';
import { withTheme } from 'styled-components';

import ToolbarBase from 'Common/components/Toolbar';
import Select from 'Common/components/Select/Select';
import Text from 'Common/components/Text';
import ToolbarIntl from './Toolbar.i';
import { MenuButtonWrapper } from './Toolbar.s';
import LocaleIntl from '../../locale/Locale.i';

const localeToSelectOption = intl => [
  { value: 'fr', label: intl.formatMessage(LocaleIntl.Fr) },
  { value: 'en', label: intl.formatMessage(LocaleIntl.En) },
];

class Toolbar extends Component {
  static propTypes = {
    onMenuClick: T.func.isRequired,
    locale: T.string.isRequired,
    changeLocale: T.func.isRequired,
    theme: T.any.isRequired,
    intl: T.any.isRequired,
  };

  render() {
    const {
      onMenuClick, locale, theme, intl,
    } = this.props;

    const options = localeToSelectOption(intl);
    return (
      <ToolbarBase>
        <MenuButtonWrapper>
          <FontAwesomeIcon size='2x' icon='bars' onClick={onMenuClick} />
        </MenuButtonWrapper>
        <div>
          <Select
            options={options}
            value={options.filter(({ value }) => value === locale)}
            onChange={this.handleLocaleChange}
          />
        </div>
      </ToolbarBase>
    );
  }

  handleLocaleChange = ({ value }) => {
    this.props.changeLocale(value);
  };
}

export default compose(injectIntl, withTheme)(Toolbar);
