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
        </Head>
        <body>
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
