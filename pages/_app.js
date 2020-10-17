import Head from "next/head";
import "../styles/global.css";

const MainApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Advertaro - Transform Your Digital Outreach</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MainApp;
