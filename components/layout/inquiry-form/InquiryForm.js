import InputField from "../../input-field/InputField";
import SubmitButton from "../../buttons/submit-button/SubmitButton";

import { FormGroup } from "./InquiryFormStyles";

const InquiryForm = ({ style = {} }) => {
  return (
    <FormGroup style={style}>
      <InputField
        name="Your Name"
        id="name"
        placeholder="Your Name"
        type="text"
      />
      <InputField name="Email" id="email" placeholder="Email" type="email" />
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
  );
};

export default InquiryForm;
