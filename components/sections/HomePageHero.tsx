import { Button, Group } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons";
import HeroContainer from "components/HeroContainer";
import { useFefaAssets } from "hooks/styles";
import { useGlobalStyles } from "lib/shared";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePageHero() {
  const { classes } = useGlobalStyles();
  const items = [
    "Learn to Code.",
    "Learn to Design.",
    "Learn by Doing.",
    "Be in the Know.",
    "Upgrade your Skills.",
    "Start learning now!",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const anim = setInterval(() => {
      if (current + 1 >= items.length) {
        setCurrent(0);
      } else {
        setCurrent((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(anim);
  }, [current, items.length]);

  return (
    <>
      <div className="flex py-10 justify-center items-center flex-col space-y-6 mb-5">
        <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 via-green-500 !leading-snug">
          Free education for all
        </h1>
        {items.map((item, index) => {
          return (
            <h2
              key={index}
              className={`text-6xl !leading-snug transition-all ${
                current === index ? `animatedText block` : "hidden"
              }`}
            >
              {item}
            </h2>
          );
        })}
        <p className="text-2xl !mb-5">
          Written lessons, weekly updates, state of the community and much more.
          Jump right in and start reading about topics that interest you. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, nemo!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
          dolorum.
        </p>
        <div className="flex flex-col uppercase md:flex-row my-5 space-y-8 md:space-x-8 md:space-y-0">
          <Button
            variant="outline"
            color="teal"
            size="xl"
            radius={"xl"}
            sx={{ textTransform: "uppercase" }}
          >
            Get Started
          </Button>
          <Button
            variant="subtle"
            color="blue"
            size="xl"
            radius={"xl"}
            sx={{ textTransform: "uppercase" }}
          >
            Courses
          </Button>
        </div>
      </div>
      <HeroContainer
        left={
          <div className="w-full space-y-5">
            <h2 className="text-5xl !leading-snug">Our plan is simple:</h2>

            <div className="flex flex-col text-2xl space-y-4">
              <Group>
                <IconCircleCheck color="teal" /> To provide free content
              </Group>
              <Group>
                <IconCircleCheck color="teal" /> To make sure said content is of
                high quality
              </Group>
              <Group>
                <IconCircleCheck color="teal" /> To create an amalzing community
              </Group>
              <Group>
                <IconCircleCheck color="teal" /> And look cool doing it
              </Group>
            </div>
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
    </>
  );
}
