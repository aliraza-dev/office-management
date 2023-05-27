import { AppProps } from 'next/app'
import { Nav } from '../components/layout/index';
import Head from 'next/head';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@/styles/globals.css'
import Footer from '@/components/layout/footer/footer';

function App(props: AppProps) {
    const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App