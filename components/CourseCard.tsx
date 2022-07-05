import { Button, Card, CardSection, Chip, Divider, Text } from "@mantine/core";
import React from "react";

import Image from "next/image";
import { useState } from "react";
import courseImage from "../assets/course_1.jpg";

interface CourseProps {
  id: number;
  title: string;
  taughtBy: string;
  intro: string;
  lessonCount: number;
  hoursCount: number;
  tags: string[];
  courseSize: string;
  status: string;
  courseImageUrl: string;
  authorImageUrl: string;
  contentUrl: string;
}

interface Course {
  course: CourseProps;
}

const CourseCard: React.FC<Course> = ({ course }) => {
  let c = course;
  const stats = [
    {
      title: "📺 Length:",
      value: c.lessonCount + " videos",
    },
    {
      title: "🕖 Time:",
      value: c.hoursCount + " hrs",
    },
    {
      title: "🛠 Status:",
      value: "Progress",
    },
  ];

  const items = stats.map((stat) => (
    <div key={stat.title} className="text-center">
      <Text size="sm" color="dimmed" weight={500}>
        {stat.title}
      </Text>
      {stat.title == "🛠 Status:" ? (
        <Chip color={stat.value == "Progress" ? "orange" : "green"} size="xs">
          {stat.value}
        </Chip>
      ) : (
        <Text weight={500} size="md">
          {stat.value}
        </Text>
      )}
    </div>
  ));

  const tags = c.tags.map((t) => <Chip key={t}>{t} </Chip>);
  const [opened, setOpened] = useState(false);

  return (
    <Card
      key={c.id}
      shadow="lg"
      className="rounded-lg overflow-hidden"
      p={"xl"}
    >
      <CardSection>
        <Image
          alt={c.title}
          src={courseImage}
          height={500}
          className="object-cover"
        ></Image>
      </CardSection>
      <div className="flex items-center justify-between my-2">{items}</div>

      <CardSection className="space-y-3 p-5 pt-1 ">
        <Text weight={500} className="text-2xl">
          {" "}
          {c.title}{" "}
        </Text>
        <Text size="md" weight={"lighter"} className="roboto">
          {c.intro}
        </Text>
      </CardSection>
      <CardSection>
        <Divider />
      </CardSection>
      {/* <div className="my-3">
        <Group className="justify-between">
          <Text size="xl">Course Tags: </Text>
          <Button
            onClick={() => setOpened((o) => !o)}
            variant="outline"
            size="xs"
            radius={14}
            color="teal"
          >
            {opened ? "Hide" : "Show"}
          </Button>
        </Group>
        <Collapse in={opened} className="my-3">
          <Chips color={"grape"}>{tags}</Chips>
        </Collapse>
      </div>
      <CardSection>
        <Divider />
      </CardSection> */}
      <div className="mt-5 center justify-between">
        <Button variant="outline" size="md">
          Course Details
        </Button>
        <Button
          variant="gradient"
          className="bg-gradient-to-r from-teal-500 to-blue-500"
          size="md"
        >
          Download
        </Button>
      </div>
    </Card>
  );
};

export default CourseCard;
