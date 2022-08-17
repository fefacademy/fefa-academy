import { ColorScheme, useMantineColorScheme } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

export function useFefaColorScheme() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "fefa-academy-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme: any = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme == "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return { colorScheme, toggleColorScheme };
}

export function useFefaAssets(value: string, ext: string) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return dark
    ? `/static/${value}_dark.${ext}`
    : `/static/${value}_light.${ext}`;
}
