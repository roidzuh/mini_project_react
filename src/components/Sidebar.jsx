import styled from "styled-components";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  padding: 2.4rem;
  background-color: #fff;
  border-right: 1px solid #ccc;

  grid-row: 1 / -1;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
    </StyledSidebar>
  );
};

export default Sidebar;
