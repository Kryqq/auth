import { createBrowserRouter } from 'react-router-dom';

import { RegistrationForm } from '../../../pages/registrationForm/RegistrationForm';

import { TestForm } from '../../../pages/TestForm';

import { AuthForm } from '../../../pages/authForm/AuthForm';

import { ProtectedRoute } from './ProtectedRoute';

import { RouteType } from '../../../types/routesType';

import { ROUTES } from './routes';

const routerConfig: RouteType[] = [
   {
      path: ROUTES.ROOT,
      element: <RegistrationForm />,
   },
   {
      path: ROUTES.LOGIN,
      element: <AuthForm />,
   },
   {
      path: ROUTES.TEST,
      element: <ProtectedRoute element={<TestForm />} />,
   },
];

export const router = createBrowserRouter(routerConfig);
