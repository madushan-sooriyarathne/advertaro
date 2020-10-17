import styled from "styled-components";

const Page = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Page;
