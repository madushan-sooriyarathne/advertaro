import styled from "styled-components";

const FooterSection = styled.div`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-template-areas:
    "ci na co"
    "ri ri ri";
  grid-auto-rows: max-content;
  gap: 5rem;
  align-items: start;
  justify-items: center;
  background-image: linear-gradient(
    313deg,
    rgba(169, 28, 115, 1) 21.6%,
    rgba(219, 112, 54, 1) 92.2%
  );
  padding: 10rem 40rem 5rem 40rem;

  ${(props) => props.theme.responsiveHighest} {
    padding: 10rem 20rem 5rem 20rem;
  }

  ${(props) => props.theme.responsiveLow} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    grid-template-areas:
      "ci ci"
      "na co"
      "ri ri";
    justify-items: start;
    padding: 10rem;
  }

  ${(props) => props.theme.responsivePhone} {
    grid-template-columns: minmax(min-content, 1fr);
    grid-template-areas:
      "ci"
      "na"
      "co"
      "ri";
    padding: 10rem 5rem;
  }
`;

const CompanyIntroGroup = styled.div`
  grid-area: ci;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CompanyName = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.colorWhite};
  margin-bottom: 2rem;
`;

const CompanyDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.colorWhite};
`;

const FooterNavigationGroup = styled.div`
  grid-area: na;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FooterLinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const FooterColumnHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontPrimary};
  text-transform: uppercase;
  color: ${(props) => props.theme.colorWhite};
  padding: 0.2rem 0;
  border-bottom: ${(props) => `2px solid ${props.theme.colorWhite}`};
  margin-bottom: 2rem;
`;

const FooterNavLink = styled.a`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.colorWhite};
  background-color: transparent;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: transform 0.2s ease-in, border-bottom 0.2s ease-in-out,
    background-color 0.2s ease;

  &:hover {
    transform: translateX(3px);
    border-bottom: ${(props) => `1px solid ${props.theme.colorWhite}`};
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ContactGroup = styled.div`
  grid-area: co;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ContactDetailsHeading = styled.p`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.colorWhite};
  margin-bottom: 2rem;
`;

const ContactItemGroup = styled(FooterLinksGroup)`
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ContactItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: start;
  justify-items: start;

  width: 100%;
`;

const ContactIcon = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  fill: ${(props) => props.theme.colorWhite};
`;

const ContactItemText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.colorWhite};
`;

const SocialMediaIconGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

const SocialMediaIcon = styled.svg`
  width: 3rem;
  height: 5rem;
  fill: ${(props) => props.theme.colorWhite};
  transition: transform 0.2s ease-in;

  &:hover {
    transform: rotate(5deg) scale(1.05);
  }
`;

const CopyrightGroup = styled.div`
  grid-area: ri;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  font-style: italic;
  color: ${(props) => props.theme.colorWhite};
`;

export {
  FooterSection,
  CompanyIntroGroup,
  CompanyName,
  CompanyDescription,
  FooterNavigationGroup,
  FooterLinksGroup,
  FooterColumnHeading,
  FooterNavLink,
  ContactGroup,
  ContactDetailsHeading,
  ContactItemGroup,
  ContactItem,
  ContactIcon,
  ContactItemText,
  SocialMediaIconGroup,
  SocialMediaIcon,
  CopyrightGroup,
  Copyright,
};
