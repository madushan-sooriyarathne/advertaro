import styled from "styled-components";

const Container = styled.section`
  grid-column: full-start / full-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colorBg};
  padding: 10rem 5rem;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  & > * {
    text-align: center;
  }
`;

const Description = styled.p`
  width: 50%;

  font-size: 1.8rem;
  font-weight: 500;
  font-family: ${(props) => props.theme.fontSecondary};
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.colorBlack};

  ${(props) => props.theme.responsiveHigher} {
    width: 80%;
  }

  ${(props) => props.theme.responsiveLower} {
    width: 100%;
  }
`;

export { Container, TitleGroup, Description };
