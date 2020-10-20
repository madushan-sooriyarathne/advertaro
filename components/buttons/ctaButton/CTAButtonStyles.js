import styled from "styled-components";

const CallToActionButton = styled.div`
  position: relative;
  padding: 1rem 1.5rem;
  border: 2px solid #fff;

  outline: none;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;

  cursor: pointer;
  transition: color 0.3s ease-in, background-color 0.3s ease-in-out;

  &:hover {
    color: #040404;
    background-color: #fff;
  }
`;

export { CallToActionButton };
