import styled from "styled-components";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

const LoginStyled = styled.main`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  min-height: 100vh;
`;

const Login = () => {
  return (
    <LoginStyled>
      <Logo />
      <h1>Login to your account</h1>
      <LoginForm />
    </LoginStyled>
  );
};

export default Login;
