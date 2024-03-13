import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  background-color: #fff;
  padding: 2rem;
  overflow: auto;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
