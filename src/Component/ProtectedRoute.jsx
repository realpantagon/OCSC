import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };

  return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;