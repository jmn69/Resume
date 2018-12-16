import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { ServerStyleSheet } from 'styled-components';

import configureStore from './configureStore';
import Root from '../src/Root';

export default ({ clientStats }) => async (req, res) => {
  const store = await configureStore(req, res);
  if (!store) return; // no store means redirect was already served

  const sheet = new ServerStyleSheet();
  const app = createApp(Root, store);
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
          <meta name="viewport" content="width=device-width">
          <title>${state.title}</title>
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700,900" rel="stylesheet">
          <link href="https://use.fontawesome.com/releases/v5.6.1/css/svg-with-js.css" rel="stylesheet"></link>
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

const createApp = (Root, store) => (
  <Provider store={store}>
    <Root />
  </Provider>
);
