import {
  Button,
  Divider,
  FloatingTooltip,
  Menu,
  Text,
  Tooltip,
} from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import {
  GitHubLogoIcon,
  RocketIcon,
  BookmarkIcon,
  VideoIcon,
} from "@modulz/radix-icons";

import Name from "../assets/fefa_name.svg";
import Image from "next/image";
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

  const [opened, setOpened] = useState(false);

  return (
    <div className="flex items-center justify-between p-5 h-16 md:px-8">
      <div className="flex items-center space-x-6 align-middle h-full ">
        <div className="center w-2/3  md:w-1/3 relative">
          <Image src={Name} alt="fefa academy" />
          <BetaBadge />
        </div>

        <div className="large-display center space-x-6 ">
          {routes.map((r) => (
            <div className="small-link " key={r[0]}>
              <Link href={r[1]}>{r[0]}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="large-display items-center space-x-8 align-middle ">
        <FloatingTooltip label="Explore">
          <RocketIcon height={30} width={30} className="links" />
        </FloatingTooltip>
        <FloatingTooltip label="Github">
          <GitHubLogoIcon
            height={30}
            width={30}
            className="links"
            onFocus={() => setOpened((o) => !o)}
          />
        </FloatingTooltip>
        <ThemeButton />
      </div>
      <div className="small-display">
        <Menu>
          <Menu.Label>Content</Menu.Label>
          <Menu.Item icon={<BookmarkIcon height={14} width={14} />}>
            Courses
          </Menu.Item>
          <Menu.Item icon={<BookmarkIcon height={14} width={14} />}>
            Lessons
          </Menu.Item>
          <Menu.Item icon={<BookmarkIcon height={14} width={14} />}>
            Series
          </Menu.Item>
          <Menu.Item icon={<BookmarkIcon height={14} width={14} />}>
            Donate
          </Menu.Item>
          <Menu.Item icon={<BookmarkIcon height={14} width={14} />}>
            Blog
          </Menu.Item>

          <Divider />

          <Menu.Label>Others</Menu.Label>
          <Menu.Item icon={<GitHubLogoIcon height={14} width={14} />}>
            View on Github
          </Menu.Item>
          <Menu.Item icon={<RocketIcon height={14} width={14} />}>
            Explore Fefa Academy
          </Menu.Item>
          <Menu.Item color="green" icon={<VideoIcon height={14} width={14} />}>
            Change theme
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
