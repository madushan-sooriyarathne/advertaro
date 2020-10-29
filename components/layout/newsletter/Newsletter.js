import {
  NewsletterSection,
  NewsletterWrapper,
  FormGroup,
  TitleGroup,
} from "./NewsletterStyles";

import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import InputField from "../../input-field/InputField";
import SubmitButton from "../../buttons/submit-button/SubmitButton";

const Newsletter = () => {
  return (
    <NewsletterSection>
      <NewsletterWrapper>
        <TitleGroup>
          <MainHeading>Receive Exclusive Offers and Value Deals</MainHeading>
          <SecondaryHeading>Subscribe to our Newsletter</SecondaryHeading>
        </TitleGroup>
        <FormGroup>
          <InputField
            type="text"
            name="Your Email"
            id="newsletter"
          ></InputField>
          <SubmitButton>Subscribe</SubmitButton>
        </FormGroup>
      </NewsletterWrapper>
    </NewsletterSection>
  );
};

export default Newsletter;
