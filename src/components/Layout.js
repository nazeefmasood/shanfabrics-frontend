import React from "react";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <div className="w-full max-w-screen mx-auto  overflow-x-hidden ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
