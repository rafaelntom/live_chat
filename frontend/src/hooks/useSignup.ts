import { useState } from "react";
import toast from "react-hot-toast";
import { FormValues } from "../types/interfaces";
import axiosInstance from "../utils/axiosInstace";
import { useAuthContext } from "./useAuthContext";
import { AxiosError } from "axios";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuthContext();

  const signup = async (formData: FormValues) => {
    setLoading(true);
    try {
      const data = await axiosInstance.post("/auth/signup", formData);

      setToken(data.data.token);

      if (data.status !== 201) {
        toast.error("Error occurred");
      } else {
        toast.success(data.data.message);
        setToken(data.data.token);
        setLoading(false);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data.message || error.message);
        toast.error(error.response?.data.message || error.message);
      } else {
        console.error(error);
        toast.error("An error occurred");
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
