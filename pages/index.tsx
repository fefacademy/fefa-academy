import {
  Blockquote,
  Button,
  Center,
  Container,
  Group,
  Text,
  TextInput,
  useMantineColorScheme,
} from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  Calendar,
  CashOff,
  Certificate,
  CloudDownload,
  Coin,
  DeviceTv,
  Flame,
  Friends,
  Heartbeat,
  HeartHandshake,
  MoodCrazyHappy,
  Notification,
  StairsUp,
  Stars,
  Urgent,
} from "tabler-icons-react";
import Author from "../assets/author.jpg";
import SealImage from "../assets/fefa_seal.png";
import Faq from "../components/Faq";
import HeroContainer from "../components/HeroContainer";
import SupportCard from "../components/SupportCard";
import Timeline from "../components/Timeline";
import TitleCard from "../components/TitleCard";
import { HomepageFAQData, ManifestoData } from "../lib/data";
import { useStyles } from "../lib/shared";
import styles from "../styles/Home.module.css";

import HeartLogo from "../assets/heart.png";

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
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div>
      <Head>
        <title>Fefa Academy | Free education for all</title>
        <meta name="description" content="Free education for All" />
      </Head>

      <main>
        <Container className="max-w-7xl p-0">
          {/* showcase */}
          <HeroContainer />

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

        {/* TODO: Technologies and subjects */}
        {/* TODO: Learn at your own pace */}
        {/* TODO: Features and what we offer */}
        {/* TODO: Become a part of the fefa community */}

        <Container className="max-w-7xl p-0">
          <Center>
            <Text className="flex items-center text-4xl roboto mb-3">
              Why you&apos;ll{" "}
              <span className="mx-3 hidden md:inline">
                <Image src={HeartLogo} alt="love"></Image>
              </span>{" "}
              Fefa Academy
            </Text>
          </Center>
          <section className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 mb-5">
            <div className="space-y-3">
              <Calendar size={50} color={"teal"} />
              <Text className="text-2xl font-semibold">
                Flexible learning schedule
              </Text>
              <Text className="text-lg">
                Only you control when and how you learn. Since the courses are
                saved for offline use, you can go throught them whenever you
                prefer, in whatever order you prefer.
              </Text>
            </div>
            <div className="space-y-3">
              <Friends size={50} color={"teal"} />
              <Text className="text-2xl font-semibold">
                Active community support
              </Text>
              <Text className="text-lg">
                Fefa contains a rich and active community on many platforms.
                Perhaps too many. Whether you&apos; stuck or looking for advice,
                we&apos;ve got you covered!
              </Text>
            </div>
            <div className="space-y-3">
              <Certificate size={50} color={"teal"} />
              <Text className="text-2xl font-semibold">
                Certificate on completion
              </Text>
              <Text className="text-lg">
                Upon course completion, you can request a certificate and
                depending on the course, you will be required to complete
                certain tasks/quizes after which you&apos;re presented with the
                course certificate.
              </Text>
            </div>
            <div className="space-y-3">
              <CloudDownload size={50} color={"teal"} />
              <Text className="text-2xl font-semibold">
                Downloadable courses
              </Text>
              <Text className="text-lg">
                Download any course, any time to watch them later without an
                internet connection. Alternatively, you could save a course to
                your cloud storage service of choice.
              </Text>
            </div>
            <div className="space-y-3">
              <Stars size={50} color={"teal"} />
              <Text className="text-2xl font-semibold">
                Project-based learning
              </Text>
              <Text className="text-lg">
                Think project-based learning on steroids. We create multiple
                real world projects with practical applications to solidify the
                concepts taught to you in a course/lesson.
              </Text>
            </div>
            <div className="space-y-3">
              <MoodCrazyHappy size={50} color={"teal"} />
              <Text className="text-2xl font-semibold">Nerdy humour</Text>
              <Text className="text-lg">
                I can&apos;t help myself. I am a nerd and I make nerdy jokes.
                Even this website is rigged with multiple easter eggs: nerdy
                references and popular one-liners. Brace yourself.
              </Text>
            </div>
            <div className="space-y-3">
              <StairsUp size={50} color={"teal"} />
              <Text className="text-2xl font-semibold">
                Learn from the ground-up
              </Text>
              <Text className="text-lg">
                Our courses are masterclasses. They assume a novice status and
                are designed in such a way to take you from whatever level you
                are in, to an expert in your field.
              </Text>
            </div>
            <div className="space-y-3">
              <Urgent size={50} color={"teal"} />
              <Text className="text-2xl font-semibold">
                Problem-centered approach
              </Text>
              <Text className="text-lg">
                We don&apos; stack your mind with concepts then find highly
                contrived use-cases. We take a problem first approach and
                present new concepts in due time. We cross that bridge when we
                get there.
              </Text>
            </div>
            <div className="space-y-3">
              <CashOff size={50} color={"teal"} />
              <Text className="text-2xl font-semibold">
                It&apos;s totally free
              </Text>
              <Text className="text-lg">
                And if that&apos;s not enough, remember that it&apos;s all
                absolutely free. It quite literally doesn&apos;t get more
                exciting than that. If not, there&apos;s the door. Well, not
                really, but you get the point.
              </Text>
            </div>
            {/* learn offline */}
            {/* flexible schedule */}
            {/* support from active community */}
            {/* learn by doing */}
            {/* projject based learning */}
            {/* real world projects */}
            {/* get certificate on done */}
            {/* nerdy jokes, comedy */}
            {/* full circle learning */}
            {/* problem first approach */}
          </section>
        </Container>

        {/* Manifesto */}
        <section className="p-3 px-5">
          <Container
            className={`max-w-[78rem] relative h-full ${styles.scroll} rounded-md p-5 md:p-7 text-black cursive`}
          >
            <Text className="text-2xl md:text-4xl font-semibold text-center mb-3">
              The Fefa Academy Manifesto
            </Text>
            <div className="grid gap-5 md:gap-8 grid-cols-1 md:grid-cols-2 p-3 md:p-8 md:px-14">
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
            <div className="relative flex justify-end md:absolute right-5 bottom-2">
              <Image alt="wax-seal" src={SealImage} />
            </div>
          </Container>
        </section>

        {/* ways to support */}
        <section className="w-full mb-5">
          <Container className="max-w-7xl center flex-col p-0 md:p-3">
            <Text className="text-4xl font-medium roboto text-center mb-5">
              Ways you can support us
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
              <SupportCard
                title="Donate"
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
                  <InlineLink href="#" text="discord server." /> See an issue on
                  the site? <InlineLink href="#" text="Fix it on github" />
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
          </Container>
        </section>

        {/* Timeline section */}
        <section className={`py-5 ${styles.dotted}`}>
          <Timeline />
        </section>

        {/* From the creator section */}
        <section className={`w-full mb-10 ${classes.showcase}`}>
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
                is here,{" "}
                <span className="font-medium">to break the wheel 😉.</span>
              </Text>
            </div>
          </Container>
        </section>

        <Container className="max-w-7xl p-0 my-10">
          {/* Join community section */}
          <section className="flex flex-col-reverse p-3 lg:flex-row justify-center items-center mb-5">
            <div className="w-full p-3 lg:w-1/2">
              <Text className="text-4xl roboto mb-5">
                Join the community...
              </Text>
              <Text className="text-xl">
                As stated above, Fefa is more than just another online academy.
                We are a community, a family more like, that will help you learn
                together and grow together. The Fefa Academy community is spread
                out over various social platforms and even on the Academy
                website itself. For code-related projects and programming in
                general, find us on{" "}
                <span className="underline text-blue-400">github</span>. Looking
                for a more serious and career-based fefa community? The{" "}
                <span className="underline text-blue-400">linkedin</span> group
                will suit your needs. The{" "}
                <span className="underline text-blue-400">discord server</span>{" "}
                is probably the most active community. This is the place for you
                if you&apos;re looking for a study partner to complete a course
                together, support regarding a specific course or lesson, or just
                any information related to Fefa in general. You can also follow
                us on <span className="underline text-blue-400">twitter</span>.
                As for my fellow redditors, I will see you on the{" "}
                <span className="underline text-blue-400">subreddit</span>.
              </Text>
            </div>
            <div className="w-full p-3 lg:w-1/2 flex justify-center items-center">
              {/* <Image src={SocialsImage} alt="fefa_communities" /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${
                  dark
                    ? "/static/images/socials_light.svg"
                    : "/static/images/socials_dark.svg"
                }`}
                alt="fefa_communities"
                className="w-2/3"
              />
            </div>
          </section>

          {/* newsletter section */}
          <section className="p-3 grid gap-8 grid-cols-1 md:grid-cols-2 mb-8">
            <div className={`${classes.customCard} p-8 rounded-md`}>
              <Text
                className="text-3xl roboto font-semibold mb-5"
                variant="gradient"
                gradient={{ from: "teal", to: "blue" }}
              >
                Wait, Before you go...
              </Text>
              <Text className="text-2xl mb-2">Subscribe to our newsletter</Text>
              <Text color={"dimmed"}>
                You will never miss important updates, latest news and community
                QA and sessions. Our newsletter is once a week, every Sunday
              </Text>
              <Group spacing={"md"} className="py-2" align="end">
                <TextInput
                  className="w-2/3"
                  placeholder="lorenzo.vonmatterhorn@himym.com"
                  size="lg"
                />
                <Button size="lg" className="!bg-blue-500">
                  Subscribe
                </Button>
              </Group>
            </div>
            <div className={`${classes.customCard} p-8 rounded-md`}>
              <Text
                variant="gradient"
                className="text-3xl roboto font-semibold mb-5"
                gradient={{ from: "teal", to: "green" }}
              >
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
          <Text className="text-center text-4xl font-medium roboto">
            Frequently asked questions
          </Text>
          <Faq data={HomepageFAQData} />
        </Container>
        {/* Technologies and subjects */}
        {/* Fefa roadmap */}
        {/* Become part of the fefa :: community platforms section */}
        {/* benefits of joining */}
        {/* what we offer */}
        {/* learn at your own pace */}
        {/* project based learning on steroids */}

        {/* fefa hero image */}
        {/* signup/in */}
      </main>
    </div>
  );
};

export default Home;
