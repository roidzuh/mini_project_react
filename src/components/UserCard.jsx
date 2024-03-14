import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled(Link)`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition: box-shadow 0.3s;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  text-decoration: none;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
`;

const StyledName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  position: relative;
  color: #333;

  &::after {
    content: "";
    display: block;
    width: 50%;
    height: 1px;
    background-color: #ccc;
    margin: 0.5rem auto;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const UserCard = ({ user }) => {
  return (
    <StyledContainer to={`/user/${user.id}`} data-aos="fade-up">
      <StyledImage src={user.avatar} alt={user.first_name} />
      <StyledName>{`${user.first_name} ${user.last_name}`}</StyledName>
      <p>{user.email}</p>
    </StyledContainer>
  );
};

export default UserCard;
