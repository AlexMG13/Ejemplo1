import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Navigate, Outlet } from "react-router-dom";

export default function Layout() {
  /*  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/signup"} />;
  } */
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
