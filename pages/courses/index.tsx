import {
  Avatar,
  Button,
  Container,
  createStyles,
  Group,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import Head from "next/head";

import { Heart, JumpRope, Search, Stack3, Star } from "tabler-icons-react";
import CourseCard from "../../components/CourseCard";
import courses from "../../data/courses";

const useStyles = createStyles((theme) => ({
  showcase: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
  },
}));

const Index = () => {
  const iconSize = 20;
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const features = [
    {
      color: "teal",
      icon: <Stack3 size={iconSize} />,
      title: "In-depth lessons with multiple projects",
      body: "Each course goes into copious amounts of detail: we don't shy away from advanced topics. We take a problem-first approach and build real-world projects. No contrived use-cases.",
    },
    {
      color: "red",
      icon: <Heart size={iconSize} />,
      title: " All lessons made with ❤",
      body: "Every lesson is infused with a special ingredient: a deep passion with a hint of nerd-ology and an occassional side of bad humour.",
    },
    {
      color: "yellow",
      icon: <Star size={iconSize} />,
      title: "But most importantly...",
      body: "We are making a world a better place through revolutionary new methods of learning. And we're truly local, mobile, social. We're LO-MO-SO bro!",
    },
  ];

  const items = features.map((f, i) => (
    <div className="flex items-start space-x-4" key={i}>
      <Avatar color={f.color} radius={"md"} className="mt-1">
        {f.icon}
      </Avatar>
      <div>
        <Text className="text-xl font-medium">{f.title}</Text>
        <Text>{f.body}</Text>
      </div>
    </div>
  ));

  return (
    <div className="w-full">
      <Head>
        <title>Fefa Academy | Courses</title>
        <meta
          name="description"
          content="Fefa Academy courses | Level up your skills. Learn at your own pace from our masterclass courses"
        />
      </Head>
      {/* Course page showcase */}
      <section className={`${classes.showcase}`}>
        <Container className="max-w-7xl p-10 lg:px-16 flex flex-col lg:flex-row lg:pt-16 lg:items-center">
          <div className="w-full lg:w-1/2 space-y-7 ">
            <Text className="text-5xl font-semibold roboto">
              Level Up Your Skills 🚀{" "}
            </Text>
            <Text className={`text-xl`}>
              A collection of tutorials geared towards familiriazing you with
              the topics of your choosing. Our courses are masterclasses:
              designed to take you from a novice level or intermediate to
              expert.
            </Text>
            <Text className={`text-xl`}>
              Didn&apos;t find what you&apos;re looking for? Head over to the
              community section and tell us what new course you&apos;d like. We
              take regular polls to help us decide what new courses to create.
            </Text>
            <Group>
              <Button
                size="lg"
                variant="filled"
                className="bg-cyan-500"
                leftIcon={<JumpRope />}
              >
                Jump In
              </Button>
              <Button size="lg" variant="outline" leftIcon={<Search />}>
                Search
              </Button>
            </Group>
          </div>
          <div className="w-full mt-8 lg:mt-0 lg:w-1/2 space-y-6 grid grid-cols-1 lg:px-10">
            {items}
          </div>
        </Container>
      </section>

      {/* Course cards container */}
      <Container className="max-w-7xl">
        <main className=" p-10 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {courses.map((c) => (
            <CourseCard course={c} key={c.id} />
          ))}
        </main>
      </Container>
    </div>
  );
};

export default Index;
