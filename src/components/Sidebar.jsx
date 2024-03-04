import styled from "styled-components";

const StyledSidebar = styled.aside`
  padding: 3rem 2.4rem;
  background-color: #fff;
  border-right: 1px solid #ccc;

  grid-row: 1 / -1;
`;

const Sidebar = () => {
  return <StyledSidebar>Sidebar</StyledSidebar>;
};

export default Sidebar;
