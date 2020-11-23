import { fetchEntries } from "../contentful/contentFetch";

import HeroBanner from "../components/layout/HeroBanner/HeroBanner";
import AboutSection from "../components/layout/about/AboutSection";
import Page from "../components/layout/page/Page";
import ServicesSection from "../components/layout/services/ServicesSection";
import PartnerSection from "../components/layout/partners/PartnersSection";
import ContactSection from "../components/layout/contact/ContactSection";
import Newsletter from "../components/layout/newsletter/Newsletter";

const Index = ({ services, partners }) => {
  return (
    <Page>
      <HeroBanner />
      <AboutSection />
      <ServicesSection services={services} />
      <PartnerSection partners={partners} />
      <ContactSection />
      <Newsletter />
    </Page>
  );
};

const getStaticProps = async () => {
  const serviceEntries = await fetchEntries("services");
  const partnerEntries = await fetchEntries("partners");

  const services = serviceEntries.map((entry) => ({
    id: entry.sys.id,
    ...entry.fields,
  }));

  const partners = partnerEntries.map((entry) => ({
    id: entry.sys.id,
    ...entry.fields,
  }));

  return { props: { services, partners } };
};

export { getStaticProps };

export default Index;
