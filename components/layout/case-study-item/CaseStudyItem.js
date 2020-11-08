import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import {
  Section,
  ImageBox,
  DetailsBox,
  TitleGroup,
  DetailsGroup,
  DetailItem,
  Title,
  Description,
} from "./CaseStudyItemStyles";

const CaseStudyItem = ({ caseStudy }) => {
  return (
    <Section>
      <ImageBox image={caseStudy.cover.fields.file.url} />
      <DetailsBox>
        <TitleGroup>
          <MainHeading>{caseStudy.projectName}</MainHeading>
          <SecondaryHeading>{caseStudy.industry}</SecondaryHeading>
        </TitleGroup>
        <DetailsGroup>
          <DetailItem>
            <Title>Nature of Business</Title>
            <Description>{caseStudy.natureOfBusiness}</Description>
          </DetailItem>
          <DetailItem>
            <Title>Project Type</Title>
            <Description>{caseStudy.projectType}</Description>
          </DetailItem>
          <DetailItem>
            <Title>Initiation</Title>
            <Description>{caseStudy.initiation}</Description>
          </DetailItem>
        </DetailsGroup>
      </DetailsBox>
    </Section>
  );
};

export default CaseStudyItem;
