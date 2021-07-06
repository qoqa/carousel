import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`}
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link
            rel="manifest"
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/manifest.json`}
          />
          <noscript>You need to enable JavaScript to run this app.</noscript>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
