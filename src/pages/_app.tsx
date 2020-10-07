import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Head from 'next/head';
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
import Firebase from '@/config/firebase';
import { useStore } from '../store';

import theme from '../theme';
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
    font-family: ${(props) => props.theme.font.family} ,Tahoma, sans-serif;
	}
`;

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    const signin = async () => {
      await Firebase.auth().signInWithEmailAndPassword(
        `${process.env.NEXT_PUBLIC_FIREBASE_LOGIN}`,
        `${process.env.NEXT_PUBLIC_FIREBASE_PASSWORD}`
      );
    };

    signin();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Head>
          <title>Jordane MICHON Portfolio</title>
        </Head>
        <AppLayout>
          <Switcher>
            <Component {...pageProps} />
          </Switcher>
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
}
