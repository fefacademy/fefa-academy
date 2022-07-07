import {
  ActionIcon,
  Container,
  createStyles,
  Footer as MantineFooter,
  Group,
  Text,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import Image from "next/image";
import {
  BrandDiscord,
  BrandGithub,
  BrandReddit,
  BrandSlack,
  BrandTwitter,
  BrandYoutube,
} from "tabler-icons-react";
import Logo from "../assets/fefa_logo.png";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 60,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.md,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
      color: theme.colors.blue[4],
    },
  },

  title: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  const content = [
    ["Courses", "#"],
    ["Lessons", "#"],
    ["Series", "#"],
  ];

  const academy = [
    ["Blog", "#"],
    ["Community", "#"],
    ["Donate", "#"],
  ];

  const links = [
    ["Report issue", "#"],
    ["Feedback", "#"],
    ["Contribute", "#"],
  ];

  const lists = [
    {
      title: "Content",
      list: content,
    },
    {
      title: "Academy",
      list: academy,
    },
    {
      title: "Quick Links",
      list: links,
    },
  ];

  const groups = lists.map((group) => {
    const links = group.list.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component={NextLink}
        href={link[1]}
      >
        {link[0]}
      </Text>
    ));

    return (
      <div className="w-[160px]" key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <MantineFooter height={"100%"} className={`${classes.footer} `}>
      <Container className={`${classes.inner} `}>
        <div className="flex flex-col space-y-3 items-center">
          <div className="max-w-[150px] ">
            <Image alt="fefa_academy" src={Logo}></Image>
          </div>
          <Text size="xl" weight={500}>
            Free education for all
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="md">
          © 2022 Fefa Academy. All rights reserved.
        </Text>

        <Group spacing={8} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandGithub size={25} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandTwitter size={25} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandSlack size={25} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={25} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandDiscord size={25} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandReddit size={25} />
          </ActionIcon>
        </Group>
      </Container>
    </MantineFooter>
  );
};

export default Footer;
