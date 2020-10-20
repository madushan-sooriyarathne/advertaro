import HeroBanner from "../components/layout/HeroBanner/HeroBanner";
import AboutSection from "../components/layout/about/AboutSection";
import Page from "../components/layout/page/Page";
import ServicesSection from "../components/layout/services/ServicesSection";

const Index = () => {
  return (
    <Page>
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
    </Page>
  );
};

export default Index;
