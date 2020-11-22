import { fetchEntries } from "../contentful/contentFetch";

import Page from "../components/layout/page/Page";
import CTABanner from "../components/layout/cta-banner/CTABanner";
import Specialties from "../components/layout/specialties/SpecialtiesSection";
import Header from "../components/layout/header/Header";

const ServicesPage = ({ services }) => {
  return (
    <Page>
      <Header title="We designs and deploys best-in-class digital solutions that deliver results." />
      <Specialties specialties={services} />
      <CTABanner
        title="Have a project in mind?"
        subtitle="We'd love to hear it from you!"
        button={{ text: "Say Hello", url: "/contact" }}
      />
    </Page>
  );
};

const getStaticProps = async () => {
  const res = await fetchEntries("services");

  const services = res.map((entry) => ({ id: entry.sys.id, ...entry.fields }));
  return { props: { services } };
};

export { getStaticProps };
export default ServicesPage;
