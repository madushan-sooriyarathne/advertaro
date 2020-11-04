import Page from "../components/layout/page/Page";
import ErrorComponent from "../components/layout/error-component/ErrorComponent";

const Error404Page = () => {
  return (
    <Page>
      <ErrorComponent
        message="We cannot find what your are looking for!"
        image="/static/img/error/404.svg"
      />
    </Page>
  );
};

export default Error404Page;
