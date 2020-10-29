import useInputState from "../../../hooks/UseInputState";

import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import InputField from "../../input-field/InputField";
import SubmitButton from "../../buttons/submit-button/SubmitButton";

import {
  ContactDetailsWrapper,
  ContentWrapper,
  TitleGroup,
  ContactForm,
  ContactDetails,
  CompanyName,
  ContactItemsGroup,
  ContactItem,
  Icon,
  ItemName,
} from "./ContactDetailsSectionStyles";

const ContactDetailsSection = () => {
  const [name, updateName, resetName] = useInputState();
  const [email, updateEmail, resetEmail] = useInputState();
  const [company, updateCompany, resetCompany] = useInputState();
  const [message, updateMessage, resetMessage] = useInputState();

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `name: ${name}, emal: ${email}, company: ${company}, message: ${message}`
    );

    //send email with details from the from.

    // Reset fields
    resetName();
    resetEmail();
    resetCompany();
    resetMessage();
  };
  return (
    <ContactDetailsWrapper>
      <ContentWrapper>
        <TitleGroup>
          <MainHeading>Let's Talk Business</MainHeading>
          <SecondaryHeading>or something interesting</SecondaryHeading>
        </TitleGroup>
        <ContactForm onSubmit={handleSubmit}>
          <InputField
            id="name"
            name="Your Name"
            type="text"
            value={name}
            handleUpdate={updateName}
          />
          <InputField
            id="email"
            name="Email"
            type="email"
            value={email}
            handleUpdate={updateEmail}
          />
          <InputField
            id="company"
            name="Company"
            type="text"
            value={company}
            handleUpdate={updateCompany}
            required={false}
          />
          <InputField
            id="message"
            name="Your Thoughts"
            type="textarea"
            value={message}
            handleUpdate={updateMessage}
          />
          <SubmitButton>Send</SubmitButton>
        </ContactForm>
        <ContactDetails>
          <CompanyName>Advertaro Creative Agency</CompanyName>
          <ContactItemsGroup>
            <ContactItem>
              <Icon>
                <use xlinkHref="/static/img/svg/sprites.svg#location" />
              </Icon>
              <ItemName>No 18, Gnanathilake Mawatha, Mount Lavinia.</ItemName>
            </ContactItem>
            <ContactItem>
              <Icon>
                <use xlinkHref="/static/img/svg/sprites.svg#phone" />
              </Icon>
              <ItemName>+94 71 688 0657</ItemName>
            </ContactItem>
            <ContactItem>
              <Icon>
                <use xlinkHref="/static/img/svg/sprites.svg#mail" />
              </Icon>
              <ItemName>hello@advertaro.lk</ItemName>
            </ContactItem>
          </ContactItemsGroup>
        </ContactDetails>
      </ContentWrapper>
    </ContactDetailsWrapper>
  );
};

export default ContactDetailsSection;
