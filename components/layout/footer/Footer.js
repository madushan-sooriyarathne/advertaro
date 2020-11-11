import Link from "next/link";

import {
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
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterSection>
      <CompanyIntroGroup>
        <CompanyName>Advertaro</CompanyName>
        <CompanyDescription>
          Advertaro is a full-service Web development & Internet marketing
          company offering innovative solutions to small to mid size companies
          across the globe.
        </CompanyDescription>
      </CompanyIntroGroup>
      <FooterNavigationGroup>
        <FooterColumnHeading>Links</FooterColumnHeading>
        <FooterLinksGroup>
          <Link href="/about">
            <FooterNavLink>About Us</FooterNavLink>
          </Link>
          <Link href="/about#services">
            <FooterNavLink>Our Services</FooterNavLink>
          </Link>
          <Link href="/case-studies">
            <FooterNavLink>Case Studies</FooterNavLink>
          </Link>
          <Link href="/contact">
            <FooterNavLink>Contact Us</FooterNavLink>
          </Link>
        </FooterLinksGroup>
      </FooterNavigationGroup>
      <ContactGroup>
        <FooterColumnHeading>Contact</FooterColumnHeading>
        <ContactDetailsHeading>Advertaro Creative Agency</ContactDetailsHeading>
        <ContactItemGroup>
          <ContactItem>
            <ContactIcon>
              <use xlinkHref="/static/img/svg/sprites.svg#location"></use>
            </ContactIcon>
            <ContactItemText>
              No. 18, Gnanathilake Mawatha,
              <br />
              Mt. Lavinia, Sri Lanka.
            </ContactItemText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <use xlinkHref="/static/img/svg/sprites.svg#phone"></use>
            </ContactIcon>
            <ContactItemText>+94 71 688 0657</ContactItemText>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <use xlinkHref="/static/img/svg/sprites.svg#mail"></use>
            </ContactIcon>
            <ContactItemText>hello@advertaro.lk</ContactItemText>
          </ContactItem>
        </ContactItemGroup>
        <SocialMediaIconGroup>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <SocialMediaIcon>
              <use xlinkHref="/static/img/svg/sprites.svg#facebook"></use>
            </SocialMediaIcon>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <SocialMediaIcon>
              <use xlinkHref="/static/img/svg/sprites.svg#instagram"></use>
            </SocialMediaIcon>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <SocialMediaIcon>
              <use xlinkHref="/static/img/svg/sprites.svg#linkedin"></use>
            </SocialMediaIcon>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <SocialMediaIcon>
              <use xlinkHref="/static/img/svg/sprites.svg#whatsapp"></use>
            </SocialMediaIcon>
          </a>
        </SocialMediaIconGroup>
      </ContactGroup>
      <CopyrightGroup>
        <Copyright>
          {new Date().getFullYear()} © Advertaro Creative Agency.
        </Copyright>
      </CopyrightGroup>
    </FooterSection>
  );
};

export default Footer;
