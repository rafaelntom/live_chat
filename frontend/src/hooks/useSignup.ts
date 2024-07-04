import { useState } from "react";
import { FormValues } from "../types/interfaces";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (formData: FormValues) => {
    setLoading(true);
    try {
      const data = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          username: formData.username,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          gender: formData.gender,
        }),
      });

      const { message } = await data.json();

      if (data.status !== 201) {
        return toast.error(message);
      } else {
        toast.success(message);
        setLoading(false);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
