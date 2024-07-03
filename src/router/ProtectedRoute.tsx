import React from 'react';
import { isAuthenticated } from '../hooks/isAuthenticated';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
   return isAuthenticated() ? element : <Navigate to="/" />;
};
