import { Card, CardSection, Container, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { CheckCircledIcon } from "@modulz/radix-icons";
import React from "react";
import {
  BrandCoinbase,
  BrandGithub,
  BrandPatreon,
  BrandPaypal,
} from "tabler-icons-react";
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
      className={`${classes.customCard} rounded-2xl lg:rounded-none shadow-xl ${p.radius}`}
    >
      <CardSection className={` ${classes.cardSection} bg-cyan-900 space-y-5`}>
        <Text className={`text-4xl roboto font-medium ${p.color}`}>
          {p.price}
        </Text>
        <Text className={`text-2xl ${p.color} text-center`}>{p.slug} </Text>
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
      color: "text-[#CD7F32]",
      radius: "lg:rounded-tl-2xl lg:rounded-bl-2xl",
      items: [
        "Our sincerest gratitude. Thank you for taking this chance to support us! We really appreciate it.",
        "The warm feeling you get in your heart after doing something really nice. 😁",
      ],
    },
    {
      price: "$100+",
      slug: "Ask and you shall receive!",
      color: "text-[#A59C94]",
      radius: "lg:rounded-2xl shadow-xl z-10",
      items: [
        "You have paid the iron price, and for that, you may request any course of your choosing and if it's within our power, the course will be created.",
        "If you so wish, you may request one on one video sessions and also participate in any video meetings that may take place.",
        "All other previously mentioned perks.",
      ],
    },
    {
      price: "$50-$99",
      slug: "Welcome to the club, Mate!",
      color: "text-[#d4af37]",
      radius: "lg:rounded-tr-2xl lg:rounded-br-2xl",
      items: [
        "For the gold price, you get access to our slack channel. The channel is private and is only used for management, meaning you'll be involved in making managerial decisions.",
      ],
    },
  ];

  const data = [
    {
      title: "Become a Patreon",
      icon: <BrandPatreon size={30} />,
      link: "#",
    },
    {
      title: "Sponsor on Github",
      icon: <BrandGithub size={30} />,
      link: "#",
    },
    {
      title: "Donate via Paypal",
      icon: <BrandPaypal size={30} />,
      link: "#",
    },
    {
      title: "Donate some crypto",
      icon: <BrandCoinbase size={30} />,
      link: "#",
    },
  ];
  const platforms = data.map((d, i) => {
    return (
      <Card
        shadow={"md"}
        component={NextLink}
        href={d.link}
        key={i}
        className="h-full flex flex-row space-x-4 items-center hover:scale-105 transition-transform cursor-pointer"
      >
        {d.icon}
        <div className="h-6 opacity-90 border-[1px] rounded-md"></div>
        <Text className="text-lg">{d.title} </Text>
      </Card>
    );
  });

  return (
    <div className={`h-full p-5 lg:p-10`}>
      <Container className="p-0 max-w-7xl ">
        <section className="center flex-col lg:flex-row mb-8 p-5 space-y-8 lg:space-y-0 lg:space-x-5">
          <div className="w-full lg:w-1/2 space-y-3">
            <Text className="text-5xl font-medium roboto mb-5">
              Help us grow
            </Text>
            <Text className="text-xl">
              Fefa is a non-profit organization. It remains alive because of
              wonderful human beings like you. By donating, or becoming a
              patreon, you&apos;ll be helping us improve by creating new
              resources to help people learn new skills. You can donate through
              various ways and/or platforms.
            </Text>
            <Text className="text-xl">
              If you become a patreon, or subscribe to a recurring donation, the
              perks associated with this are equivalent to that of a one-time
              iron-price level donation. All the donation levels are shown below
            </Text>
          </div>
          <div className="w-full lg:w-1/2 space-y-5 lg:px-10">{platforms}</div>
        </section>
        <div className="grid grid-cols-1 md:px-8 lg:px-0 lg:grid-cols-3 gap-5 lg:gap-0 items-center justify-center lg:p-5">
          {variants.map((v, i) => {
            const { color, items, price, radius, slug } = v;

            return (
              <CustomCard
                key={i}
                price={price}
                color={color}
                items={items}
                radius={radius}
                slug={slug}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default DonatePage;
