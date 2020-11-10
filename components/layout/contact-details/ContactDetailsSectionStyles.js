import styled from "styled-components";

const ContactDetailsWrapper = styled.section`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);

  width: 100%;
  min-height: 100vh;

  margin-top: ${(props) => `calc(${props.theme.navBarHeight} + 2rem)`};

  ${(props) => props.theme.responsiveMediumHigh} {
    min-height: 50vh;
  }

  ${(props) => props.theme.responsiveMediumLow} {
    grid-template-columns: [col-start] 1fr [col-end];
  }
`;

const MapWrapper = styled.div`
  grid-column: col-start 2 / col-end 2;
  background-color: ${(props) => props.theme.colorPrimary};

  ${(props) => props.theme.responsiveMediumLow} {
    height: 50vh;
    grid-column: col-start / col-end;
    grid-row: 2 / 3;
  }
`;

const ContentWrapper = styled.div`
  grid-column: col-start / col-end;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 5rem;

  background-color: ${(props) => props.theme.colorBg};

  ${(props) => props.theme.responsiveMediumLow} {
    grid-column: col-start / col-end;
    grid-row: 1 / 2;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 5rem;
`;

const ContactDetails = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  text-align: center;
`;

const CompanyName = styled.p`
  font-size: 3rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 2px;
  color: ${(props) => props.theme.colorPrimary};
  margin-bottom: 1.5rem;
`;

const ContactItemsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const ContactItem = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${(props) => props.theme.colorSecondary};
`;

export {
  ContactDetailsWrapper,
  ContentWrapper,
  MapWrapper,
  TitleGroup,
  ContactDetails,
  CompanyName,
  ContactItemsGroup,
  ContactItem,
};
