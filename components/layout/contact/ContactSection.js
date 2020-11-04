import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import InputField from "../../input-field/InputField";
import SubmitButton from "../../buttons/submit-button/SubmitButton";

import {
  Section,
  FormWrapper,
  FormGroup,
  ImageWrapper,
} from "./ContactSectionStyles";

const ContactSection = () => {
  return (
    <Section>
      <FormWrapper>
        <SecondaryHeading>Looking for a creative partner?</SecondaryHeading>
        <MainHeading>Let's Work Together</MainHeading>
        <FormGroup>
          <InputField
            name="Your Name"
            id="name"
            placeholder="Your Name"
            type="text"
          />
          <InputField
            name="Email"
            id="email"
            placeholder="Email"
            type="email"
          />
          <InputField
            name="Company"
            id="company"
            placeholder="Company"
            type="text"
          />
          <InputField
            name="Message"
            id="message"
            placeholder="Message"
            type="textarea"
          />
          <SubmitButton>Submit</SubmitButton>
        </FormGroup>
      </FormWrapper>
      <ImageWrapper />
    </Section>
  );
};

export default ContactSection;
