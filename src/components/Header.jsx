import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: #fff;
  padding: 1rem 4rem;
  border-bottom: 1px solid #ccc;

  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
`;
const Header = () => {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
