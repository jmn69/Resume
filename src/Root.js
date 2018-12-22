import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleNotch,
  faJedi,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import { connect } from 'react-redux';
import T from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';

import styledTheme from './themes/styledTheme';
import App from './App';
import translations from './i18n/locales';
import Fonts from './themes/Fonts';
import './css/Init';
import './css/External';

addLocaleData([...en, ...fr]);

library.add(faCircleNotch, faJedi, faAngleRight, faAngleLeft);

class Root extends Component {
  static propTypes = {
    locale: T.string.isRequired,
  };

  componentDidMount() {
    Fonts();
  }

  render() {
    const { locale } = this.props;

    const messages = translations[locale];

    return (
      <IntlProvider messages={messages} key={locale} locale={locale}>
        <ThemeProvider theme={styledTheme}>
          <App />
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.locale.locale,
});

export default hot(module)(connect(mapStateToProps)(Root));
