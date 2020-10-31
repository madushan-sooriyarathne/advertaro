import dynamic from "next/dynamic";
import Page from "../components/layout/page/Page";
import Header from "../components/layout/header/Header";
import ContactDetailsSection from "../components/layout/contact-details/ContactDetailsSection";

const FullWidthMap = dynamic(
  () => import("../components/layout/maps/FullWidthMap"),
  { ssr: false }
);

const Contact = () => {
  return (
    <Page>
      <Header title="Contact us" />
      <ContactDetailsSection />
    </Page>
  );
};

export default Contact;
