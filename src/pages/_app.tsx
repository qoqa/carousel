import Head from 'next/head';

export default function MyApp({ Component, pageProps }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Material-UI Carousel</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
