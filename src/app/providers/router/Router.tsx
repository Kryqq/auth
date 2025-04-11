import { createBrowserRouter, Navigate } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";

import { RouteType } from "@/shared/types/routesType";
import { ROUTES } from "./routes";

import { AuthenticatedLayout } from "@/layouts/AuthenticatedLayout.tsx/AuthenticatedLayout";
import { Auth } from "@/pages/auth";
import { Profile } from "@/pages/profile/Profile";
import { Registration } from "@/pages/registration";

const routerConfig: RouteType[] = [
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.REGISTRATION} />,
  },
  {
    path: ROUTES.REGISTRATION,
    element: <Registration />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Auth />,
  },
  {
    path: ROUTES.ROOT,
    element: <ProtectedRoute element={<AuthenticatedLayout />} />,
    children: [
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
