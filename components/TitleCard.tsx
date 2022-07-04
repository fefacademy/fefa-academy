import { Card, Text, useMantineColorScheme } from "@mantine/core";
import { NextLink } from "@mantine/next";
import React from "react";
import { IconType } from "react-icons";

interface TitleCardProps {
  icon: IconType;
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
      <props.icon size={60} />
      <div className="h-full border-[1px] rounded-md"></div>
      <div className="space-y-2">
        <Text
          className="text-xl font-medium underline text-blue-500 hover:opacity-70"
          component={NextLink}
          href={props.link}
        >
          {props.title}
        </Text>
        <Text className="font-medium">{props.body}</Text>
      </div>
    </Card>
  );
};

export default TitleCard;
