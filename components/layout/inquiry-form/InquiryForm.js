import { useContext } from "react";

import { SnackBarDispatchContext } from "../../../context/SnackBarContext";
import useInputState from "../../../hooks/UseInputState";

import InputField from "../../input-field/InputField";
import SubmitButton from "../../buttons/submit-button/SubmitButton";

import { FormGroup } from "./InquiryFormStyles";

const InquiryForm = ({ style = {} }) => {
  // context
  const setMessage = useContext(SnackBarDispatchContext);

  // state
  const [name, updateName, resetName] = useInputState("");
  const [email, updateEmail, resetEmail] = useInputState();
  const [company, updateCompany, resetCompany] = useInputState();
  const [message, updateMessage, resetMessage] = useInputState();

  // submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO:  implement a server side part

    resetName();
    resetEmail();
    resetCompany();
    resetMessage();

    // show the notification
    setMessage(
      "Thanks for your message! We will get back to you as soon as possible."
    );
    setTimeout(() => {
      setMessage();
    }, 5000);
  };

  return (
    <FormGroup style={style} onSubmit={handleSubmit}>
      <InputField
        name="Your Name"
        id="name"
        placeholder="Your Name"
        type="text"
        value={name}
        handleUpdate={updateName}
      />
      <InputField
        name="Email"
        id="email"
        placeholder="Email"
        type="email"
        value={email}
        handleUpdate={updateEmail}
      />
      <InputField
        name="Company"
        id="company"
        placeholder="Company"
        type="text"
        value={company}
        handleUpdate={updateCompany}
      />
      <InputField
        name="Message"
        id="message"
        placeholder="Message"
        type="textarea"
        value={message}
        handleUpdate={updateMessage}
      />
      <SubmitButton>Submit</SubmitButton>
    </FormGroup>
  );
};

export default InquiryForm;