import Document, { Head, Html, Main, NextScript } from "next/document";

class FefaDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            as="font"
            href="/fonts/RobotoSlab-Regular.ttf"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            as="font"
            href="/fonts/Courgette-Regular.ttf"
            crossOrigin="anonymous"
          ></link>
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

export default FefaDocument;
