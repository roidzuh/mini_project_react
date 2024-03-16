import { useState } from "react";
import { handleCreateUser } from "../utils/apiAuth";
import { API_LIST } from "../utils/const";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledH1 = styled.h1`
  margin-bottom: 1rem;
  color: var(--text-color);
  text-align: center;
`;

const CreateUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    job: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData.name.trim() || !userData.job.trim()) {
      toast.error("Name and Job cannot be empty");
      return;
    }

    setLoading(true);
    try {
      const res = await handleCreateUser(API_LIST.USER, userData);
      setUserData({ name: "", job: "" });
      setLoading(false);
      toast.success(`User ${res.data.name} created successfully`);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <StyledH1>Create User</StyledH1>
      <Form onSubmit={handleSubmit} data-aos="zoom-in">
        <Input
          label="Name"
          name="name"
          type="text"
          value={userData.name}
          onChange={handleChange}
        />

        <Input
          label="Job"
          name="job"
          type="text"
          value={userData.job}
          onChange={handleChange}
        />

        <Button type={"submit"} disabled={loading}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateUser;
