import ErrorComponent from "../components/layout/error-component/ErrorComponent";
import Header from "../components/layout/header/Header";
import Page from "../components/layout/page/Page";

const Error = ({ statusCode }) => {
  return (
    <Page>
      <Header />
      {statusCode ? (
        <ErrorComponent
          message={`A Error occurred in the server. ${statusCode} was returned!`}
          image="/static/img/error/error.svg"
        />
      ) : (
        <ErrorComponent
          message="Something went wrong! We are fixing it. Please try again later."
          image="/static/img/error/client_error.svg"
        />
      )}
    </Page>
  );
};

const getServerSideProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export { getServerSideProps };
export default Error;
