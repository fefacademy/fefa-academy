import { Avatar, Button, Container, Divider, Group, Text } from "@mantine/core";

import { Heart, Stack3, Star } from "tabler-icons-react";
import CourseCard from "../../components/CourseCard";
import courses from "../../data/courses";

const index = () => {
  const iconSize = 20;

  return (
    <div className="w-full">
      {/* Course page showcase */}
      <section className="h-full">
        <Container className="max-w-7xl lg:py-16 lg:px-24 p-8 flex flex-col lg:flex-row ">
          <div className="w-full lg:w-1/2 space-y-3">
            <Text className="text-5xl leading-[50px] font-bold mb-8 roboto">
              Level Up Your Skills 🚀{" "}
            </Text>
            <Text className="text-lg tracking-wide">
              A collection of in-depth video lessons geared towards
              familiriazing you with the topics of your choosing. All Our
              courses are masterclasses: designed to take you from novice or
              intermediate to expert.
            </Text>
            <Group>
              <Button size="md">Request course</Button>
              <Button size="md">Search</Button>
            </Group>
          </div>
          <div className="w-full lg:w-1/2 space-y-8 grid grid-cols-1 p-5 lg:px-10 roboto">
            <div className="flex items-start space-x-4">
              <Avatar color={"teal"} radius={"md"}>
                <Stack3 size={iconSize} />
              </Avatar>
              <Text className="text-lg font-medium">
                In-depth lessons with multiple projects. We don&apos;t shy away
                from advanced topics.
              </Text>
            </div>
            <div className="flex items-start space-x-4">
              <Avatar color={"red"} radius={"md"}>
                <Heart size={iconSize} />
              </Avatar>
              <Text className="text-lg font-medium">
                All lessons made with ❤ plus a hint of nerd-ology with an
                occassional side of bad humour.
              </Text>
            </div>
            <div className="flex items-start space-x-4">
              <Avatar color={"yellow"} radius={"md"}>
                <Star size={iconSize} />
              </Avatar>
              <Text className="text-lg font-medium">
                But most importantly, we are making a world a better place. And
                we&apos;re truly LO-MO-SO, bro.
              </Text>
            </div>
          </div>
        </Container>
      </section>
      <Divider />

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

export default index;
