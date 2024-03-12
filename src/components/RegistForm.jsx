import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "./Button";
import Spinner from "./Spinner";
import Form from "./Form";
import Input from "./Input";

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const RegistForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    axios
      .post("https://reqres.in/api/register", formData)
      .then((res) => {
        setIsLoading(false);
        const token = res?.data?.token;
        // localStorage.setItem("access_token", token);
        if (token) {
          toast.success("Register successfully");
          setTimeout(() => {
            navigate("/login");
          }, 2500);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err?.response);
        toast.error(err?.response?.data?.error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Register</Title>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Email"
        disabled={isLoading}
        onChange={handleChange}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        disabled={isLoading}
        onChange={handleChange}
      />

      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        disabled={isLoading}
        onChange={handleChange}
      />

      <Button type={"submit"} disabled={isLoading}>
        {isLoading ? <Spinner /> : "Register"}
      </Button>
      <p>
        Already have a account? <Link to="/login">Login</Link>
      </p>
    </Form>
  );
};

export default RegistForm;
