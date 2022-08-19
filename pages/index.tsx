import {
  Blockquote,
  Button,
  Card,
  CardSection,
  Center,
  Container,
  Group,
  Text,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import Image from "next/image";
import Link from "next/link";

import Faq from "components/Faq";
import Page from "components/Page";
import Timeline from "components/Timeline";
import { useFefaAssets } from "hooks/styles";
import {
  AcademyBenefits,
  HomepageCTAs,
  HomepageFAQData,
  ManifestoData,
  WaysToSupport,
} from "lib/data";
import { useStyles } from "lib/shared";
import styles from "styles/Home.module.css";

import Author from "assets/author.jpg";
import SealImage from "assets/fefa_seal.png";
import HeartLogo from "assets/heart.png";
import HomePageHero from "components/sections/HomePageHero";

function GradientText(props: any) {
  const { from, to, text } = props;

  return (
    <Text component="span" variant="gradient" gradient={{ from, to }} inherit>
      {" "}
      {text}{" "}
    </Text>
  );
}

const InlineLink: React.FC<{ href: string; text: string }> = (props) => {
  return (
    <Link href={props.href} passHref>
      <span className="text-blue-500 hover:underline cursor-pointer">
        {props.text}{" "}
      </span>
    </Link>
  );
};

export default function Home() {
  const { classes } = useStyles();
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
                className={`flex items-center space-x-5 rounded-lg ${
                  !dark && "border-2"
                }`}
              >
                <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                <div className="h-full border-[1px] rounded-md"></div>
                <div className="space-y-2">
                  <Text
                    className="text-lg roboto hover:underline text-blue-500 transition-all"
                    component={NextLink}
                    href={item.link}
                  >
                    {item.title}
                  </Text>
                  <Text>{item.body}</Text>
                </div>
              </Card>
            );
          })}
        </section>

        {/* Why you'll love Fefa section */}
        <section className="">
          <Center>
            <Text className="font-semibold hidden md:flex items-center text-4xl roboto mb-3">
              Why you&apos;ll{" "}
              <span className="mx-3">
                <Image src={HeartLogo} alt="love"></Image>
              </span>{" "}
              Fefa Academy
            </Text>
          </Center>
          <h2 className="md:hidden text-3xl md:text-4xl text-center">
            Why you&apos;ll ❤️ Fefa Academy
          </h2>
          <div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {AcademyBenefits.map((item, idx) => {
              return (
                <div className="space-y-3" key={idx}>
                  <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                  <Text className="text-2xl font-semibold">{item.title}</Text>
                  <Text className="text-lg">{item.body}</Text>
                </div>
              );
            })}
          </div>
        </section>
        {/* The Fefa Academy Manifesto */}
        <section
          className={`relative h-full rounded-md overflow-hidden p-5 md:p-7 text-black cursive`}
        >
          <Image
            src={"/static/images/parchment.jpg"}
            alt="parchment"
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}
            className="!z-[0]"
          />
          <Text className="relative text-2xl md:text-4xl font-semibold text-center !z-[10]">
            The Fefa Academy Manifesto
          </Text>
          <div className="grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 p-3 md:p-8 md:px-14 relative !z-10">
            {ManifestoData.map((d, i) => {
              return (
                <div key={i} className="space-y-2">
                  <Text className="text-xl text-center md:text-2xl font-semibold">
                    {d.title}
                  </Text>
                  <Blockquote
                    color={"dark"}
                    className="text-black p-1"
                    p={"xs"}
                    cite={d.cite}
                    styles={{
                      cite: {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 16,
                      },
                    }}
                  >
                    {d.quote}
                  </Blockquote>
                  <Text className="text-lg md:text-xl">{d.body}</Text>
                </div>
              );
            })}
          </div>
          <div className="hidden relative md:flex justify-end md:absolute right-5 bottom-2">
            <Image alt="wax-seal" src={SealImage} width={81} height={87} />
          </div>
        </section>

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
                  className={`${classes.customCard} rounded-xl`}
                  p="xl"
                >
                  <CardSection className="center flex-col p-2 pt-3">
                    <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                    <Text className="mt-1 text-2xl font-medium roboto text-center">
                      {item.title}{" "}
                    </Text>
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
        <Container className="max-w-7xl p-0 md:p-5 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8 lg:space-y-0">
          <div className="w-full lg:w-1/2 pt-5 lg:p-10 center flex-col">
            <Image
              alt="victor ndaba"
              src={Author}
              className="rounded-full mb-5"
              width={260}
              height={260}
            />
            <Button variant="outline" radius={"xl"} size="lg" className="mt-5">
              Get in touch
            </Button>
          </div>
          <div className="w-full lg:w-1/2 p-5 lg:p-0 pt-0">
            <Text className="text-3xl text-center md:text-left md:text-5xl font-medium roboto mb-5">
              From the Founder
            </Text>
            <Text className={`text-xl`}>
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
        </Container>
      </section>

      <Container className="max-w-7xl p-5 space-y-10">
        {/* Join community section */}
        <section className="flex flex-col-reverse lg:flex-row justify-center items-center mb-5">
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
            <h2 className="text-4xl mb-5">Join the community...</h2>
            <Text className="text-xl">
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
            </Text>
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
            <Text className="text-3xl roboto font-semibold mb-5">
              Before you go...
            </Text>
            <Text className="text-2xl mb-2">Subscribe to our newsletter</Text>
            <Text color={"dimmed"}>
              You will never miss important updates, latest news and community
              QA and sessions. Our newsletter is once a week, every Sunday
            </Text>
            <Group spacing={"md"} className="py-2" align="end">
              <TextInput
                className="w-full md:w-2/3"
                placeholder="lorenzo.vonmatterhorn@himym.com"
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
            <Text className="text-3xl roboto font-semibold mb-5">
              You could also...
            </Text>
            <Text className="text-2xl mb-2">Sign the guestbook</Text>
            <Text color={"dimmed"} className="mb-2">
              Leave a message for future visitors. It can be anything from a
              review to an inside-joke to an awesome one-liner.{" "}
              <span className="font-bold">Go ahead, make my day!</span>
            </Text>
            <Button size="lg" variant="outline" className="rounded-full">
              Guestbook
            </Button>
          </div>
        </section>

        {/* Faq section */}
        <h2 className="text-center text-3xl md:text-4xl font-medium">
          Frequently asked questions
        </h2>
        <Faq data={HomepageFAQData} />
      </Container>
    </Page>
  );
}
