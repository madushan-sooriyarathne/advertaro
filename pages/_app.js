import { useEffect } from "react";
import Head from "next/head";

import { ThemeProvider } from "styled-components";

import SnackBarContextProvider from "../context/SnackBarContext";
import NavBarContextProvider from "../context/NavBarContext";

import theme from "../styles/theme";
import "../styles/global.css";

const MainApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // change the visibility of the page once all components mounts
    document.body.style.visibility = "visible";
  }, []);

  return (
    <>
      <Head>
        <title>Advertaro - Transform Your Digital Outreach</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackBarContextProvider>
          <NavBarContextProvider>
            <Component {...pageProps} />
          </NavBarContextProvider>
        </SnackBarContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MainApp;
