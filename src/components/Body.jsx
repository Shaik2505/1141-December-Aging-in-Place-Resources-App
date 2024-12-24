import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

export default Body;
