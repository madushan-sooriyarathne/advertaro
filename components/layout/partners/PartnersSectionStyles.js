import styled from "styled-components";

const Section = styled.div`
  display: grid;
  grid-template-columns: [full-start] minmax(6rem, 10rem) [content-start] 1fr [content-end] minmax(
      6rem,
      10rem
    );
  grid-template-rows: [heading-start] max-content [heading-end content-start] max-content [content-end button-start] min-content [button-end];
  gap: 5rem;
  align-items: center;
  justify-items: center;
  margin: 10rem 0;
`;

const HeadingGroup = styled.div`
  grid-column: content-start / content-end;
  grid-row: heading-start / heading-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Partners = styled.div`
  grid-column: content-start / content-end;
  grid-row: content-start / content-end;

  display: flex;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 5rem;
  }
`;

const ButtonWrapper = styled.div`
  grid-column: content-start / content-end;
  grid-row: button-start / button-end;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Section, HeadingGroup, Partners, ButtonWrapper };
