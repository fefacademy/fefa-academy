import { Card, CardSection, Text } from "@mantine/core";
import React from "react";
import { useStyles } from "../lib/shared";

interface SCardProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  title: string;
}

const SupportCard: React.FC<SCardProps> = (props) => {
  const { classes } = useStyles();
  return (
    <Card shadow={"xl"} className={`${classes.customCard} rounded-xl`} p="xl">
      <CardSection className="center flex-col p-2 pt-3">
        {props.icon}
        <Text className="mt-1 text-2xl font-medium roboto">{props.title} </Text>
      </CardSection>
      {props.children}
    </Card>
  );
};

export default SupportCard;
