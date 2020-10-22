import styled from "styled-components";

const FooterSection = styled.footer`
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [content-start] 130rem [content-end] minmax(
      6rem,
      1fr
    )
    [full-end];
  background-image: linear-gradient(
    313deg,
    rgba(169, 28, 115, 1) 21.6%,
    rgba(219, 112, 54, 1) 92.2%
  );
  padding: 10rem;
`;

const FooterWrapper = styled.div`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(3, [col-start] 1fr [col-end]);
  gap: 5rem;

  align-items: start;
  justify-items: center;
`;

const FooterGroup = styled.div`
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

const ContactItemGroup = styled(FooterLinksGroup)`
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const CompanyName = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: ${(props) => props.theme.colorWhite};
  margin-bottom: 2rem;
`;

const CompanyDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.colorWhite};
  letter-spacing: 1px;
`;

const FooterColumnHeading = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.colorWhite};
  padding: 0.2rem 0;
  border-bottom: ${(props) => `2px solid ${props.theme.colorWhite}`};
  margin-bottom: 2rem;
`;

const FooterNavLink = styled.a`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.colorWhite};
  outline: none;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: transform 0.2s ease-in, border-bottom 0.2s ease-in-out;

  &:hover {
    transform: translateX(3px);
    border-bottom: ${(props) => `1px solid ${props.theme.colorWhite}`};
  }
`;

const ContactDetailsHeading = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colorWhite};
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: start;
  justify-items: start;

  width: 100%;
`;

const ContactIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: ${(props) => props.theme.colorWhite};
`;

const ContactItemText = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colorWhite};
`;

const SocialMediaIconGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const SocialMediaIcon = styled.svg`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border: ${(props) => `2px solid ${props.theme.colorWhite}`};
  background-color: rgba(255, 255, 255, 0.1);
  fill: ${(props) => props.theme.colorWhite};
  transition: fill 0.2s ease-in, background-color 0.2s ease-in;

  &:hover {
    fill: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) => props.theme.colorWhite};
  }
`;

export {
  FooterSection,
  FooterWrapper,
  FooterGroup,
  FooterLinksGroup,
  ContactItemGroup,
  CompanyName,
  CompanyDescription,
  FooterColumnHeading,
  FooterNavLink,
  ContactDetailsHeading,
  ContactItem,
  ContactIcon,
  ContactItemText,
  SocialMediaIconGroup,
  SocialMediaIcon,
};
