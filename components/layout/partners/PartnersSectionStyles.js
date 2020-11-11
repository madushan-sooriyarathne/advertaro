import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-rows: [heading-start] max-content [heading-end content-start] max-content [content-end button-start] min-content [button-end];
  gap: 5rem;
  align-items: center;
  justify-items: center;
  padding: 10rem 0;
`;

const HeadingGroup = styled.div`
  grid-row: heading-start / heading-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    text-align: center;
  }
`;

const Partners = styled.div`
  grid-row: content-start / content-end;

  display: flex;
  align-items: center;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 5rem;
  }

  ${(props) => props.theme.responsivePhone} {
    flex-direction: column;
    width: 100%;

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 3rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  grid-row: button-start / button-end;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Section, HeadingGroup, Partners, ButtonWrapper };
