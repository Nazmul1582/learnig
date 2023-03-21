import React from "react";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Services Page</h1>
      <Outlet />
    </div>
  );
};

export default Services;
