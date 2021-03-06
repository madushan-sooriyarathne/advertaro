import { fetchEntries, fetchEntryById } from "../../contentful/contentFetch";
import Page from "../../components/layout/page/Page";
import CaseStudyItem from "../../components/layout/case-study-item/CaseStudyItem";

const CaseStudy = ({ caseStudy }) => {
  return (
    <Page>
      <CaseStudyItem caseStudy={caseStudy} />
    </Page>
  );
};

const getStaticProps = async ({ params }) => {
  const id = params.id;

  // fetch case study data from contentful
  const caseStudy = await fetchEntryById(id);

  return {
    props: {
      caseStudy,
    },
  };
};

// to static generation of dynamic routes
const getStaticPaths = async () => {
  const caseStudies = await fetchEntries("caseStuides");
  const paths = caseStudies.map((item) => ({ params: { id: item.sys.id } }));
  return {
    paths,
    fallback: false,
  };
};

export { getStaticProps, getStaticPaths };
export default CaseStudy;
