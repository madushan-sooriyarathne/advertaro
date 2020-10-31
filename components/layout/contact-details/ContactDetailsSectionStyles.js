import styled from "styled-components";

const ContactDetailsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);

  width: 100%;
  min-height: 100vh;
`;

const MapWrapper = styled.div`
  grid-column: col-start 2 / col-end 2;
  background-color: ${(props) => props.theme.colorPrimary};
`;

const ContentWrapper = styled.div`
  grid-column: col-start / col-end;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 5rem;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 5rem;
`;

const ContactForm = styled.form`
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 3rem;

  & > * {
    margin-bottom: 2rem;
  }
`;

const ContactDetails = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const CompanyName = styled.p`
  font-size: 3rem;
  font-weight: 700;
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
  ContactForm,
  ContactDetails,
  CompanyName,
  ContactItemsGroup,
  ContactItem,
};
