import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("userData");

  if (!token) {
    // If token is not present, redirect to login
    return <Navigate to="/" replace />;
  }

  // If token is present, render the children components
  return children;
};

export default ProtectedRoute;
