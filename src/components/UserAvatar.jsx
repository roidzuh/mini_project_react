import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
`;

const StyledSpan = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: #505050;
`;

const UserAvatar = () => {
  const [userData, setUserData] = useState(null);
  const getUserData = () => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <StyledContainer>
      <div>
        <StyledImg src={userData?.avatar} alt={userData?.first_name} />
      </div>
      <StyledSpan>
        {userData?.first_name} {userData?.last_name}
      </StyledSpan>
    </StyledContainer>
  );
};

export default UserAvatar;
