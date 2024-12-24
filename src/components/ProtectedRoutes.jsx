import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace/>; // Redirect to login if not authenticated
  }

  return children; // Render protected component if authenticated
};

export default ProtectedRoute;
