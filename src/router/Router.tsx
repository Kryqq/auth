import { createBrowserRouter } from 'react-router-dom';
import { RegistrationForm } from '../layout/registrationForm/RegistrationForm';
import { TestForm } from '../layout/TestForm';
import { AuthForm } from '../layout/authForm/AuthForm';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <RegistrationForm />,
   },
   {
      path: '/login',
      element: <AuthForm />,
   },
   {
      path: '/test',
      element: <ProtectedRoute element={<TestForm />} />,
   },
]);
