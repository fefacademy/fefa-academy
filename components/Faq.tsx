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

const Faq = () => {
  const { classes } = useStyles();

  const faq = [
    [
      "How is Fefa Academy different?",
      "The Fefa experience and approach is different in that rather than stacking your mind with lots of concepts then finding some highly contrived use-case to apply it, we take a problem first approach. Each course has a pre-defined problem set which is used to learn the new concept. You don't learn a new concept unless you need to. Plus, it's all free, so you have nothing to loose. I promise you that it will be legen...wait for it...dary! See you on the inside.",
    ],
    [
      "How do I download a course?",
      "Course are distributed through various ways. The easiest option is via direct download but this option may not always be available due to server optimizations to minimize bandwidth and save on costs. Another fairly easy way, is copying the course content to your cloud account. This can be achieved directly via the Fefa website and supported cloud platforms/storage include: Google Drive, Mega, Dropbox, GCP, AWS and Azure.",
    ],
    [
      "Can I download a course without an account?",
      "No. Allowing unauthenticated downloads would be a very bad technical decision on our part since this would enable virtually anybody to download the courses, including bots and we would end up with very large server bills. It is for this reason, that we require you to create an account. Accounts also allow you to save, bookmark, rate and comment on courses, blogs or other content.",
    ],
    [
      "How is the downloaded course structured?",
      'Once downloaded, a course comes in a very specific folder structure. For obvious reasons, we don\'t provide course streaming as in platforms such as udemy, but we offer you the next best thing. Rather than just providing the bare course lessons, every course comes "wrapped" in a web app structure that provides a rich experience with features like progress tracking integrated into it. Think of it as an offline udemy-like site, that you open from a simple index.html . Check out this video to learn more.',
    ],
  ];
  return (
    <div className="p-5 md:px-16 lg:px-36">
      <Accordion
        iconPosition="right"
        initialItem={0}
        classNames={{
          item: classes.item,
          control: classes.control,
          icon: classes.icon,
          contentInner: classes.content,
        }}
        icon={
          <ThemeIcon radius="xl" className={classes.gradient} size={32}>
            <Plus size={18} />
          </ThemeIcon>
        }
        styles={{
          label: {
            fontSize: 20,
            fontFamily: "Roboto Slab",
          },
        }}
      >
        {faq.map((d) => (
          <Accordion.Item key={d[0]} label={d[0]} className="text-lg">
            {d[1]}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
