import { createBrowserRouter } from 'react-router-dom';
import { RegistrationForm } from '../layout/registrationForm/RegistrationForm';
import { TestForm } from '../layout/registrationForm/TestForm';
import { AuthForm } from '../layout/AuthForm';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <RegistrationForm />,
   },
   {
      path: '/auth',
      element: <AuthForm />,
   },
   {
      path: '/test',
      element: <TestForm />,
   },
]);
