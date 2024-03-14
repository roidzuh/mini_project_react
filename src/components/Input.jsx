import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const StyledLabel = styled.label`
  color: var(--text-color);
  font-size: 16px;
  margin-bottom: 8px;
`;

const StyledInputField = styled.input`
  background-color: var(--secondary-background-color);
  padding: 12px;
  border: 1px solid #595959;
  border-radius: 4px;
  box-sizing: border-box;
  ${(props) => props.disabled && "opacity: 0.5;"}
`;

const Input = ({
  label,
  type,
  placeholder,
  name,
  disabled,
  onChange,
  value,
}) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInputField
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
