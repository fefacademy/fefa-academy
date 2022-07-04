import React from "react";
import {
  Divider,
  List,
  ListItem,
  Footer as MantineFooter,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { GitHubLogoIcon, TwitterLogoIcon } from "@modulz/radix-icons";
import { CgFacebook, CgInstagram, CgSlack, CgYoutube } from "react-icons/cg";

const Footer = () => {
  const content = [
    ["Courses", "#"],
    ["Lessons", "#"],
    ["Series", "#"],
  ];

  const academy = [
    ["Blog", "#"],
    ["Community", "#"],
    ["Donate", "#"],
  ];

  const links = [
    ["Report issue", "#"],
    ["Feedback", "#"],
    ["Contribute", "#"],
  ];

  const lists = [
    {
      title: "Content",
      list: content,
    },
    {
      title: "Academy",
      list: academy,
    },
    {
      title: "Quick Links",
      list: links,
    },
  ];
  return (
    <MantineFooter height={"100%"} className="mt-5">
      <div className="h-full md:h-[20vh] lg:h-[40vh]">
        <section className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-5 md:gap-0 p-8 md:p-10 md:px-14">
          {lists.map((l) => (
            <List className="text-center" key={l.title}>
              <ListItem className="text-2xl font-semibold mb-2">
                {l.title}{" "}
              </ListItem>
              {l.list.map((c) => (
                <ListItem key={c[0]} className="links text-lg hover:underline">
                  <NextLink href={c[1]}>{c[0]}</NextLink>
                </ListItem>
              ))}
            </List>
          ))}
        </section>
        <div className="center">
          <Divider className="w-1/3" />
        </div>
        <section className="center space-x-6 pt-3">
          <NextLink href={"#"} className="links">
            <GitHubLogoIcon height={30} width={30} />
          </NextLink>
          <NextLink href={"#"} className="links">
            <TwitterLogoIcon height={30} width={30} />
          </NextLink>
          <NextLink href={"#"} className="links">
            <CgFacebook size={30} />
          </NextLink>
          <NextLink href={"#"} className="links">
            <CgInstagram size={30} />
          </NextLink>
          <NextLink href={"#"} className="links">
            <CgSlack size={30} />
          </NextLink>
          <NextLink href={"#"} className="links">
            <CgYoutube size={40} width={30} />
          </NextLink>
        </section>
        <div className="center py-3">
          <span className="font-bold">&copy; 2022 Fefa Academy</span>
        </div>
      </div>
    </MantineFooter>
  );
};

export default Footer;
