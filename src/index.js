/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import AppContainer from 'react-hot-loader/lib/AppContainer';
// import { IntlProvider, addLocaleData } from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import fr from 'react-intl/locale-data/fr';
// import Cookies from 'js-cookie';
import Root from './Root';
import configureStore from './configureStore';
// import translations from './i18n/locales';

const history = createHistory();
const { store } = configureStore(history, window.REDUX_STATE);

// addLocaleData([...en, ...fr]);

const render = Root => {
  const root = document.getElementById('root');

  // const locale = Cookies.get('language_pref') || 'en';
  // const messages = translations[locale];

  ReactDOM.hydrate(
    // <IntlProvider messages={messages} key={locale} locale={locale}>
    <AppContainer>
      <Provider store={store}>
        <Root />
      </Provider>
    </AppContainer>,
    // </IntlProvider>,
    root,
  );
};

render(Root);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./Root', () => {
    const Root = require('./Root').default;

    render(Root);
  });
}
