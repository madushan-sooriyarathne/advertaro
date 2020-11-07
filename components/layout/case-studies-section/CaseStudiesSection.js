import CaseStudyListItem from "../../case-study-list-item/CaseStudyListItem";
import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import { Section, TitleGroup, ItemGroup } from "./CaseStudiesSectionStyles";
const CaseStudiesSection = ({ caseStudies }) => {
  return (
    <Section>
      <TitleGroup>
        <MainHeading>Case Studies</MainHeading>
        <SecondaryHeading>
          See for yourself how effective our content development and digital
          marketing strategies are.
        </SecondaryHeading>
      </TitleGroup>
      <ItemGroup>
        {caseStudies.map((item) => (
          <CaseStudyListItem
            title={item.projectName}
            image={item.cover.fields.file.url}
            id={item.id}
          />
        ))}
      </ItemGroup>
    </Section>
  );
};

export default CaseStudiesSection;
