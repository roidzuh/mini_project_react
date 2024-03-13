import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import styled from "styled-components";
import Button from "./Button";
import Spinner from "./Spinner";
import Form from "./Form";
import Input from "./Input";

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const LoginForm = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    axios
      .post("https://reqres.in/api/login", login)
      .then((res) => {
        setIsLoading(false);
        const token = res?.data?.token;
        localStorage.setItem("access_token", token);
        localStorage.setItem("user", login.email);
        if (token) {
          navigate("/dashboard");
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
      <Title>Login</Title>
      <Input
        label="Email"
        name="email"
        type="text"
        placeholder="Enter your email"
        disabled={isLoading}
        onChange={handleChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        disabled={isLoading}
        onChange={handleChange}
      />
      <Button type={"submit"} disabled={isLoading}>
        {isLoading ? <Spinner /> : "Login"}
      </Button>
      <p>
        Don&apos;t have account? <Link to="/register">Register</Link>
      </p>
    </Form>
  );
};

export default LoginForm;
