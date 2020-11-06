import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";

import {
  Section,
  TitleGroup,
  Title,
  Description,
} from "./TitledDescriptionStyles";

const TitledDescription = ({ title, subtitle, description }) => {
  return (
    <Section>
      {title && (
        <TitleGroup>
          <Title>{title}</Title>{" "}
          {subtitle && <SecondaryHeading>{subtitle}</SecondaryHeading>}
        </TitleGroup>
      )}
      <Description>{description}</Description>
    </Section>
  );
};

export default TitledDescription;
