import { Accordion, createStyles, ThemeIcon } from "@mantine/core";
import { Plus } from "tabler-icons-react";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("control");

  return {
    item: {
      marginTop: theme.spacing.xl,
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[2]
          : theme.colors.dark[8],

      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[2]
          : theme.colors.dark[8],
    },

    icon: {
      ref: icon,
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${
        theme.colors[theme.primaryColor][6]
      } 0%, ${theme.colors[theme.primaryColor][5]} 100%)`,
    },
  };
});

const Faq = ({ data }: { data: Array<string[]> }) => {
  const { classes } = useStyles();

  return (
    <div className="md:px-16 lg:px-36">
      <Accordion
        chevronPosition="right"
        defaultValue="reset-password"
        chevronSize={50}
        variant="separated"
        // disableChevronRotation
        chevron={
          <ThemeIcon radius="xl" className={classes.gradient} size={32}>
            <Plus size={18} />
          </ThemeIcon>
        }
        classNames={{
          item: classes.item,
          control: classes.control,
          icon: classes.icon,
        }}
        styles={{
          label: {
            fontSize: 20,
          },
          chevron: {
            "&[data-rotate]": {
              transform: "rotate(45deg)",
            },
          },
        }}
      >
        {data.map((d, i) => (
          <Accordion.Item key={i} className="text-lg" value={d[0]}>
            <Accordion.Control>{d[0]}</Accordion.Control>
            <Accordion.Panel>{d[1]}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
