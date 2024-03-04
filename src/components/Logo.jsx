import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const LogoStyled = styled.div`
  background-color: #009ecb;
  padding: 1rem;
  border-radius: 100%;
  color: #fff;

  & span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const Logo = () => {
  return (
    <Container>
      <LogoStyled>
        <span>UH</span>
      </LogoStyled>
      <h1>User Hub</h1>
    </Container>
  );
};

export default Logo;