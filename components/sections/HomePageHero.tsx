import { Button, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import GradientText from "components/GradientText";
import HeroContainer from "components/HeroContainer";
import { useFefaAssets } from "hooks/styles";
import Image from "next/image";

export default function HomePageHero() {
  return (
    <HeroContainer
      left={
        <div className="w-full space-y-5">
          <Text
            className="font-roboto text-4xl leading-tight md:text-[3.3rem] font-bold md:leading-[70px]"
            component="h1"
          >
            Providing access to
            <GradientText text="free" from="teal" to="cyan" /> and{" "}
            <GradientText text="high quality" from="teal" to="indigo" />
            education for all.
          </Text>
          <Text color={"dimmed"} component="p" className="text-xl md:text-2xl">
            An online academy with a focus on availing knowledge to everyone,
            for free. Free in every sense of the word.
          </Text>
          <Button
            component={NextLink}
            href="/courses"
            variant="outline"
            size="lg"
            className="rounded-full mx-auto"
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
