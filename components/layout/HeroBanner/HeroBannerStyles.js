import styled, { keyframes } from "styled-components";

const SlideIn = keyframes`
from {
  opacity: 0;
  transform: translateX(-10px);
}

to {
  opacity: 1;
  transform: translateX(0);
}

`;

const Container = styled.section`
  grid-column: full-start / full-end;

  display: grid;

  grid-template-columns: repeat(2, minmax(max-content, 1fr));
  grid-auto-rows: max-content;
  grid-template-areas: "ct im";

  justify-content: center;
  align-items: center;

  height: 100vh;
  background: url("/static/img/svg/hero-bg.svg"),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(37, 16, 4, 1) 35%,
      rgba(0, 0, 0, 1) 100%
    );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  padding: 10rem 5rem;

  & > * {
    padding: 10rem;
  }

  ${(props) => props.theme.responsiveMediumHigh} {
    height: 80vh;
  }

  ${(props) => props.theme.responsiveMedium} {
    height: 70vh;
    & > * {
      padding: 5rem;
    }
  }

  ${(props) => props.theme.responsiveLower} {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "ct"
      "im";
    padding: 5rem;
  }

  @media only screen and (max-height: 56.25em) {
    background-position: center;
  }
`;

const CTAGroup = styled.div`
  grid-area: ct;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10rem 10rem 10rem 20rem;

  & > * {
    text-align: center;
  }

  ${(props) => props.theme.responsiveLower} {
    min-height: 50vh;
    align-items: center;
    padding: 10rem;
  }

  /* target the button at the last of element list */
  & > *:last-child {
    opacity: 0;
    transform: translateX(-10px);
    animation: ${SlideIn} ease-in forwards 0.3s;
    animation-delay: 0.7s;
  }
`;

const ImageWrapper = styled.div`
  grid-area: im;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 65rem;

  ${(props) => props.theme.responsiveHighest} {
    height: 60rem;
    align-self: flex-end;
  }

  ${(props) => props.theme.responsiveLower} {
    min-height: 65rem;
    align-items: center;
  }

  @media only screen and (max-height: 50em) and (min-width: 102em) {
    height: 55rem;
  }

  @media only screen and (max-height: 46.875em) and (min-width: 102em) {
    height: 45rem;
  }
  @media only screen and (max-height: 43.75em) and (min-width: 81.25em) {
    height: 40rem;
  }

  @media only screen and (max-height: 37.5em) {
    height: 50rem;
  }
`;

const Heading = styled.h2`
  font-size: 10rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fontSecondary};
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colorPrimary};
  margin-bottom: 2rem;

  transform: translateX(-10px);
  opacity: 0;
  animation: ${SlideIn} ease-in forwards 0.3s;
  animation-delay: 0.5s;
`;

const SubHeading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colorWhite};

  transform: translateX(-10px);
  opacity: 0;
  animation: ${SlideIn} ease-in forwards 0.3s;
  animation-delay: 0.3s;

  @media only screen and (max-width: 26.875em) {
    font-size: 2.5rem;
  }
`;

export { Container, CTAGroup, ImageWrapper, Image, Heading, SubHeading };
