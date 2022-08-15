import {
  Button,
  Center,
  Container,
  Divider,
  Menu,
  Paper,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import {
  AvatarIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  MoonIcon,
  RocketIcon,
  SunIcon,
} from "@modulz/radix-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiBookContent, BiLibrary, BiMoney } from "react-icons/bi";
import { CgPlayList, CgTv } from "react-icons/cg";
import { ChevronDown } from "tabler-icons-react";
import { NavbarLinks } from "../lib/data";

import BetaBadge from "./BetaBadge";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const routes = [
    ["Courses", "/courses"],
    ["Lessons", "/lessons"],
    ["Community", "/community"],
    ["Donate", "/donate"],
    ["Blog", "/blog"],
  ];

  const router = useRouter();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Paper className="z-30 rounded-none sticky top-0 w-full" shadow={"lg"}>
      <Container className="max-w-[85rem] p-0">
        <div className={`flex items-center justify-between p-5 h-20 lg:px-16`}>
          <div className="flex items-center space-x-8 align-middle h-full ">
            <div className="center relative">
              <NextLink href="/">
                {/* eslint-disable-next-line */}
                <img
                  src="/static/images/fefa_name.svg"
                  alt="fefa academy"
                  width={230}
                  height={50}
                />
              </NextLink>
              <BetaBadge />
            </div>

            <div className="large-display center space-x-8 ">
              {NavbarLinks.map((r) => {
                const active = router.pathname;
                const menuItems = r.links?.map((item) => (
                  <Menu.Item key={item.link}>
                    <NextLink
                      className={`block w-full small-link text-[15px] text-sm  ${
                        active === r.link ? "text-blue-400" : ""
                      }`}
                      href={item.link}
                    >
                      {item.label}
                    </NextLink>
                  </Menu.Item>
                ));

                if (menuItems) {
                  return (
                    <Menu
                      size={"sm"}
                      key={r.label}
                      trigger="hover"
                      control={
                        <Center>
                          <span className="text-base uppercase font-medium cursor-pointer">
                            {r.label}
                          </span>
                          <ChevronDown size={20} className="ml-1 text-white" />
                        </Center>
                      }
                    >
                      {menuItems}
                    </Menu>
                  );
                }

                return (
                  <div
                    className={`small-link text-[15px] ${
                      active === r.link ? "text-blue-400" : ""
                    }`}
                    key={r.link}
                  >
                    <Link href={r.link!}>{r.label}</Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="large-display items-center space-x-10 align-middle ">
            <Tooltip label="Explore" color={"green"} withArrow>
              <RocketIcon height={30} width={30} className="links" />
            </Tooltip>
            <Tooltip label="Github" color={"blue"} withArrow>
              <GitHubLogoIcon height={30} width={30} className="links" />
            </Tooltip>
            <Tooltip label="Login" color={"grape"} withArrow>
              <AvatarIcon height={32} width={32} className="links" />
            </Tooltip>
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
                    <CgTv size={size} />
                  ) : r[0] == "Series" ? (
                    <CgPlayList size={size} />
                  ) : r[0] == "Donate" ? (
                    <BiMoney size={size} />
                  ) : r[0] == "Courses" ? (
                    <BiLibrary size={size} />
                  ) : (
                    <BiBookContent size={size} />
                  );
                return (
                  <Menu.Item
                    key={r[0]}
                    icon={icon}
                    component={NextLink}
                    href="/"
                  >
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
      </Container>
    </Paper>
  );
};

export default Navbar;
