import { Section, TitleGroup, ItemGroup } from "./SpecialtiesSectionStyles";

import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import ImageContentBox from "../../image-content-box/ImageContentBox";

const Specialties = ({ specialties }) => {
  return (
    <Section>
      <TitleGroup>
        <MainHeading>Our Specialties</MainHeading>
        <SecondaryHeading>Why choose advertaro?</SecondaryHeading>
      </TitleGroup>
      <ItemGroup>
        {specialties.map((item) => (
          <ImageContentBox
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </ItemGroup>
    </Section>
  );
};

export default Specialties;
