import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

const FormStyled = styled.form`
  width: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 2.4rem 4rem;
  border-radius: 0.5rem;
`;

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const LabelStyled = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: #505050;
`;

const InputStyled = styled.input`
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  border-radius: 0.2rem;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

const RegistForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    <FormStyled onSubmit={handleSubmit}>
      <WrapperStyled>
        <LabelStyled htmlFor="email">Email address</LabelStyled>
        <InputStyled
          name="email"
          type="email"
          placeholder="Email"
          disabled={isLoading}
          onChange={handleChange}
        />
      </WrapperStyled>
      <WrapperStyled>
        <LabelStyled htmlFor="password">Password</LabelStyled>
        <InputStyled
          name="password"
          type="password"
          placeholder="Password"
          disabled={isLoading}
          onChange={handleChange}
        />
      </WrapperStyled>
      <WrapperStyled>
        <Button type={"submit"} disabled={isLoading}>
          {isLoading ? <Spinner /> : "Create"}
        </Button>
      </WrapperStyled>
    </FormStyled>
  );
};

export default RegistForm;
