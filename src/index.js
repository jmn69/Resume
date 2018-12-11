/* eslint-disable global-require */

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import AppContainer from 'react-hot-loader/lib/AppContainer';
import { createGlobalStyle } from 'styled-components';
import Root from './Root';
import configureStore from './configureStore';

const history = createHistory();
const { store } = configureStore(history, window.REDUX_STATE);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto"
  }
`;

const render = Root => {
  const root = document.getElementById('root');

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <Fragment>
          <Root />
          <GlobalStyle />
        </Fragment>
      </Provider>
    </AppContainer>,
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
