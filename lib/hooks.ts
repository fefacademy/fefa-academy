import { MantineTheme, useMantineTheme } from "@mantine/core";

export function useFefaTheme() {
  const base = useMantineTheme();

  const FefaTheme: Partial<MantineTheme> = {
    white: "#fff",
    black: "#000",
  };

  return FefaTheme;
}
