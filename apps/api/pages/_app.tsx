import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
import { Box } from '@material-ui/core';

function CustomApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Welcome to api!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to api!</h1>
        </header>
        <h1 style={{color: "red"}}>TEST STRING</h1>
        <Box
          css={{ color: "red" }}
          component='h1'>Test string 2</Box>
        {/*<main>*/}
        {/*  <Component {...pageProps} />*/}
        {/*</main>*/}
      </div>
    </>
  );
}

export default CustomApp;
