import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setUserToken } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
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
