import { Route, Routes } from "react-router-dom";

import { IRoute } from "src/models/route";
import { publicRoutes } from "src/routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route: IRoute) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
