import styled from "styled-components";

const Section = styled.section`
  grid-column: full-start / full-end;
  min-height: 95vh;
  padding: 10rem 5rem;
  padding-top: ${(props) => `calc(${props.theme.navBarHeight} + 3rem)`};
  clip-path: polygon(0% 0%, 100% 0%, 100% 95%, 0% 100%);

  background: ${(props) =>
    `url(${props.img}), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,237,235,1) 41%, rgba(255,186,8,1) 100%)`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr minmax(min-content, 90rem) 1fr;
  align-items: center;
  justify-items: center;
`;

const TitleGroup = styled.div`
  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    text-align: center;
  }
`;

export { Section, TitleGroup };
