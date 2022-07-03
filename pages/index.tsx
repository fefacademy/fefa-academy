import type { NextPage } from "next";
import Head from "next/head";
import Showcase from "../components/Showcase";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fefa Academy</title>
        <meta name="description" content="Free education for All" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Showcase />
      </main>
    </div>
  );
};

export default Home;
