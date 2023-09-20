import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "./store/actions/User";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/cities",
        element: <Layout />,
        children: [{ path: "/cities", element: <Cities /> }],
      },
      {
        path: "/",
        element: <Layout />,
        children: [{ path: "/", element: <Home /> }],
      },
    ],
  },
  {
    path: "/city/:id",
    element: <Layout />,
    children: [{ path: "/city/:id", element: <Details /> }],
  },
  {
    path: "/signup",
    element: <Layout />,
    children: [{ path: "/signup", element: <SignUp /> }],
  },
  {
    path: "/login",
    element: <Layout />,
    children: [{ path: "/login", element: <LogIn /> }],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(userActions.authenticate());
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
