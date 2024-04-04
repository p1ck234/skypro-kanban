import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const token = true;
  return token ? <Outlet /> : <Navigate />;
};

export default PrivateRoutes;
