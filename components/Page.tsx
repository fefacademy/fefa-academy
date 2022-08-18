import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface pageProps {
  nav?: boolean;
  footer?: boolean;
  customMeta?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
  };
  children?: React.ReactNode;
}

export default function Page(props: pageProps) {
  const router = useRouter();
  const { customMeta } = props;
  const nav = props.nav ?? true;
  const footer = props.footer ?? true;

  const meta = {
    title: "Fefa Academy | Free Education for All.",
    description: `An online academy with a focus on availing knowledge to everyone, for free. Free in every sense of the word.`,
    image: "https://fefaacademy.me/static/images/fefa-banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://fefaacademy.me${router.asPath}`}
        />
        <link rel="canonical" href={`https://fefaacademy.me${router.asPath}`} />
        <meta property="og:url" content="https://fefaacademy.me" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:site_name" content="Fefa Academy" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fefaacademy" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <title>{meta.title}</title>
      </Head>
      <div>
        {nav && <Navbar />}
        {props.children}
        {footer && <Footer />}
      </div>
    </>
  );
}
