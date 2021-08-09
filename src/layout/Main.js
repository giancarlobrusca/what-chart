import styled from "styled-components";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header>What-Chart?</Header>
      {children}
    </div>
  );
};

const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
`;
