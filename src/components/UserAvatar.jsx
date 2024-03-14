import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 0.8rem;
`;

const StyledSpan = styled.span`
  color: var(--text-color);
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
