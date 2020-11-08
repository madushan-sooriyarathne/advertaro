import HeroBanner from "../components/layout/HeroBanner/HeroBanner";
import AboutSection from "../components/layout/about/AboutSection";
import Page from "../components/layout/page/Page";
import ServicesSection from "../components/layout/services/ServicesSection";
import PartnerSection from "../components/layout/partners/PartnersSection";
import ContactSection from "../components/layout/contact/ContactSection";
import Newsletter from "../components/layout/newsletter/Newsletter";

const Index = () => {
  return (
    <Page>
      <HeroBanner />
      <AboutSection />

      <ServicesSection />
      <PartnerSection
        partners={[
          {
            img: "/static/img/partners/taylors-hill.png",
            name: "Taylors Hill Boutique Hotel",
          },
          {
            img: "/static/img/partners/clean-and-dusted.png",
            name: "Clean & Dusted",
          },
        ]}
      />
      <ContactSection />
      <Newsletter />
    </Page>
  );
};

export default Index;
