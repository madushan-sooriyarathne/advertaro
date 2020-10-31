import useInputState from "../../../hooks/UseInputState";

import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import InputField from "../../input-field/InputField";
import SubmitButton from "../../buttons/submit-button/SubmitButton";

import {
  ContactDetailsWrapper,
  ContentWrapper,
  MapWrapper,
  TitleGroup,
  ContactForm,
  ContactDetails,
  CompanyName,
  ContactItemsGroup,
  ContactItem,
} from "./ContactDetailsSectionStyles";
import FullWidthMap from "../maps/FullWidthMap";

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
              No 18, Gnanathilake Mawatha, Mount Lavinia.
            </ContactItem>
            <ContactItem>+94 71 688 0657</ContactItem>
            <ContactItem>hello@advertaro.lk</ContactItem>
          </ContactItemsGroup>
        </ContactDetails>
      </ContentWrapper>
      <MapWrapper>
        <FullWidthMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapWrapper>
    </ContactDetailsWrapper>
  );
};

export default ContactDetailsSection;
