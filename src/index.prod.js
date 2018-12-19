/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Root from './Root';
import configureStore from './configureStore';

const history = createHistory();
const { store } = configureStore(history, window.REDUX_STATE);
const root = document.getElementById('root');
const render = () => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Root />
    </Provider>,
    root,
  );
};

if (
  'fetch' in window &&
  'Intl' in window &&
  'URL' in window &&
  'Map' in window &&
  'forEach' in NodeList.prototype && // eslint-disable-line no-undef
  'startsWith' in String.prototype &&
  'endsWith' in String.prototype &&
  'includes' in String.prototype &&
  'includes' in Array.prototype &&
  'assign' in Object &&
  'entries' in Object &&
  'keys' in Object
) {
  render();
}
import('./polyfills').then(render());
