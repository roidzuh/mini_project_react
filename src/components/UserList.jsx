import axios from "axios";
import Button from "./Button";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import User from "./User";
import Spinner from "./Spinner";

const StyledH1 = styled.h1`
  margin-bottom: 1rem;
`;

const StyledContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  margin-bottom: 2rem;
`;

const StyledUserList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    per_Page: 0,
    total: 0,
    total_pages: 0,
    page: 1,
  });

  const getUserList = useCallback(() => {
    setLoading(true);
    axios
      .get(`https://reqres.in/api/users?page=${pagination.page}`)
      .then((res) => {
        setLoading(false);
        setUsers(res.data.data);
        setPagination({
          per_Page: res.data.per_page,
          total: res.data.total,
          total_pages: res.data.total_pages,
          page: res.data.page,
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  }, [pagination.page]);

  const handleBack = () => {
    setPagination({
      ...pagination,
      page: pagination.page - 1,
    });
  };

  const handleNext = () => {
    setPagination({
      ...pagination,
      page: pagination.page + 1,
    });
  };

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return (
    <>
      <StyledH1>Dashboard</StyledH1>
      <StyledContainer>
        {loading ? (
          <StyledWrapper>
            <Spinner />
          </StyledWrapper>
        ) : (
          <StyledUserList>
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </StyledUserList>
        )}
        <StyledDiv>
          <Button onClick={handleBack} disabled={pagination.page === 1}>
            Back
          </Button>
          <span>{pagination.page}</span>
          <Button
            onClick={handleNext}
            disabled={pagination.page === pagination.total_pages}
          >
            Next
          </Button>
        </StyledDiv>
      </StyledContainer>
    </>
  );
};

export default UserList;
