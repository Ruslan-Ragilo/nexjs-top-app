/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-title-in-document-head */
import type { AppProps } from 'next/app';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>App NextJS</title>
        <link rel='icon' href='/favicon.svg' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
