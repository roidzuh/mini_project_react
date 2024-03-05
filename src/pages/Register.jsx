import styled from "styled-components";
import RegistForm from "../components/RegistForm";

const LoginStyled = styled.main`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  min-height: 100vh;
`;

const Register = () => {
  return (
    <LoginStyled>
      <h1>Create Account</h1>
      <RegistForm />
    </LoginStyled>
  );
};

export default Register;
