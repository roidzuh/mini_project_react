import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";

const UserCard = ({ user, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onEdit(editedUser);
    setIsEditing(false);
  };

  const handleClose = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  return (
    <>
      <StyledContainer data-aos="fade-up">
        <StyledLink to={`/user/${user.id}`}>
          <StyledImage src={user.avatar} alt={user.first_name} />
          <StyledName>{`${user.first_name} ${user.last_name}`}</StyledName>
          <p>{user.email}</p>
        </StyledLink>
        <StyledBtnCont>
          <Button onClick={() => setIsEditing(true)} size="small">
            Edit
          </Button>
          <Button onClick={onDelete} size="small">
            Delete
          </Button>
        </StyledBtnCont>
      </StyledContainer>

      <Modal isOpen={isEditing} onSave={handleSave} onClose={handleClose}>
        <Input
          type="text"
          name="first_name"
          value={editedUser.first_name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="last_name"
          value={editedUser.last_name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
        />
      </Modal>
    </>
  );
};

export default UserCard;

const StyledContainer = styled.div`
  background-color: var(--secondary-background-color);
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
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-color);
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
  color: var(--text-color);

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
const StyledBtnCont = styled.div`
  display: flex;
  gap: 0.5rem;
`;
