import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const currentUser = true;
  if (!currentUser) {
    return <Navigate to="/" replace={ture}></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
