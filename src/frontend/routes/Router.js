import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Homepage/Homepage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>hello</div>} />
    </Routes>
  );
};

export { Router };
