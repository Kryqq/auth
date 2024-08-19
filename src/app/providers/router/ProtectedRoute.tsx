import { isAuthenticated } from '@shared/hooks/isAuthenticated';

import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
   return isAuthenticated() ? element : <Navigate to="/" />;
};
