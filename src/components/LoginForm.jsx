import styled from "styled-components";

const FormStyled = styled.form`
  width: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 2.4rem 4rem;
  border-radius: 0.5rem;
`;

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const LabelStyled = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: #505050;
`;

const InputStyled = styled.input`
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  border-radius: 0.2rem;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

const LoginForm = () => {
  return (
    <FormStyled>
      <WrapperStyled>
        <LabelStyled htmlFor="email">Email address</LabelStyled>
        <InputStyled type="email" placeholder="Email" />
      </WrapperStyled>
      <WrapperStyled>
        <LabelStyled htmlFor="password">Password</LabelStyled>
        <InputStyled type="password" placeholder="Password" />
      </WrapperStyled>
    </FormStyled>
  );
};

export default LoginForm;
