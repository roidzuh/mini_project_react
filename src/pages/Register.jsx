import styled from "styled-components";
import RegistForm from "../components/RegistForm";
import WafeContainer from "../components/WafeContainer";
import Logo from "../components/Logo";

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

const Register = () => {
  return (
    <WafeContainer>
      <div>
        <LogoContainer data-aos="slide-right">
          <Logo />
        </LogoContainer>
        <RegistForm />
      </div>
    </WafeContainer>
  );
};

export default Register;
