import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import axiosInstance from "../utils/axiosInstace";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setUserToken } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      await axiosInstance.post("/auth/logout");
      localStorage.removeItem("chat-user");
      setUserToken(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return { loading, logout };
};

export default useLogout;
