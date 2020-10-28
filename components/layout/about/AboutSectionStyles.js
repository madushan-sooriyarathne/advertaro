import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
  margin: 8rem 0;
  align-items: center;
  justify-items: center;
`;

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 3rem;
  color: ${(props) => props.theme.colorBlack};
`;

const Group = styled.div`
  grid-column: content-start / content-end;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, Group, Description };
