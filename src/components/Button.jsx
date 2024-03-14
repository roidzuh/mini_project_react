import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--button-color);
  color: #fff;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--button-hover-color);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    color: #505050;
  }
`;
const Button = ({ children, onClick, disabled, type = "button" }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
