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
  color: #333;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
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
        <NavItem>
          <StyledNavLink to="/account" activeclassname="active">
            Account
          </StyledNavLink>
        </NavItem>
      </NavList>
    </nav>
  );
};

export default MainNav;
