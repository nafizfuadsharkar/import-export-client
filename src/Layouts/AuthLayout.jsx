import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto py-4 ">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
