import { NewsletterSection, FormGroup, TitleGroup } from "./NewsletterStyles";

import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import InputField from "../../input-field/InputField";
import SubmitButton from "../../buttons/submit-button/SubmitButton";

const Newsletter = () => {
  return (
    <NewsletterSection>
      <TitleGroup>
        <MainHeading>Receive Continuous updates</MainHeading>
        <SecondaryHeading>Subscribe to our Newsletter</SecondaryHeading>
      </TitleGroup>
      <FormGroup>
        <InputField type="text" name="Your Email" id="newsletter"></InputField>
        <SubmitButton>Subscribe</SubmitButton>
      </FormGroup>
    </NewsletterSection>
  );
};

export default Newsletter;
