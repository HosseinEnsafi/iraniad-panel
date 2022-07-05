import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAllowed, children, redirectPath = "/" }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return children ? children : <Outlet />;
}

export default ProtectedRoute
