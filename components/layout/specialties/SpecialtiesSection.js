import { Section, TitleGroup, ItemGroup } from "./SpecialtiesSectionStyles";

import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import ImageContentBox from "../../image-content-box/ImageContentBox";

const Specialties = ({ specialties }) => {
  return (
    <Section id="services">
      <TitleGroup>
        <MainHeading>Our Specialties</MainHeading>
        <SecondaryHeading>Why choose advertaro?</SecondaryHeading>
      </TitleGroup>
      <ItemGroup>
        {specialties.map((service) => (
          <ImageContentBox
            image={service.serviceImage.fields.file.url}
            title={service.title}
            description={service.description}
            key={service.id}
          />
        ))}
      </ItemGroup>
    </Section>
  );
};

export default Specialties;
