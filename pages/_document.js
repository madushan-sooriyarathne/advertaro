import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&family=Philosopher:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          {this.props.styleTags}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-KQKFG2HJGR"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KQKFG2HJGR');`,
            }}
          />
        </Head>
        <body style={{ visibility: "hidden" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const getInitialProps = async ({ renderPage }) => {
  const sheet = new ServerStyleSheet();

  const page = renderPage((App) => (props) =>
    sheet.collectStyles(<App {...props} />)
  );

  const styleTags = sheet.getStyleElement();

  return { ...page, styleTags };
};

export { getInitialProps };

export default MainDocument;
