import { Button, Tabs } from "@mantine/core";
import { IconMessageCircle, IconPhoto, IconSettings } from "@tabler/icons";
import Page from "components/Page";
import { useEffect, useState } from "react";
import styles from "./blog.module.css";

export default function Blog() {
  const items = [
    "Learn to Code.",
    "Learn to Design.",
    "Learn by Doing.",
    "Be in the Know.",
    "Upgrade your Skills.",
    "Start reading now!",
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
    <Page
      customMeta={{
        title: "Blog | Fefa Academy",
        description:
          "General blogs about software engineering, design, computer graphics and much more!",
      }}
    >
      <main className="mx-auto w-full max-w-7xl p-5 space-y-10 ">
        <article className="md:p-20 lg:pt-8 center flex-col text-center space-y-5">
          <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 via-green-500 !leading-snug">
            The Fefa Academy Blog
          </h1>
          {items.map((item, index) => {
            return (
              <h2
                key={index}
                className={`text-6xl !leading-snug transition-all ${
                  current === index ? `${styles.animatedText} block` : "hidden"
                }`}
              >
                {item}
              </h2>
            );
          })}
          <p className="text-2xl !mb-5">
            Written lessons, weekly updates, state of the community and much
            more. Jump right in and start reading about topics that interest
            you. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolorem, nemo! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Delectus, dolorum.
          </p>
          <div className="flex flex-col uppercase md:flex-row my-5 space-y-8 md:space-x-8 md:space-y-0">
            <Button
              variant="outline"
              color="teal"
              size="xl"
              radius={"xl"}
              sx={{ textTransform: "uppercase" }}
            >
              Become Blogger
            </Button>
            <Button
              variant="subtle"
              color="blue"
              size="xl"
              radius={"xl"}
              sx={{ textTransform: "uppercase" }}
            >
              Search
            </Button>
          </div>
        </article>

        <Tabs defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>
              Gallery
            </Tabs.Tab>
            <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>
              Messages
            </Tabs.Tab>
            <Tabs.Tab value="settings" icon={<IconSettings size={14} />}>
              Settings
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery" pt="xs">
            Gallery tab content
          </Tabs.Panel>

          <Tabs.Panel value="messages" pt="xs">
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </main>
    </Page>
  );
}
