import { Button, Text, useMantineColorScheme } from "@mantine/core";

const Showcase = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const videoSrc = dark
    ? "/static/videos/fefa_dark.mp4"
    : "/static/videos/fefa_light.mp4";
  return (
    <div className="w-full space-y-6 lg:space-y-0 lg:space-x-6 h-full lg:py-16 flex justify-between flex-col lg:flex-row p-8 md:px-10 lg:px-16 items-center pb-0 lg:pb-5">
      <div className="w-full lg:w-1/2 space-y-5  ">
        <Text
          className="text-5xl roboto leading-[58px] md:text-[3.3rem] font-bold md:leading-[70px]"
          component="h1"
        >
          Providing access to
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "teal", to: "blue" }}
            inherit
          >
            {" "}
            free
          </Text>{" "}
          and{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "teal", to: "indigo" }}
            inherit
          >
            high quality{" "}
          </Text>
          education for all.
        </Text>
        <Text color={"gray"} className="text-2xl" component="p">
          An online academy with a focus on availing knowledge to everyone, for
          free. Free in every sense of the word.
        </Text>
        <div className="center lg:justify-start">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full self-center lg:self-start btn"
            aria-label="Start Learning"
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
