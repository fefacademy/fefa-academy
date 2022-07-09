import { Button, Card, Container, Text } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  Coin,
  DeviceTv,
  Flame,
  Heartbeat,
  HeartHandshake,
  Notification,
} from "tabler-icons-react";
import Author from "../assets/author.jpg";
import Faq from "../components/Faq";
import Showcase from "../components/Showcase";
import SupportCard from "../components/SupportCard";
import TitleCard from "../components/TitleCard";
import { useStyles } from "../lib/shared";

const InlineLink: React.FC<{ href: string; text: string }> = (props) => {
  return (
    <Link href={props.href} passHref>
      <span className="text-blue-500 hover:underline cursor-pointer">
        {props.text}{" "}
      </span>
    </Link>
  );
};

const Home: NextPage = () => {
  const { classes } = useStyles();
  const iconSize = 60;

  const data = [
    [
      "Are you a content developer?",
      "Do you create online educational material? Learn how you can become a part of Fefa Academy and have your courses offered through our platform. You should be willing to do it for free and the course content should be of high quality.",
    ],
    ["", ""],
    ["", ""],
    [
      "Are you a blogger?",
      "Do you create online educational material? Learn how you can become a part of Fefa Academy and have your courses offered through our platform. You should be willing to do it for free and the course content should be of high quality.",
    ],
    [
      "Are you an expert in your field?",
      "Learn how you can become part of Fefa's peer reviewers.Do you create online educational material? Learn how you can become a part of Fefa Academy and have your courses offered through our platform. You should be willing to do it for free and the course content should be of high quality.",
    ],
  ];

  const support = data.map((d, i) => {
    const border = i % 2 === 0 && i !== 4 ? "border-r-4" : "";
    const radius =
      i % 2 == 0
        ? "rounded-tl-full rounded-bl-full"
        : "rounded-tr-full rounded-br-full";

    return (
      <div key={i} className={`h-full ${border} border-cyan-700 `}>
        {d[0] && (
          <Card
            className={`roboto text-2xl text-white bg-cyan-700 items-start rounded-none ${radius}`}
            p={"sm"}
            shadow="xl"
          >
            {d[0]}
          </Card>
        )}
        <p className="text-lg p-3">{d[1]}</p>
      </div>
    );
  });

  return (
    <div>
      <Head>
        <title>Fefa Academy</title>
        <meta name="description" content="Free education for All" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container className="max-w-7xl p-0">
          {/* showcase */}
          <Showcase />

          {/* title cards */}
          <section className="p-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16">
            <TitleCard
              link="#"
              body="Checkout the latest entries in the Fefa Academy Blog."
              title="Read the latest blog"
              icon={<Book size={60} />}
            />
            <TitleCard
              link="#"
              body="Find courses and lessons on your favorite topics."
              title="Browse our courses"
              icon={<DeviceTv size={60} />}
            />
            <TitleCard
              link="#"
              body="Get notified when new courses are released."
              title="Subscribe to updates"
              icon={<Notification size={60} />}
            />
          </section>
        </Container>

        {/* ways to support */}
        <section className="w-full my-10">
          <Container className="max-w-7xl center flex-col p-0 md:p-3">
            <Text className="text-4xl font-medium roboto text-center mb-5">
              Ways you can support us
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
              <SupportCard
                title="Financial support"
                icon={<Coin size={iconSize} className="text-green-400" />}
              >
                <Text>
                  Fefa is a non-profit platform. It&apos;s maintained by the
                  pockets of the owners and our awesome patreons. There are
                  multiple ways that you could help us financially. Consider{" "}
                  <InlineLink href="#" text="sponsoring us on github" /> or{" "}
                  <InlineLink href="#" text="patreon" /> or{" "}
                  <InlineLink href="#" text="buy me a coffee." /> You could also
                  make a direct <InlineLink href="#" text="donation." />
                </Text>
              </SupportCard>
              <SupportCard
                title="Spread the love"
                icon={<Heartbeat size={iconSize} className="text-orange-400" />}
              >
                <Text>
                  If you feel that the academy has helped you in any way, help
                  us grow by spreading the word, and the love. Share our links
                  on your socials and so on. You can tweet you testimonial at{" "}
                  <InlineLink href="#" text="@fefaacademy" /> and it will get
                  featured in the testimonials section.
                </Text>
              </SupportCard>
              <SupportCard
                title="Contribute"
                icon={
                  <HeartHandshake size={iconSize} className="text-cyan-400" />
                }
              >
                <Text>
                  Contributions can be made in various ways. Provide feedback to
                  us by taking the surveys and helping us improve. Have an idea,
                  or some constructive criticism ? Don&apos;t hesitate to let us
                  know, in our public{" "}
                  <InlineLink href="#" text="discord server." /> Find an issue
                  on the site? <InlineLink href="#" text="Fix it on github" />
                </Text>
              </SupportCard>
              <SupportCard
                title="Keep seeding"
                icon={<Flame size={iconSize} className="text-red-400" />}
              >
                <Text>
                  All courses can be downloaded directly, free of charge. To
                  avoid high server costs, the courses are distributed through
                  various means including peer to peer sharing. If you do happen
                  to download any course via torrenting, please do keep seeding.
                </Text>
              </SupportCard>
            </div>

            <div className="my-5 mt-20 grid grid-cols-1 md:grid-cols-2 lg:px-20">
              {support}
            </div>
          </Container>
        </section>

        {/* From the creator section */}
        <section className={`w-full my-10 ${classes.showcase}`}>
          <Container className="max-w-7xl p-0 md:p-5 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8 lg:space-y-0">
            <div className="w-full lg:w-1/2 pt-5 lg:p-10 center flex-col">
              <div className="w-1/2 mb-3">
                <Image
                  alt="victor ndaba"
                  src={Author}
                  className="rounded-full"
                />
              </div>
              <Button variant="outline" radius={"xl"} size="lg">
                Get in touch
              </Button>
            </div>
            <div className="w-full lg:w-1/2 p-5 lg:p-0 pt-0">
              <Text className="text-5xl font-medium roboto mb-5">
                From the Founder
              </Text>
              <Text className={`text-xl`}>
                Hi, 👋. I&apos;m Victor Ndaba, the founder of this small
                academy. Fefa is like my perfect child: the Ruby to my Matz, the
                GOT to my HBO. I created it because I don&apos;t believe that
                free and high quality have to be mutually exclusive. Among other
                things, I am primarily a self-taught software developer and I
                have had to take a lot of courses to get to where I am today. I
                noticed that there&apos;s always this pattern where most free
                courses only offer you so much and the really good ones are not
                free, and even then, they may not be enough. Which is why Fefa
                is here, to break the wheel 😉.
              </Text>
            </div>
          </Container>
        </section>

        <Container className="max-w-7xl p-0 my-10">
          <Text className="text-center text-4xl font-medium roboto">
            Frequently asked questions
          </Text>
          <Faq />
        </Container>
        {/* Technologies and subjects */}
        {/* Fefa roadmap */}

        {/* fefa hero image */}
        {/* signup/in */}
        {/* manifesto */}
        {/* newsletter */}

        {/* call for bloggers and content authors */}
      </main>
    </div>
  );
};

export default Home;
