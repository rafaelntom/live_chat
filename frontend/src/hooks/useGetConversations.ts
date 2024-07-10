import { useEffect, useState } from "react";
import { UserListResponse } from "../types/interfaces";
import { useAuthContext } from "./useAuthContext";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<UserListResponse[]>([]);

  const { userToken } = useAuthContext();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/user", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          console.log(response);
          throw new Error("Failed to fetch conversations");
        }

        const data = await response.json();
        setConversations(data.userList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
