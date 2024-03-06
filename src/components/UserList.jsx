import axios from "axios";
import Button from "./Button";
import { useCallback, useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    per_Page: 0,
    total: 0,
    total_pages: 0,
    page: 1,
  });

  const getUserList = useCallback(() => {
    axios
      .get(`https://reqres.in/api/users?page=${pagination.page}`)
      .then((res) => {
        setUsers(res.data.data);
        setPagination({
          per_Page: res.data.per_page,
          total: res.data.total,
          total_pages: res.data.total_pages,
          page: res.data.page,
        });
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
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <p>
            {user.first_name} {user.last_name}
          </p>
          <p>{user.email}</p>
        </div>
      ))}
      <div>
        <Button onClick={handleBack} disabled={pagination.page === 1}>
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={pagination.page === pagination.total_pages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default UserList;
