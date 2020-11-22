import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  /* min-height: 100vh; */
  width: 100%;
  padding: ${(props) => `calc(${props.theme.navBarHeight} + 5rem) 0 10rem 0`};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ImageBox = styled.div`
  grid-column: col-start / col-end;

  width: 100%;
  padding-top: 55%;
  margin-bottom: 5rem;

  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 5rem;

  & > * {
    text-align: center;
  }
`;

const CaseStudiesIcon = styled.img`
  width: 7rem;
  height: 7rem;
  margin-bottom: 1rem;
`;

const DetailsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 15rem;

  & > :not(:last-child) {
    margin-bottom: 5rem;
  }

  ${(props) => props.theme.responsiveLower} {
    padding: 0;
  }
`;

const ProjectInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.colorPrimaryDark};

  margin-bottom: 1rem;
`;

const SubTitle = styled(Title)`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: justify;
  hyphens: auto;
  color: ${(props) => props.theme.colorSecondary};
`;

const SubDescription = styled(Description)`
  font-weight: 400;
  font-size: 1.4rem;
`;

export {
  Section,
  ImageBox,
  CaseStudiesIcon,
  TitleGroup,
  DetailsGroup,
  ProjectInfoGroup,
  DetailItem,
  Title,
  SubTitle,
  Description,
  SubDescription,
};
