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
