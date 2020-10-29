import styled from "styled-components";

const ContactDetailsWrapper = styled.section`
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridTemplateColumns};

  width: 100%;
  height: 100%;
  margin: 10rem 0 5rem 0;
`;

const ContentWrapper = styled.div`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);
  grid-template-rows: repeat(2, [row-start] max-content [row-end]);
  justify-items: center;
  align-items: center;
`;

const TitleGroup = styled.div`
  grid-column: col-start / col-end 2;
  grid-row: row-start / row-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

const ContactForm = styled.form`
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 5rem;

  & > * {
    margin-bottom: 2rem;
  }
`;

const ContactDetails = styled.div`
  justify-self: stretch;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 5rem;
`;

const CompanyName = styled.p`
  font-size: 4rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colorPrimary};
  margin-bottom: 5rem;
`;

const ContactItemsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  & > *:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const ContactItem = styled.div`
  display: grid;
  grid-template-columns: [icon-start] 10% [icon-end details-start] 85% [details-end];
  justify-items: start;
  align-items: center;
`;

const Icon = styled.svg`
  grid-column: icon-start / icon-end;

  fill: ${(props) => props.theme.colorSecondary};
  width: 3rem;
  height: 3rem;
`;

const ItemName = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.colorSecondary};
`;

export {
  ContactDetailsWrapper,
  ContentWrapper,
  TitleGroup,
  ContactForm,
  ContactDetails,
  CompanyName,
  ContactItemsGroup,
  ContactItem,
  Icon,
  ItemName,
};
