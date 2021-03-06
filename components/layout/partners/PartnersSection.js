import {
  Section,
  HeadingGroup,
  Partners,
  ButtonWrapper,
} from "./PartnersSectionStyles";
import PartnerBox from "../../partner-box/PartnerBox";
import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import CommonButtonDark from "../../buttons/common-button/CommonButtonDark";

const PartnerSection = ({ partners }) => {
  return (
    <Section>
      <HeadingGroup>
        <MainHeading>Clients & Partners</MainHeading>
        <SecondaryHeading>We work with these amazing people</SecondaryHeading>
      </HeadingGroup>
      <Partners>
        {partners.map((partner) => (
          <PartnerBox
            img={partner.image.fields.file.url}
            name={partner.name}
            key={partner.id}
          />
        ))}
      </Partners>
      <ButtonWrapper>
        <CommonButtonDark text="Work with us" url="/contact" />
      </ButtonWrapper>
    </Section>
  );
};

export default PartnerSection;
