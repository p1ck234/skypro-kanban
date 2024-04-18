import { Navigate, Outlet } from "react-router-dom";
import { paths } from "./lib/paths";
import { useUserContext } from "./components/context/hooks/useUser";
const PrivateRoutes = () => {
  const { user } = useUserContext();
  return user ? <Outlet /> : <Navigate to={paths.LOGIN} />;
};

export default PrivateRoutes;
