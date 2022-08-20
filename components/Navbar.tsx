import { Center, Menu, Paper, Tooltip } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { AvatarIcon, GitHubLogoIcon, RocketIcon } from "@modulz/radix-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDown } from "tabler-icons-react";

import { NavbarLinks } from "lib/data";
import BetaBadge from "./BetaBadge";
import MobileMenu from "./MobileMenu";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const router = useRouter();

  return (
    <Paper className="z-30 rounded-none sticky top-0 w-full p-0" shadow={"lg"}>
      <header
        className={`mx-auto max-w-[85rem] center justify-between h-20 p-5 lg:px-10`}
      >
        <section className="space-x-8 center h-full ">
          <div className="center relative">
            <Link href="/" passHref>
              <Image
                src="/static/images/fefa_name_logo.png"
                alt="fefa academy"
                width={247}
                height={40}
                priority
                className="cursor-pointer"
              />
            </Link>
            <BetaBadge className="hidden md:flex" />
          </div>

          <nav className="hidden lg:flex center space-x-8 ">
            {NavbarLinks.map((r) => {
              const active = router.pathname;
              const menuItems = r.links?.map((item) => (
                <Menu.Item key={item.link}>
                  <NextLink
                    className={`link text-base ${
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
                    key={r.label}
                    trigger="hover"
                    exitTransitionDuration={0}
                    width={130}
                  >
                    <Menu.Target>
                      <div className={`cursor-pointer text-lg font-medium`}>
                        <Center>
                          <span className={`mr-1`}>{r.label}</span>
                          <ChevronDown size={20} />
                        </Center>
                      </div>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                  </Menu>
                );
              }

              return (
                <div
                  className={`link ${active === r.link ? "text-blue-400" : ""}`}
                  key={r.link}
                >
                  <Link href={r.link!}>{r.label}</Link>
                </div>
              );
            })}
          </nav>
        </section>
        <div className="hidden lg:flex items-center space-x-10 align-middle ">
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
        <MobileMenu />
      </header>
    </Paper>
  );
}
