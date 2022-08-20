import { Button, Text, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";
import GradientText from "components/GradientText";
import HeroContainer from "components/HeroContainer";
import { useFefaAssets } from "hooks/styles";
import { useGlobalStyles } from "lib/shared";
import Image from "next/image";

export default function HomePageHero() {
  const { classes } = useGlobalStyles();

  return (
    <HeroContainer
      left={
        <div className="w-full space-y-5">
          <Title className={`${classes.h1}`} size="h1">
            Providing access to
            <GradientText text="free" from="teal" to="cyan" /> and{" "}
            <GradientText text="high quality" from="teal" to="indigo" />
            education for all.
          </Title>
          <Text color={"dimmed"} component="p" className={`${classes.lgText}`}>
            An online academy with a focus on availing knowledge to everyone,
            for free. Free in every sense of the word.
          </Text>
          <Button
            component={NextLink}
            href="/courses"
            variant="outline"
            size="lg"
            radius={"xl"}
            aria-label="Start Learning"
          >
            Start Learning
          </Button>
        </div>
      }
      right={
        <div className="w-full h-full lg:center">
          <Image
            src={useFefaAssets("videos/fefa", "gif")}
            alt="fefa_academy"
            width={640}
            height={360}
            className="rounded-2xl"
            priority
          />
        </div>
      }
    ></HeroContainer>
  );
}
