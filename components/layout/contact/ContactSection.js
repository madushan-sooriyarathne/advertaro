import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import InquiryForm from "../inquiry-form/InquiryForm";

import {
  Section,
  FormWrapper,
  TitleGroup,
  ImageWrapper,
} from "./ContactSectionStyles";

const ContactSection = () => {
  return (
    <Section>
      <FormWrapper>
        <TitleGroup>
          <SecondaryHeading>Looking for a creative partner?</SecondaryHeading>
          <MainHeading>Let's Work Together</MainHeading>
        </TitleGroup>
        <InquiryForm />
      </FormWrapper>
      <ImageWrapper />
    </Section>
  );
};

export default ContactSection;
