import styled from "styled-components";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

const PageContainer = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 80%;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3f51b5;
  color: #ffffff;

  @media (max-width: 48rem) {
    display: none;
  }
`;

const Login = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <LoginForm />
      </ContentContainer>
    </PageContainer>
  );
};

export default Login;
