import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import SignUp from "./pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
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
    element: <Layout />,
    children: [{ path: "/signup", element: <SignUp /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
