import { Button, Text, useMantineColorScheme } from "@mantine/core";
import React from "react";

const Showcase = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const videoSrc = dark ? "/videos/fefa_dark.mp4" : "/videos/fefa_light.mp4";
  return (
    <div className="w-full space-y-6 md:space-y-0 md:space-x-6 h-full md:h-[calc(100vh-100px)] flex justify-between flex-col md:flex-row p-8 md:px-16 items-center pb-0 md:pb-5">
      <div className="w-full md:w-1/2 space-y-5 md:space-y-6 ">
        <Text className="text-5xl leading-[58px] md:text-[3.3rem] font-bold md:leading-[65px]">
          Providing access to free and high quality content for everyone.
        </Text>
        <Text color={"gray"} className="text-2xl">
          An online academy with a focus on making knowledge available to all,
          for free. Free in every sense of the word.
        </Text>
        <Button variant="outline" size="lg" className="rounded-full">
          Start Learning
        </Button>
      </div>
      <div className="center w-full md:w-1/2 p-0">
        <video
          autoPlay
          loop
          src={videoSrc}
          muted
          className="rounded-2xl h-full"
        ></video>
      </div>
    </div>
  );
};

export default Showcase;
