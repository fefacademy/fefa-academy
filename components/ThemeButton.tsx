import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { MoonIcon, SunIcon } from "@modulz/radix-icons";
import React from "react";

const ThemeButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle theme"
        style={{ width: 30, height: 30 }}
      >
        {dark ? (
          <SunIcon style={{ width: 20, height: 20 }} />
        ) : (
          <MoonIcon style={{ width: 20, height: 20 }} />
        )}
      </ActionIcon>
    </div>
  );
};

export default ThemeButton;
