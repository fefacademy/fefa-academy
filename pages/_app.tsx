import { ColorSchemeProvider, MantineProvider, Paper } from "@mantine/core";
import { useFefaColorScheme } from "hooks/styles";
import { useFefaTheme } from "lib/hooks";
import type { AppProps } from "next/app";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { colorScheme, toggleColorScheme } = useFefaColorScheme();
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
            ...useFefaTheme(),
          }}
        >
          <Paper className="rounded-none font-sans" component="main">
            <Component {...pageProps} />
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
