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

render();

if (module.hot) {
  module.hot.accept('./Root', render);
}
