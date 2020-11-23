import MainHeading from "../../headings/main-heading/MainHeading";
import ItemBox from "../../item-box/ItemBox";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";

import {
  FirstBox,
  SecondBox,
  Section,
  ThirdBox,
  TitleGroup,
  ButtonWrapper,
} from "./ServicesSectionStyles";
import CommonButtonDark from "../../buttons/common-button/CommonButtonDark";

const ServicesSection = ({ services }) => {
  // extract data
  // filter first three services
  const filteredServices = services.filter((item, index) => index < 3);

  return (
    <Section>
      <TitleGroup>
        <MainHeading>What We Do</MainHeading>
        <SecondaryHeading>We help your business grow</SecondaryHeading>
      </TitleGroup>
      <FirstBox>
        <ItemBox service={filteredServices[0]} />
      </FirstBox>
      <SecondBox>
        <ItemBox service={filteredServices[1]} />
      </SecondBox>
      <ThirdBox>
        <ItemBox service={filteredServices[2]} />
      </ThirdBox>
      <ButtonWrapper>
        <CommonButtonDark text="Explore Our Services" url="/about#services" />
      </ButtonWrapper>
    </Section>
  );
};

export default ServicesSection;
