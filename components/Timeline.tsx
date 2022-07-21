import { Button, Card, Container, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import styles from "../styles/Timeline.module.css";

function Timeline() {
  const bulletSize = 30;

  const data = [
    {
      title: "Are you a blogger?",
      body: "Fefa isn't just an academy, it's a community. If you create blogs on any subjects related to the academy, you can request blogger level access and if granted, you will be able to create and post your content directly via the website.",
      button: "Get Started",
      link: "/join?ref=blogger",
    },
    {
      title: "Do you create educational content?",
      body: "We are constantly looking to expand our staff. If you create high quality educational content at any capacity, and are willing to do it for free, then you are eligible to join the fefa staff and help us in our mission to help others learn for free.",
      button: "Join now",
      link: "/join?ref=staff",
    },
    {
      title: "Are you an expert in your field?",
      body: "We offer certifications on course completion. However, the students must first pass quizes in form of problem statements to which you provide solutions which are then reviewed by experts in given topic. Learn how you can become one.",
      button: "Learn more",
      link: "/join?ref=expert",
    },
  ];

  return (
    <Container
      className={`max-w-7xl px-5 md:p-0 flex flex-col justify-center space-y-8 my-10 ${styles.container}`}
    >
      {data.map((d, i) => {
        return (
          <div key={i} className={`${styles.item} w-full md:w-[50%]`}>
            <div
              className={`p-1 w-full md:w-[90%] rounded-xl bg-gradient-to-tr from-blue-500 to-teal-300 via-green-500`}
            >
              <section className={`rounded-lg ${styles.content}`}>
                <Card p="lg" className={`rounded-lg space-y-3`} shadow={"xl"}>
                  <Text size="xl" className="roboto text-2xl font-medium">
                    {d.title}{" "}
                  </Text>
                  <Text className="text-lg">{d.body} </Text>
                  <Button
                    component={NextLink}
                    href={d.link}
                    variant="outline"
                    radius="xl"
                    color={"teal"}
                    className="uppercase"
                  >
                    {d.button}{" "}
                  </Button>
                </Card>
                <div className={`${styles.circle}`}></div>
              </section>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default Timeline;
