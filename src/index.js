/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import App from './App';
import configureStore from './configureStore';
import translations from './i18n/locales';

const history = createHistory();
const { store } = configureStore(history, window.REDUX_STATE);

addLocaleData([...en, ...fr]);

const render = App => {
  const root = document.getElementById('root');

  const locale = 'fr';
  const messages = translations[locale];

  ReactDOM.hydrate(
    <IntlProvider messages={messages} key={locale} locale={locale}>
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
    </IntlProvider>,
    root,
  );
};

render(App);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./App', () => {
    const App = require('./App').default;

    render(App);
  });
}
