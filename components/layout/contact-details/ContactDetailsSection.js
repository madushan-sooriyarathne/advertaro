import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import InquiryForm from "../inquiry-form/InquiryForm";

import {
  ContactDetailsWrapper,
  ContentWrapper,
  MapWrapper,
  TitleGroup,
  ContactDetails,
  CompanyName,
  ContactItemsGroup,
  ContactItem,
} from "./ContactDetailsSectionStyles";
import FullWidthMap from "../maps/FullWidthMap";

const ContactDetailsSection = () => {
  return (
    <ContactDetailsWrapper>
      <ContentWrapper>
        <TitleGroup>
          <MainHeading>Let's Talk Business</MainHeading>
          <SecondaryHeading>or something interesting</SecondaryHeading>
        </TitleGroup>
        <InquiryForm />
        <ContactDetails>
          <CompanyName>Advertaro Creative Agency</CompanyName>
          <ContactItemsGroup>
            <ContactItem>
              No 18, Gnanathilake Mawatha, Mount Lavinia.
            </ContactItem>
            <ContactItem>+94 777 031 678</ContactItem>
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
