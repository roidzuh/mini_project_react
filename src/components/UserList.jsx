import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import toast from "react-hot-toast";
import { handleGetUsers } from "../utils/apiAuth";
import { API_LIST } from "../utils/const";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    per_Page: 0,
    total: 0,
    total_pages: 0,
    page: 1,
  });

  const getUserList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await handleGetUsers(API_LIST.USER, pagination.page);
      setLoading(false);
      setUsers(res.data.data);
      setPagination({
        per_Page: res.data.per_page,
        total: res.data.total,
        total_pages: res.data.total_pages,
        page: res.data.page,
      });
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong!");
      console.log(err?.response);
    }
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

  const handlePageChange = (newPage) => {
    setPagination({
      ...pagination,
      page: newPage,
    });
  };

  const handleEdit = (userId, newData) => {
    setUsers(
      users.map((user) => (user.id === userId ? { ...user, ...newData } : user))
    );
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return (
    <>
      <StyledH1>Welcome to UserHub!</StyledH1>
      {loading ? (
        <StyledDiv>
          <Spinner />
        </StyledDiv>
      ) : (
        <>
          <StyledUserList>
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={(newData) => handleEdit(user.id, newData)}
                onDelete={() => handleDelete(user.id)}
              />
            ))}
          </StyledUserList>
          <StyledDiv>
            <Pagination
              page={pagination.page}
              totalPages={pagination.total_pages}
              onBack={handleBack}
              onNext={handleNext}
              numbers
              onPageChange={handlePageChange}
            />
          </StyledDiv>
        </>
      )}
    </>
  );
};

export default UserList;

const StyledH1 = styled.h1`
  margin-bottom: 1rem;
  color: var(--text-color);
  text-align: center;
`;

const StyledUserList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;
