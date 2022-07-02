import {
  Button,
  Divider,
  FloatingTooltip,
  Menu,
  useMantineColorScheme,
  Paper,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import {
  GitHubLogoIcon,
  RocketIcon,
  HamburgerMenuIcon,
  SunIcon,
  MoonIcon,
} from "@modulz/radix-icons";
import Image from "next/image";
import { NextLink } from "@mantine/next";
import { BiVideo, BiBook, BiMoney, BiLibrary } from "react-icons/bi";
import { CgPlayList } from "react-icons/cg";

import Name from "../assets/fefa_name.svg";
import BetaBadge from "./BetaBadge";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const routes = [
    ["Courses", "/"],
    ["Lessons", "/"],
    ["Series", "/"],
    ["Donate", "/"],
    ["Blog", "/"],
  ];

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Paper className="z-30 rounded-none sticky top-0" shadow={"lg"}>
      <div className={`flex items-center justify-between p-5 h-20 md:px-16`}>
        <div className="flex items-center space-x-8 align-middle h-full ">
          <div className="center w-2/3  lg:w-1/3 relative">
            <Image src={Name} alt="fefa academy" />
            <BetaBadge />
          </div>

          <div className="large-display center space-x-8 ">
            {routes.map((r) => (
              <div className="small-link " key={r[0]}>
                <Link href={r[1]}>{r[0]}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="large-display items-center space-x-10 align-middle ">
          <FloatingTooltip label="Explore" color={"green"}>
            <RocketIcon height={30} width={30} className="links" />
          </FloatingTooltip>
          <FloatingTooltip label="Github" color={"blue"}>
            <GitHubLogoIcon height={30} width={30} className="links" />
          </FloatingTooltip>
          <ThemeButton />
        </div>
        <div className="small-display">
          <Menu
            shadow={"md"}
            control={
              <Button variant="subtle">
                <HamburgerMenuIcon height={20} width={20} />
              </Button>
            }
          >
            <Menu.Label>Content</Menu.Label>
            {routes.map((r) => {
              let size = 20;
              let icon =
                r[0] == "Lessons" ? (
                  <BiVideo size={size} />
                ) : r[0] == "Series" ? (
                  <CgPlayList size={size} />
                ) : r[0] == "Donate" ? (
                  <BiMoney size={size} />
                ) : r[0] == "Courses" ? (
                  <BiLibrary size={size} />
                ) : (
                  <BiBook size={size} />
                );
              return (
                <Menu.Item key={r[0]} icon={icon} component={NextLink} href="/">
                  {r[0]}
                </Menu.Item>
              );
            })}
            <Divider />

            <Menu.Label>Others</Menu.Label>
            <Menu.Item
              icon={<RocketIcon height={18} width={18} />}
              color="green"
            >
              Explore
            </Menu.Item>
            <Menu.Item
              icon={<GitHubLogoIcon height={18} width={18} />}
              color="blue"
            >
              View on Github
            </Menu.Item>
            <Menu.Item
              icon={
                dark ? (
                  <SunIcon height={18} width={18} />
                ) : (
                  <MoonIcon height={18} width={18} />
                )
              }
              color={dark ? "yellow" : "grape"}
            >
              <span onClick={() => toggleColorScheme()}>Toggle theme</span>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Paper>
  );
};

export default Navbar;
