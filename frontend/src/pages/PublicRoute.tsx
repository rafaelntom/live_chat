import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const PublicRoute = () => {
  const { userToken } = useAuthContext();

  return userToken ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
