import { fetchEntries } from "../../contentful/contentFetch";

import Page from "../../components/layout/page/Page";
import CaseStudiesSection from "../../components/layout/case-studies-section/CaseStudiesSection";

const CaseStudies = ({ caseStudies }) => {
  return (
    <Page>
      <CaseStudiesSection caseStudies={caseStudies} />
    </Page>
  );
};

const getStaticProps = async () => {
  const res = await fetchEntries("caseStuides");
  const caseStudies = res.map((entry) => ({
    id: entry.sys.id,
    ...entry.fields,
  }));

  return {
    props: {
      caseStudies,
    },
  };
};

export { getStaticProps };

export default CaseStudies;
