import HeroBanner from "../components/layout/HeroBanner/HeroBanner";
import AboutSection from "../components/layout/about/AboutSection";
import Page from "../components/layout/page/Page";
import ServicesSection from "../components/layout/services/ServicesSection";
import PartnerSection from "../components/layout/partners/PartnersSection";
import ContactSection from "../components/layout/contact/ContactSection";
import Footer from "../components/layout/footer/Footer";

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
            url: "/case-studies/taylors-hill",
          },
          {
            img: "/static/img/partners/clean-and-dusted.png",
            url: "/case-studies/clean-and-dusted",
          },
        ]}
      />
      <ContactSection />
    </Page>
  );
};

export default Index;
