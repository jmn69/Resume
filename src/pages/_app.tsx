import { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleNotch,
  faAngleRight,
  faAngleLeft,
  faHome,
  faCode,
  faUsers,
  faInfoCircle,
  faThumbsUp,
  faMapMarker,
  faEuroSign,
  faGlobeEurope,
  faHourglassHalf,
  faCheck,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

import AppLayout from '@/common/components/AppLayout';
import Switcher from '@/common/components/Switcher';
import { useStore } from '../store';

import theme from '../theme';
import '@/css/Init.css';
import '@/css/External.css';

library.add(
  faCircleNotch,
  faAngleRight,
  faAngleLeft,
  faHome,
  faCode,
  faUsers,
  faInfoCircle,
  faThumbsUp,
  faMapMarker,
  faEuroSign,
  faGlobeEurope,
  faHourglassHalf,
  faCheck,
  faDownload
);

const GlobalStyle = createGlobalStyle`
	html,
	body{
		margin: 0;
		padding: 0;
    font-family: ${(props) => props.theme.font.family};
	}
`;

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <AppLayout>
          <Switcher>
            <Component {...pageProps} />
          </Switcher>
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
}
