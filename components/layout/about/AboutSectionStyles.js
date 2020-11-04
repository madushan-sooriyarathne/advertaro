import styled from "styled-components";

const Container = styled.section`
  grid-column: content-start / content-end;

  margin: 8rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.colorBlack};
`;

export { Container, TitleGroup, Description };
