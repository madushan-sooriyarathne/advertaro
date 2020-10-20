import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  min-width: 35rem;
  min-height: 35rem;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-color: transparent;
  background-size: 20rem;
  background-repeat: no-repeat;
  padding: 1rem;
  transition: transform 0.2s ease-out, background-color 0.2s ease-in;
  /* box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.1); */

  &:hover {
    background-color: #273440;
    transform: translateY(-0.5rem);
    box-shadow: 0 8px 16px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.a`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #f57138;
  border-radius: 2rem;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  ${Box}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export { Box, Button };
