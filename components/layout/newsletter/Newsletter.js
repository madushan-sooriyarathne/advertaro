import { useContext } from "react";
import { SnackBarDispatchContext } from "../../../context/SnackBarContext";
import useInputState from "../../../hooks/UseInputState";

import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import InputField from "../../input-field/InputField";
import SubmitButton from "../../buttons/submit-button/SubmitButton";

import { NewsletterSection, FormGroup, TitleGroup } from "./NewsletterStyles";
const Newsletter = () => {
  // context
  const setMessage = useContext(SnackBarDispatchContext);

  // state
  const [email, updateEmail, resetEmail] = useInputState("");

  const handleSubmit = (event) => {
    // TODO: handle saving the submitted email to mailchimp or our own DB
    // until that process run show  a loading spinner in the button

    event.preventDefault();
    resetEmail();
    setMessage(
      "Thanks for subscribing to our newsletter. A confirmation email has been sent!"
    );
    setTimeout(() => {
      setMessage();
    }, 5000);
  };

  return (
    <NewsletterSection>
      <TitleGroup>
        <MainHeading>Receive Continuous updates</MainHeading>
        <SecondaryHeading>Subscribe to our Newsletter</SecondaryHeading>
      </TitleGroup>
      <FormGroup onSubmit={handleSubmit}>
        <InputField
          type="email"
          name="Your Email"
          id="newsletter"
          value={email}
          handleUpdate={updateEmail}
        ></InputField>
        <SubmitButton>Subscribe</SubmitButton>
      </FormGroup>
    </NewsletterSection>
  );
};

export default Newsletter;
