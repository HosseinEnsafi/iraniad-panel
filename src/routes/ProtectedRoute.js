import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ user, children, redirectPath = "/" }) {
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
