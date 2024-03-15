import { useState } from "react";
import UserAvatar from "./UserAvatar";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MainNav from "./MainNav";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";

const HeaderStyle = styled.header`
  background-color: var(--background-color);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const BurgerButton = styled.button`
  display: none;
  background: var(--background-color);
  border: none;
  cursor: pointer;
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavContainer = styled.div`
  display: none;
  background-color: var(--background-color);

  @media (max-width: 768px) {
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 110px;
    left: 0;
    right: 0;
    z-index: 998;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderStyle>
        <Logo />
        <NavContainer>
          <MainNav />
          <UserAvatar />
          <HeaderMenu />
        </NavContainer>
        <BurgerButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiXMark /> : <HiOutlineBars3 />}
        </BurgerButton>
      </HeaderStyle>
      {isOpen && (
        <MobileNavContainer>
          <MainNav />

          <UserAvatar />
          <HeaderMenu />
        </MobileNavContainer>
      )}
    </>
  );
};

export default Header;
