import { ROUTES } from "../../app/providers/router/routes";

export type RouteType = {
  path: (typeof ROUTES)[keyof typeof ROUTES];
  element: JSX.Element;
  children?: RouteType[];
};
