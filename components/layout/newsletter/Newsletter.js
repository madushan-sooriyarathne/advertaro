import { useContext, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    resetEmail();

    // show loading spinner
    setLoading(true);

    const res = await fetch("/api/subscribe", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    // hide loading spinner
    setLoading(false);

    if (res.status === 200) {
      // show success notification
      setMessage(
        "Thanks for subscribing to our newsletter. A confirmation email has been sent!"
      );
      setTimeout(() => {
        setMessage();
      }, 5000);
    } else {
      // show success notification
      setMessage(
        `There's a problem with subscribing you into our newsletter. Please bare with us and try again shortly`
      );
      setTimeout(() => {
        setMessage();
      }, 5000);
    }
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
        <SubmitButton loading={loading}>Subscribe</SubmitButton>
      </FormGroup>
    </NewsletterSection>
  );
};

export default Newsletter;
