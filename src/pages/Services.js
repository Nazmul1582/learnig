import React from "react";
import { Route, Routes } from "react-router-dom";
import AppDevelopment from "../components/AppDevelopment";
import WebDevelopment from "../components/WebDevelopment";

const Services = () => {
  return (
    <div>
      <h1>Services Page</h1>
      <Routes>
        <Route path="web-dev" element={<WebDevelopment />} />
        <Route path="app-dev" element={<AppDevelopment />} />
      </Routes>
    </div>
  );
};

export default Services;
