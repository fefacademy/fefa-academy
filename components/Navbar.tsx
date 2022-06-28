import { Button, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { GitHubLogoIcon } from "@modulz/radix-icons";

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

  return (
    <div className="flex items-center justify-between p-5 h-16">
      <div className="flex items-center space-x-6 align-middle h-full">
        <div className="center w-2/3  md:w-1/3 relative">
          <Image src={Name} alt="fefa academy" />
          <BetaBadge />
        </div>

        <div className="largeDisplay center space-x-6">
          {routes.map((r) => (
            <div className="links " key={r[0]}>
              <Link href={r[1]}>{r[0]}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="largeDisplay items-center space-x-6 align-middle ">
        <ThemeButton />
        <GitHubLogoIcon height={30} width={30} className="links" />
      </div>
    </div>
  );
};

export default Navbar;
