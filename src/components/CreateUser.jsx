import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

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
    setLoading(true);
    axios
      .post("https://reqres.in/api/users", userData)
      .then((res) => {
        console.log(res);
        setUserData({ name: "", job: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
  );
};

export default CreateUser;
