import {
  Button,
  Card,
  CardSection,
  Center,
  Divider,
  Group,
  Text,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core";
import Image from "next/image";

import Faq from "components/Faq";
import Page from "components/Page";
import Timeline from "components/Timeline";
import { useFefaAssets } from "hooks/styles";
import {
  AcademyBenefits,
  HomepageCTAs,
  HomepageFAQData,
  WaysToSupport,
} from "lib/data";
import { useGlobalStyles } from "lib/shared";
import styles from "styles/Home.module.css";

import Author from "assets/author.jpg";
import HeartLogo from "assets/heart.png";
import HomePageHero from "components/sections/HomePageHero";
import Manifesto from "components/sections/Manifesto";
import { fetchContent } from "lib/strapi";
import Link from "next/link";

export default function Home({ data }: any) {
  const { classes } = useGlobalStyles();
  const { colorScheme } = useMantineColorScheme();
  const iconSize = 60;
  const dark = colorScheme === "dark";

  return (
    <Page>
      <main className="mx-auto w-full max-w-7xl p-5 space-y-10 ">
        {/* Hero Section */}
        <article className="md:px-5 lg:pt-8">
          <HomePageHero />
        </article>

        {/* Academy updates CTAs */}
        <section className="md:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HomepageCTAs.map((item, i) => {
            return (
              <Card
                key={i}
                shadow={"xs"}
                radius="lg"
                className={`${classes.borderCard}`}
              >
                <section className={`flex items-center space-x-5`}>
                  <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                  <Divider orientation="vertical" size={"sm"} />
                  <div className="space-y-2">
                    <span className="cursor-pointer text-lg roboto hover:underline text-blue-500 transition-all">
                      <Link href={item.link} passHref>
                        {item.title}
                      </Link>
                    </span>
                    <Text>{item.body}</Text>
                  </div>
                </section>
              </Card>
            );
          })}
        </section>

        {/* Why you'll love Fefa section */}
        <section className="">
          <Center>
            <h2 className="hidden md:flex items-center text-4xl mb-4">
              Why you&apos;ll{" "}
              <span className="mx-3">
                <Image src={HeartLogo} alt="love"></Image>
              </span>{" "}
              Fefa Academy
            </h2>
          </Center>
          <h2 className="md:hidden text-3xl md:text-4xl text-center">
            Why you&apos;ll ❤️ Fefa Academy
          </h2>
          <div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {AcademyBenefits.map((item, idx) => {
              return (
                <div className="space-y-3" key={idx}>
                  <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                  <span className="text-2xl font-semibold mt-2">
                    {item.title}
                  </span>
                  <p className="text-lg">{item.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* The Fefa Academy Manifesto */}
        <Manifesto data={data.manifesto} />

        {/* Ways you can support us */}
        <section>
          <h2 className="text-center text-2xl md:text-4xl mb-5 md:mb-8">
            Ways you can support us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WaysToSupport.map((item, i) => {
              return (
                <Card
                  key={i}
                  shadow={"xl"}
                  radius={"lg"}
                  className={`${classes.customCard}`}
                  p="xl"
                >
                  <CardSection>
                    <div className="center flex-col p-2 pt-3">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      ></div>
                      <h5 className="mt-1 text-2xl font-medium roboto text-center">
                        {item.title}{" "}
                      </h5>
                    </div>
                  </CardSection>
                  <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      {/* Timeline section */}
      <section className={`w-full py-4 mt-5 ${styles.dotted}`}>
        <Timeline />
      </section>

      {/* From the creator section */}
      <section className={`w-full mb-10 ${classes.showcase}`}>
        <div className="mx-auto max-w-7xl p-0 md:p-5 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8 lg:space-y-0">
          <div className="w-full lg:w-1/2 pt-5 lg:p-10 center flex-col">
            <Image
              alt="victor ndaba"
              src={Author}
              className="rounded-full mb-5"
              width={260}
              height={260}
            />
            <Button variant="outline" radius={"xl"} size="lg" mt={"md"}>
              Get in touch
            </Button>
          </div>
          <div className="w-full lg:w-1/2 p-5 lg:p-0 pt-0">
            <h5 className="text-3xl text-center md:text-left md:text-4xl font-medium roboto mb-5">
              From the Founder
            </h5>
            <Text size={"xl"}>
              Hi, 👋. I&apos;m Victor Ndaba, the founder of this small academy.
              Fefa is like my perfect child: the Ruby to my Matz, the GOT to my
              HBO. I created it because I don&apos;t believe that free and high
              quality have to be mutually exclusive. Among other things, I am
              primarily a self-taught software developer and I have had to take
              a lot of courses to get to where I am today. I noticed that
              there&apos;s always this pattern where most free courses only
              offer you so much and the really good ones are not free, and even
              then, they may not be enough. Which is why Fefa is here,{" "}
              <span className="font-medium">to break the wheel 😉.</span>
            </Text>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl p-5 space-y-10">
        {/* Join community section */}
        <section className="flex flex-col-reverse lg:flex-row justify-center items-center mb-5">
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
            <h2 className="text-4xl mb-5">Join the community...</h2>
            <p className="text-xl">
              As stated above, Fefa is more than just another online academy. We
              are a community, a family more like, that will help you learn
              together and grow together. The Fefa Academy community is spread
              out over various social platforms and even on the Academy website
              itself. For code-related projects and programming in general, find
              us on <span className="underline text-blue-400">github</span>.
              Looking for a more serious and career-based fefa community? The{" "}
              <span className="underline text-blue-400">linkedin</span> group
              will suit your needs. The{" "}
              <span className="underline text-blue-400">discord server</span> is
              probably the most active community. This is the place for you if
              you&apos;re looking for a study partner to complete a course
              together, support regarding a specific course or lesson, or just
              any information related to Fefa in general. You can also follow us
              on <span className="underline text-blue-400">twitter</span>. As
              for my fellow redditors, I will see you on the{" "}
              <span className="underline text-blue-400">subreddit</span>.
            </p>
          </div>
          <div className="h-full w-full relative lg:w-1/2 flex justify-center items-center">
            <Image
              src={useFefaAssets("images/socials", "png")}
              alt="fefa_communities"
              width={468}
              height={485}
            />
          </div>
        </section>

        {/* newsletter section */}
        <section className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-8">
          <div
            className={`${classes.customCard} p-5  md:p-8 rounded-md shadow-md`}
          >
            <h5 className="text-3xl roboto font-semibold mb-5">
              Before you go...
            </h5>
            <span className="text-2xl mb-2">Subscribe to our newsletter</span>
            <Text color={"dimmed"}>
              You will never miss important updates, latest news and community
              QA and sessions. Our newsletter is once a week, every Sunday
            </Text>
            <Group spacing={"md"} className="py-2" align="end">
              <TextInput
                className="w-full md:w-2/3"
                placeholder="barryallen@gmail.com"
                size="lg"
              />
              <Button size="lg" className="!bg-blue-500">
                Subscribe
              </Button>
            </Group>
          </div>
          <div
            className={`${classes.customCard} p-5 md:p-8 rounded-md shadow-md`}
          >
            <h5 className="text-3xl roboto font-semibold mb-5">
              You could also...
            </h5>
            <span className="text-2xl mb-2">Sign the guestbook</span>
            <Text color={"dimmed"} mb={"sm"}>
              Leave a message for future visitors. It can be anything from a
              review to an inside-joke to an awesome one-liner.{" "}
              <span className="font-bold">Go ahead, make my day!</span>
            </Text>
            <Button size="lg" variant="outline" radius={"xl"}>
              Guestbook
            </Button>
          </div>
        </section>

        {/* Faq section */}
        <h2 className="text-center text-3xl md:text-4xl font-medium">
          Frequently asked questions
        </h2>
        <Faq data={HomepageFAQData} />
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const manifesto = await fetchContent("manifesto");

  return {
    props: {
      data: {
        manifesto,
      },
    },
  };
}
