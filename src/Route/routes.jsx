import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../components/AppLayout";
import ProtectedRoute from "./ProtectedRoute";
import UserDetail from "../components/UserDetail";
import ProtectedLoginRegister from "./ProtectedLoginRegister";

export const routeList = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Navigate replace to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user/:id",
        element: <UserDetail />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedLoginRegister>
        {" "}
        <Login />
      </ProtectedLoginRegister>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedLoginRegister>
        <Register />
      </ProtectedLoginRegister>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];
