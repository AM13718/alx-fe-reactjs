// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Simulated authentication flag (change to 'true' to simulate a logged-in user)
  const isAuthenticated = false;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
