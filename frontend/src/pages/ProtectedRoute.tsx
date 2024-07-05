import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const ProtectedRoute = () => {
  const { userToken } = useAuthContext();
  console.log(userToken);
  return userToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
