import React from "react";
import { Outlet } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import WebDesign from "../components/WebDesign";

const Services = () => {
  return (
    <div>
      <h1>Services Page</h1>
      {/* <Routes>
        <Route path="web-design" element={<WebDesign />} />
      </Routes> */}
      <Outlet />
    </div>
  );
};

export default Services;
