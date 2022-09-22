import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class _Document extends Document {
  static getInitialProps = createGetInitialProps();

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            as="font"
            href="/fonts/RobotoSlab-Regular.woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/RobotoSlab-Bold.woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/Courgette-Regular.woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
