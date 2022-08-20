import { Button, Menu, useMantineColorScheme } from "@mantine/core";
import { NextLink } from "@mantine/next";
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  MoonIcon,
  RocketIcon,
  SunIcon,
} from "@modulz/radix-icons";
import { NavbarLinks } from "lib/data";

export default function MobileMenu() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  let routes: any = [];

  NavbarLinks.forEach((ln) => {
    ln.link && routes.push(ln);
    ln.links?.forEach((nested) => {
      routes.push(nested);
    });
  });

  return (
    <div className="lg:hidden">
      <Menu shadow={"md"} width={200} position="left-start">
        <Menu.Target>
          <Button variant="subtle">
            <HamburgerMenuIcon height={20} width={20} />{" "}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Content</Menu.Label>
          {routes.map((l: any, i: number) => {
            return (
              <Menu.Item key={i} component={NextLink} href={l.link}>
                {l.label}
              </Menu.Item>
            );
          })}
          <Menu.Label>Others</Menu.Label>
          <Menu.Item icon={<RocketIcon height={18} width={18} />} color="green">
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
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
