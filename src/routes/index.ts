import Main from "src/pages/main";

import { IRoute } from "src/models/route";

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    component: Main,
  },
];

export const privatRoutes = [
  // some code should be added in the future
];
