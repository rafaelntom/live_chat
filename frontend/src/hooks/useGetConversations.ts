import { useEffect, useState } from "react";
import { ConversationListResponse } from "../types/interfaces";
import { useAuthContext } from "./useAuthContext";

const useGetConversations = () => {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState<ConversationListResponse>(
    []
  );

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
  }, [userToken]);

  return { loading, conversations };
};

export default useGetConversations;
