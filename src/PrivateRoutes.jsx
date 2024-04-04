import { Navigate, Outlet } from "react-router-dom";
import { paths } from "./lib/paths";
const PrivateRoutes = (isAuth) => {
  return isAuth ? <Outlet /> : <Navigate to={paths.LOGIN} />;
};

export default PrivateRoutes;
