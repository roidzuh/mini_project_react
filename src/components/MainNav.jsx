import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavItem = styled.li`
  padding: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--text-color);
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 0.4rem;
  }

  &.active {
    color: #009ecb;
  }
`;

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <StyledNavLink to="/dashboard" activeclassname="active">
            Home
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/users" activeclassname="active">
            Users
          </StyledNavLink>
        </NavItem>
      </NavList>
    </nav>
  );
};

export default MainNav;
