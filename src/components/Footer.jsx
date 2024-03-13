import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Dibimbing.id Bootcamp Frontend Web Developer</FooterText>
      <Copyright>© 2024 Roid Zuhdianto</Copyright>
    </FooterContainer>
  );
};

export default Footer;
