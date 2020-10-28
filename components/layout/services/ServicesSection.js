import MainHeading from "../../headings/main-heading/MainHeading";
import ItemBox from "../../item-box/ItemBox";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";

import {
  FirstBox,
  ContentWrapper,
  SecondBox,
  Section,
  ThirdBox,
  TitleGroup,
  ButtonWrapper,
} from "./ServicesSectionStyles";
import CommonButtonDark from "../../buttons/common-button/CommonButtonDark";

const ServicesSection = () => {
  return (
    <Section>
      <ContentWrapper>
        <TitleGroup>
          <MainHeading>What We Do</MainHeading>
          <SecondaryHeading>We help your business grow</SecondaryHeading>
        </TitleGroup>
        <FirstBox>
          <ItemBox
            name="Corporate Branding"
            img="/static/img/corporate-branding.jpg"
          />
        </FirstBox>
        <SecondBox>
          <ItemBox
            name="Social Media Marketing"
            img="/static/img/social-media-marketing.jpg"
          />
        </SecondBox>
        <ThirdBox>
          <ItemBox
            name="Web Design & Development"
            img="/static/img/web-design.jpg"
          />
        </ThirdBox>
        <ButtonWrapper>
          <CommonButtonDark text="Explore Our Services" url="/services" />
        </ButtonWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default ServicesSection;
