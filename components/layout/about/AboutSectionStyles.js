import styled from "styled-components";

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 3rem;
  color: ${(props) => props.theme.colorBlack};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 10rem) [mid-start] 1fr [mid-end] minmax(
      6rem,
      10rem
    )
    [full-end];
  margin: 8rem 0;
  align-items: center;
  justify-items: center;
`;

const Group = styled.div`
  grid-column: mid-start / mid-end;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, Group, Description };
