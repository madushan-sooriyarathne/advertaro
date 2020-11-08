import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import {
  Section,
  ImageBox,
  CaseStudiesIcon,
  TitleGroup,
  SubTitle,
  DetailsGroup,
  ProjectInfoGroup,
  DetailItem,
  Title,
  Description,
  SubDescription,
} from "./CaseStudyItemStyles";

const CaseStudyItem = ({ caseStudy }) => {
  return (
    <Section>
      <TitleGroup>
        <CaseStudiesIcon
          src="/static/img/svg/case-study.svg"
          alt="case study icon"
        />
        <MainHeading>{caseStudy.projectName}</MainHeading>
        <SecondaryHeading>Case study</SecondaryHeading>
      </TitleGroup>
      <ImageBox image={caseStudy.cover.fields.file.url} />

      <DetailsGroup>
        <ProjectInfoGroup>
          <DetailItem>
            <SubTitle>Industry</SubTitle>
            <SubDescription>{caseStudy.industry}</SubDescription>
          </DetailItem>
          <DetailItem>
            <SubTitle>Nature of Business</SubTitle>
            <SubDescription>{caseStudy.natureOfBusiness}</SubDescription>
          </DetailItem>
          <DetailItem>
            <SubTitle>Project Type</SubTitle>
            <SubDescription>{caseStudy.projectType}</SubDescription>
          </DetailItem>
        </ProjectInfoGroup>

        <DetailItem>
          <Title>Initiation</Title>
          <Description>{caseStudy.initiation}</Description>
        </DetailItem>
      </DetailsGroup>
    </Section>
  );
};

export default CaseStudyItem;
