import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`;

const UserDetailsWrapper = styled.div`
  background-color: #fff;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
  align-self: center;
`;

const UserDetails = styled.div`
  margin-top: 1rem;
`;

const Label = styled.p`
  font-weight: bold;
`;

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getUserDetail = useCallback(() => {
    setLoading(true);
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setLoading(false);
        setUser(res?.data?.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err?.response);
      });
  }, [id]);

  useEffect(() => {
    getUserDetail();
  }, [getUserDetail]);

  return (
    <>
      {loading ? (
        <StyledWrapper>
          <Spinner />
        </StyledWrapper>
      ) : (
        <UserDetailsWrapper>
          {user && (
            <>
              <Avatar src={user.avatar} alt={user.first_name} />
              <UserDetails>
                <Label>First name: {user.first_name}</Label>
                <Label>Last name: {user.last_name}</Label>
                <Label>Email: {user.email}</Label>
              </UserDetails>
            </>
          )}
        </UserDetailsWrapper>
      )}
    </>
  );
};

export default UserDetail;
