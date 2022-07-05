import { Button, Text, useMantineColorScheme } from "@mantine/core";

const Showcase = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const videoSrc = dark ? "/videos/fefa_dark.mp4" : "/videos/fefa_light.mp4";
  return (
    <div className="w-full space-y-6 lg:space-y-0 lg:space-x-6 h-full lg:py-16 flex justify-between flex-col lg:flex-row p-8 md:px-10 lg:px-16 items-center pb-0 lg:pb-5">
      <div className="w-full lg:w-1/2 space-y-5  ">
        <Text className="text-5xl roboto tracking-wide leading-[58px] md:text-[3.3rem] font-bold md:leading-[70px]">
          Providing access to
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            className="bg-gradient-to-r from-teal-500 to-blue-500"
            inherit
          >
            {" "}
            free
          </Text>{" "}
          and{" "}
          <Text
            component="span"
            variant="gradient"
            className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500"
            inherit
          >
            high quality{" "}
          </Text>
          education for all.
        </Text>
        <Text color={"gray"} className="text-2xl">
          An online academy with a focus on availing knowledge to everyone, for
          free. Free in every sense of the word.
        </Text>
        <div className="center lg:justify-start">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full self-center lg:self-start btn"
          >
            Start Learning
          </Button>
        </div>
      </div>
      <div className="center w-full md:w-11/12 lg:w-1/2 p-0">
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
