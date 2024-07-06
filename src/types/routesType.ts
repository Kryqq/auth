import { ROUTES } from "../router/routes";

export type RouteType = {
	path: (typeof ROUTES)[keyof typeof ROUTES];
	element: JSX.Element;
  };
