import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../types/interfaces";
import { useAuthContext } from "./useAuthContext";

interface ResponseData {
  token?: string;
  message?: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setUserToken } = useAuthContext();
  const navigate = useNavigate();

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
      console.log("Full Response Data:", responseData);

      if (data.status !== 201) {
        toast.error(responseData.message || "Error occurred");
      } else {
        toast.success(responseData.message!);
        setUserToken(responseData.token!);
        setLoading(false);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        navigate("/");
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
