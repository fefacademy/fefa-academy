import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  showcase: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[1],
  },

  dimmedText: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[4]
        : theme.colors.gray[6],
  },

  customCard: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[2],
  },

  cardSection: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[7],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.xl,
    color: "white",
  },
}));

export const useGlobalStyles = createStyles((theme) => {
  return {
    h1: {
      fontSize: 55,
      lineHeight: 1.35,
      fontFamily: "Roboto Slab",
      fontWeight: "bold",

      [theme.fn.smallerThan("sm")]: {
        fontSize: 36,
      },
    },

    lgText: {
      fontSize: 24,
      lineHeight: 1.25,

      [theme.fn.smallerThan("sm")]: {
        fontSize: 20,
      },
    },

    borderCard: {
      border: theme.colorScheme !== "dark" ? "1px solid lightgrey" : "none",
    },

    showcase: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
    },

    dimmedText: {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[4]
          : theme.colors.gray[6],
    },

    customCard: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
    },

    cardSection: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[7],
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing.xl,
      color: "white",
    },
  };
});

// font-roboto text-4xl leading-tight md:text-[3.3rem] font-bold md:leading-[70px]
