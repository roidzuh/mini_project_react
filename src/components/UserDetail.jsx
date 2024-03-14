import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const UserDetailsWrapper = styled.div`
  background-color: var(--secondary-background-color);
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: block;
`;

const UserDetails = styled.div`
  text-align: center;
`;

const Label = styled.p`
  font-weight: bold;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: var(--button-color);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--button-hover-color);
  }
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
        <UserDetailsWrapper data-aos="zoom-in">
          {user && (
            <>
              <Avatar src={user.avatar} alt={user.first_name} />
              <UserDetails>
                <Label>User ID: {user.id}</Label>
                <Label>First name: {user.first_name}</Label>
                <Label>Last name: {user.last_name}</Label>
                <Label>Email: {user.email}</Label>
                <BackButton to="/">Back</BackButton>
              </UserDetails>
            </>
          )}
        </UserDetailsWrapper>
      )}
    </>
  );
};

export default UserDetail;
