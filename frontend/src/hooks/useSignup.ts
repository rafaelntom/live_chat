import { useState } from "react";
import toast from "react-hot-toast";
import { FormValues } from "../types/interfaces";
import { useAuthContext } from "./useAuthContext";

interface ResponseData {
  token?: string;
  message?: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuthContext();

  const signup = async (formData: FormValues) => {
    setLoading(true);
    try {
      const data = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData: ResponseData = await data.json();

      if (data.status !== 201) {
        toast.error(responseData.message || "Error occurred");
      } else {
        toast.success(responseData.message!);
        console.log(responseData.token);
        setToken(responseData.token!);
        setLoading(false);
      }
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
