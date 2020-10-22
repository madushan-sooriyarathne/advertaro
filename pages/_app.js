import { ThemeProvider } from "styled-components";
import Head from "next/head";

import theme from "../styles/theme";

import "../styles/global.css";
import { useEffect } from "react";

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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MainApp;
