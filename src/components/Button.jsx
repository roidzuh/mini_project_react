import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: #009ecb;
  color: #fff;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #007ba3;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
const Button = ({ children, onClick, type = "button" }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
