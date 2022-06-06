import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts";
import { HomePage } from "../pages/Homepage/Homepage";
import { SignInPage } from "../pages/Authentication/SignInPage";
import { SignUpPage } from "../pages/Authentication/SignUpPage";
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute";
import { ProductsPage } from "../pages/ProductsPage/ProductsPage";

const Router = () => {
  const {
    auth: { status },
  } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<PrivateRoute></PrivateRoute>} />
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
