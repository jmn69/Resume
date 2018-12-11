import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { ServerStyleSheet } from 'styled-components';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import translations from '../src/i18n/locales';
import configureStore from './configureStore';
import App from '../src/App';

addLocaleData([...en, ...fr]);

export default ({ clientStats }) => async (req, res) => {
  const store = await configureStore(req, res);
  if (!store) return; // no store means redirect was already served

  const sheet = new ServerStyleSheet();
  const locale = req.cookies.language_pref || 'en';
  const messages = translations[locale];
  const app = createApp(App, store, locale, messages);
  const appString = ReactDOM.renderToString(sheet.collectStyles(app));
  const styleTags = sheet.getStyleTags();
  const state = store.getState();
  const stateJson = JSON.stringify(state);
  const chunkNames = flushChunkNames();
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

  console.log('REQUESTED PATH:', req.path); // eslint-disable-line no-console
  console.log('CHUNK NAMES RENDERED', chunkNames); // eslint-disable-line no-console

  return res.send(`<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${state.title}</title>
          ${styles}
          ${styleTags}
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <div id="root">${appString}</div>
          ${cssHash}
          <script type='text/javascript' src='/static/vendor.js'></script>
          ${js}
        </body>
      </html>`);
};

const createApp = (App, store, locale, messages) => (
  <IntlProvider messages={messages} key={locale} locale={locale}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>
);
