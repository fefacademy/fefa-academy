import { Card, Text, useMantineColorScheme } from "@mantine/core";
import { NextLink } from "@mantine/next";
import React from "react";

interface TitleCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  link: string;
}

const TitleCard: React.FC<TitleCardProps> = (props) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Card
      shadow={"xs"}
      className={`flex items-center space-x-5 rounded-lg ${
        !dark && "border-2"
      }`}
    >
      {props.icon}
      <div className="h-full border-[1px] rounded-md"></div>
      <div className="space-y-2">
        <Text
          className="text-lg roboto hover:underline text-blue-500 transition-all"
          component={NextLink}
          href={props.link}
        >
          {props.title}
        </Text>
        <Text>{props.body}</Text>
      </div>
    </Card>
  );
};

export default TitleCard;
