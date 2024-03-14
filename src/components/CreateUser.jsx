import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledH1 = styled.h1`
  margin-bottom: 1rem;
  color: var(--text-color);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.name.trim() || !userData.job.trim()) {
      toast.error("Name and Job cannot be empty");
      return;
    }

    setLoading(true);
    axios
      .post("https://reqres.in/api/users", userData)
      .then((res) => {
        console.log(res);
        setUserData({ name: "", job: "" });
        setLoading(false);
        toast.success("User created successfully");
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
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
