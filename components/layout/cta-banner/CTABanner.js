import { Section, TitleGroup } from "./CTABannerStyles";
import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import CommonButton from "../../buttons/common-button/CommonButtonDark";

const CTABanner = ({ title, subtitle, button }) => {
  return (
    <Section>
      <TitleGroup>
        {title && <MainHeading>{title}</MainHeading>}
        {subtitle && <SecondaryHeading>{subtitle}</SecondaryHeading>}
      </TitleGroup>
      {button && <CommonButton text={button.text} url={button.url} />}
    </Section>
  );
};

export default CTABanner;
