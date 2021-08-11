import styled from "styled-components";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header>What-Chart?</Header>
      <Content>{children}</Content>
      <Footer>Made with ☕️ and love</Footer>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 500;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.028), 0 0px 5.6px rgba(0, 0, 0, 0.04),
    0 0px 13.6px rgba(0, 0, 0, 0.052), 0 0px 45px rgba(0, 0, 0, 0.08);
`;

const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 100px);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  font-weight: 500;
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.028), 0 0px 5.6px rgba(0, 0, 0, 0.04),
    0 0px 13.6px rgba(0, 0, 0, 0.052), 0 0px 45px rgba(0, 0, 0, 0.08);
`;
