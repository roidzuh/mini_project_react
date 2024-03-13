import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderMenu = styled.button`
  font-size: 2rem;
  color: #505050;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
    color: #0e0e0e;
  }
`;

const HeaderMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token", "user");
    navigate("/login");
  };

  return (
    <StyledHeaderMenu onClick={handleLogout}>
      <HiOutlineArrowRightOnRectangle />
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
