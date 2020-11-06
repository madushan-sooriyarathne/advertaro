import dynamic from "next/dynamic";
import Page from "../components/layout/page/Page";
import ContactDetailsSection from "../components/layout/contact-details/ContactDetailsSection";

const Contact = () => {
  return (
    <Page>
      <ContactDetailsSection />
    </Page>
  );
};

export default Contact;
