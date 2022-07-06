import {
  Badge,
  Button,
  Card,
  CardSection,
  Divider,
  Group,
  Text,
} from "@mantine/core";
import React from "react";

import Image from "next/image";
import { Download, Eye } from "tabler-icons-react";
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
      value: c.lessonCount + " lessons",
    },
    {
      title: "🕖 Time:",
      value: c.hoursCount + " hrs",
    },
    {
      title: "🛠 Status:",
      value: c.status,
    },
  ];

  const items = stats.map((stat) => (
    <div key={stat.title} className="text-center">
      <Text size="sm" color="dimmed" weight={500}>
        {stat.title}
      </Text>
      {stat.title == "🛠 Status:" ? (
        <Badge color={stat.value == "In Progress" ? "red" : "green"} size="sm">
          {stat.value}
        </Badge>
      ) : (
        <Text weight={500} size="md">
          {stat.value}
        </Text>
      )}
    </div>
  ));

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
        <Text size="md" lineClamp={4}>
          {c.intro}
        </Text>
        <Group className="justify-between">
          <Group>
            <Eye />
            <Text>1,000</Text>
          </Group>
          <Group>
            <Download />
            <Text>4,000</Text>
          </Group>
        </Group>
      </CardSection>
      <CardSection>
        <Divider />
      </CardSection>
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
