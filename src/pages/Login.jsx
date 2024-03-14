import styled from "styled-components";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import WafeContainer from "../components/WafeContainer";

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3f51b5;
  color: #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = () => {
  return (
    <WafeContainer>
      <div>
        <LogoContainer data-aos="slide-right">
          <Logo />
        </LogoContainer>
        <LoginForm />
      </div>
    </WafeContainer>
  );
};

export default Login;
