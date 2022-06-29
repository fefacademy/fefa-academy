import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import Navbar from "../components/Navbar";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme == "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: "inherit",
            loader: "dots",
            colorScheme,
          }}
        >
          <Paper className="rounded-none" style={{ minHeight: "100vh" }}>
            <div className="font-sans">
              <Navbar />
              <Component {...pageProps} />
            </div>
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
