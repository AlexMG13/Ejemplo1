import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import userActions from "./store/actions/User";

const router = createBrowserRouter([
  {
<<<<<<< HEAD
    path: "/login",
    children: [{ path: "/login", element: <LogIn /> }],
  },
  {
=======
>>>>>>> sprint-4
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/cities",
    element: <Layout />,
    children: [{ path: "/cities", element: <Cities /> }],
  },
  {
    path: "/city/:id",
    element: <Layout />,
    children: [{ path: "/city/:id", element: <Details /> }],
  },
  {
    path: "/signup",
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
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
