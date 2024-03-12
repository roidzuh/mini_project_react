import { Navigate } from "react-router-dom";

const ProtectedLoginRegister = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedLoginRegister;
