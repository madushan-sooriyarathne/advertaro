import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";

import { Section, TitleGroup } from "./HeaderStyles";

const Header = ({ title, subtitle }) => {
  return (
    <Section img="/static/img/header-bg-1.png">
      <TitleGroup>
        <MainHeading>{title}</MainHeading>
        {subtitle && <SecondaryHeading>{subtitle}</SecondaryHeading>}
      </TitleGroup>
    </Section>
  );
};

export default Header;
