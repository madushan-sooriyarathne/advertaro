import { useEffect } from "react";
import Head from "next/head";

import { ThemeProvider } from "styled-components";

import theme from "../styles/theme";
import SnackBarContextProvider from "../context/SnackBarContext";

import "../styles/global.css";

const MainApp = ({ Component, pageProps }) => {
  useEffect(() => {
    document.body.style.visibility = "visible";
  }, []);

  return (
    <>
      <Head>
        <title>Advertaro - Transform Your Digital Outreach</title>
      </Head>
      <ThemeProvider theme={theme}>
        <SnackBarContextProvider>
          <Component {...pageProps} />
        </SnackBarContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MainApp;
