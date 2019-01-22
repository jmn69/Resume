import React, { Component } from 'react';
import T from 'prop-types';
import Select from 'Common/components/Select';
import { injectIntl } from 'react-intl';

import LocaleIntl from '../../../locale/Locale.i';
import {
  Container,
  SideButton,
  SideButtonBorder,
  RelativeContainer,
  AbsoluteContainer,
  RelativeBorderContainer,
  SelectorContainer,
} from './LanguageSelector.s';

const localeToSelectOption = intl => [
  { value: 'fr', label: intl.formatMessage(LocaleIntl.Fr) },
  { value: 'en', label: intl.formatMessage(LocaleIntl.En) },
];

class LanguageSelectorComponent extends Component {
  static propTypes = {
    locale: T.string.isRequired,
    changeLocale: T.func.isRequired,
    intl: T.any,
  };

  static defaultProps = { intl: null };

  state = {
    animationClassName: '',
  };

  render() {
    const { intl, locale } = this.props;
    const options = localeToSelectOption(intl);
    return (
      <Container className={this.state.animationClassName}>
        <AbsoluteContainer>
          <RelativeBorderContainer>
            <SideButtonBorder />
          </RelativeBorderContainer>
          <RelativeContainer onClick={this.handleSelectorClick}>
            <SideButton>{locale}</SideButton>
          </RelativeContainer>
          <SelectorContainer>
            <Select
              options={options}
              value={options.filter(({ value }) => value === locale)}
              onChange={this.handleLocaleChange}
            />
          </SelectorContainer>
        </AbsoluteContainer>
      </Container>
    );
  }

  handleSelectorClick = () => {
    const { animationClassName } = this.state;
    if (animationClassName !== 'languageSlideIn') {
      this.setState({ animationClassName: 'languageSlideIn' });
    }
    else {
      this.setState({ animationClassName: 'languageSlideOut' });
    }
  };

  handleLocaleChange = ({ value }) => {
    this.props.changeLocale(value);
  };
}

export default injectIntl(LanguageSelectorComponent);
