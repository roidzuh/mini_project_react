import styled from "styled-components";
import WafeContainer from "../components/WafeContainer";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NotFoundTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const NotFoundMessage = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const PageNotFound = () => {
  return (
    <WafeContainer>
      <NotFoundContainer>
        <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
        <NotFoundMessage>
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </NotFoundMessage>
      </NotFoundContainer>
    </WafeContainer>
  );
};

export default PageNotFound;
