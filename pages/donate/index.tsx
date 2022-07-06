import { Card, CardSection, Container, Text } from "@mantine/core";
import { CheckCircledIcon } from "@modulz/radix-icons";
import React from "react";
import { useStyles } from "../../lib/shared";

const Item: React.FC<{ children: React.ReactNode }> = (p) => {
  return (
    <div className="leading-9  items-start relative px-5 my-5">
      <CheckCircledIcon
        style={{ width: 30, height: 30 }}
        className="text-green-400 absolute top-0 left-0"
      />
      <Text className="text-lg mx-4">{p.children}</Text>
    </div>
  );
};

interface CardProps {
  price: string;
  slug: string;
  color: string;
  radius: string;
  items: string[];
}

const CustomCard: React.FC<CardProps> = (p) => {
  const { classes } = useStyles();

  return (
    <Card
      className={`${classes.customCard}  rounded-none shadow-xl ${p.radius}`}
    >
      <CardSection className={` ${classes.cardSection} bg-cyan-900 space-y-5`}>
        <Text className={`text-4xl roboto font-medium ${p.color}`}>
          {p.price}
        </Text>
        <Text className="text-2xl">{p.slug} </Text>
      </CardSection>
      <div className="pt-3">
        <Text className="text-center text-xl font-medium mb-3">
          What you get:
        </Text>

        {p.items.map((i) => (
          <Item key={i}>{i} </Item>
        ))}
      </div>
    </Card>
  );
};

const DonatePage = () => {
  const { classes } = useStyles();

  const variants: CardProps[] = [
    {
      price: "$1-$49",
      slug: "Thank you, Kemosabe!",
      color: "text-amber-700",
      radius: "rounded-tl-2xl rounded-bl-2xl",
      items: [
        "Our sincerest gratitude. Thank you for taking this chance to support us! We really appreciate it.",
        "The warm feeling you get in your heart after doing something nice. 😁",
      ],
    },
    {
      price: "$100+",
      slug: "Ask and you shall receive!",
      color: "text-gray-300",
      radius: "rounded-2xl shadow-xl z-10",
      items: [
        "You have paid the iron price, and for that, you may request any course of your choosing and if it's within our power, the course will be created.",
        "If you so wish, you may request one on one video sessions and also participate in any video meetings that may take place.",
        "All other previously mentioned perks.",
      ],
    },
    {
      price: "$50-$99",
      slug: "Welcome to the club, Mate!",
      color: "text-yellow-500",
      radius: "rounded-tr-2xl rounded-br-2xl",
      items: [
        "For the gold price, you get access to our Slack server. The slack server is private and is only used for management, meaning you'll be involved in making managerial decisions.",
      ],
    },
  ];

  return (
    <div className={`h-full min-h-[100vh] p-10`}>
      <Container className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-0 items-center justify-center p-5">
        {variants.map((v) => {
          const { color, items, price, radius, slug } = v;

          return (
            <CustomCard
              key={v.price}
              price={price}
              color={color}
              items={items}
              radius={radius}
              slug={slug}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default DonatePage;
