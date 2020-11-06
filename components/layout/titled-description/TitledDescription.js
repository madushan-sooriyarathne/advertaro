import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";

import {
  Section,
  TitleGroup,
  Title,
  DescriptionGroup,
  Description,
} from "./TitledDescriptionStyles";

const TitledDescription = ({ title, subtitle, descriptions }) => {
  return (
    <Section>
      {title && (
        <TitleGroup>
          <Title>{title}</Title>{" "}
          {subtitle && <SecondaryHeading>{subtitle}</SecondaryHeading>}
        </TitleGroup>
      )}

      <DescriptionGroup>
        {descriptions.map((para) => (
          <Description>{para}</Description>
        ))}
      </DescriptionGroup>
    </Section>
  );
};

export default TitledDescription;
