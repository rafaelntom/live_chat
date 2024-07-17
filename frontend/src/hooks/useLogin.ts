import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import toast from "react-hot-toast";
import axiosInstance from "../utils/axiosInstace";
import { AxiosError } from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuthContext();

  const login = async (username: string, password: string) => {
    setLoading(true);

    try {
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });

      if (response.status !== 200) {
        toast.error("An error occurred");
        throw new Error("An error occurred");
      }

      localStorage.setItem("token", JSON.stringify(response.data));
      setToken(response.data.token);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || error.message);
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
