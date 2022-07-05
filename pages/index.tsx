import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { BiBookContent } from "react-icons/bi";
import { CgMail, CgTv } from "react-icons/cg";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import TitleCard from "../components/TitleCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fefa Academy</title>
        <meta name="description" content="Free education for All" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container className="max-w-7xl">
          {/* showcase */}
          <Showcase />

          {/* title cards */}
          <section className="p-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
            <TitleCard
              link="#"
              body="Checkout the latest entries in the Fefa Academy Blog."
              title="Read the latest blog"
              icon={BiBookContent}
            />
            <TitleCard
              link="#"
              body="Find courses and lessons on your favorite topics."
              title="Browse our courses"
              icon={CgTv}
            />
            <TitleCard
              link="#"
              body="Get notified when new courses are released."
              title="Subscribe to updates"
              icon={CgMail}
            />
          </section>
        </Container>

        {/* footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Home;
