import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1rem 2rem;

  width: 100%;
  height: 100%;
  min-width: 10rem;
  min-height: 45rem;
  background-image: ${(props) =>
    `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-image: ${(props) =>
      `linear-gradient(0deg, rgba(55,22,2,0.6) 0%, rgba(59,21,3,0) 100%), url(${props.image})`};
    transform: translateY(-0.5rem);
    box-shadow: 0 8px 16px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Name = styled.p`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(0.5rem);
  }
`;

export { Box, Name };
