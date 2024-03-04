import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUserPlus,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #505050;
  padding: 1.2rem 3rem;
  transition: all 0.3s ease-in-out;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover,
  &:active,
  &.active:link {
    color: #0e0e0e;
    background-color: #f0f0f0;
    border-radius: 0.4rem;
  }
`;

const MainNav = () => {
  return (
    <nav>
      <StyledUl>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUserPlus />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </StyledUl>
    </nav>
  );
};

export default MainNav;
