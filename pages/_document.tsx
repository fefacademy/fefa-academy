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
