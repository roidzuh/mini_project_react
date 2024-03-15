import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const StyledContainer = styled.div`
  display: flex;
`;
const StyledHeaderMenu = styled.button`
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0.3rem;

  &:hover {
    color: #0e0e0e;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const HeaderMenu = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
    theme === "dark" ? toggleTheme() : null;
  };

  return (
    <StyledContainer>
      <StyledHeaderMenu onClick={toggleTheme}>
        {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
      </StyledHeaderMenu>
      <StyledHeaderMenu onClick={handleLogout}>
        <HiOutlineArrowRightOnRectangle />
      </StyledHeaderMenu>
    </StyledContainer>
  );
};

export default HeaderMenu;
