import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

const User = ({ user }) => {
  return (
    <StyledContainer>
      <Link to={`/user/${user.id}`}>
        <StyledImage src={user.avatar} alt={user.first_name} />
      </Link>
      <p>{user.first_name}</p>
    </StyledContainer>
  );
};

export default User;
