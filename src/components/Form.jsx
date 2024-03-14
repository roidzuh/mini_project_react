import styled from "styled-components";

const StyledForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
  background: var(--background-color);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Form = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};

export default Form;
