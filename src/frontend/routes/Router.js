import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts";
import { HomePage } from "../pages/Homepage/Homepage";
import { SignInPage } from "../pages/Authentication/SignInPage";
import { SignUpPage } from "../pages/Authentication/SignUpPage";

const Router = () => {
  const {
    auth: { status },
  } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {!status && (
        <>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </>
      )}
    </Routes>
  );
};

export { Router };
