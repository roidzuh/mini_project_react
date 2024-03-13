import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledSpan = styled.span`
  color: #505050;
`;

const UserAvatar = () => {
  const user = localStorage.getItem("user");

  return (
    <StyledContainer>
      <StyledSpan>{user}</StyledSpan>
    </StyledContainer>
  );
};

export default UserAvatar;
