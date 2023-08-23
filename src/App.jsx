import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Details from "./pages/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {path:'/', element: <Layout />, children: [
    {path:'/', element: <Home />}
  ]},
  {path:'/cities', element: <Layout />, children: [
    {path:'/cities', element: <Cities />}
  ]},
  {path:'/city/details', element: <Layout />, children: [
    {path:'/city/details', element: <Details />}
  ]}
])


function App() {
  return (
    <div className="w-full min-h-screen">
      <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
