import { useEffect, useState } from "react";
import { ConversationListResponse } from "../types/interfaces";
import { useAuthContext } from "./useAuthContext";
import axiosInstance from "../utils/axiosInstace";

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
        const response = await axiosInstance.get("/user");

        if (response.status !== 200) {
          console.log(response);
          throw new Error("Failed to fetch conversations");
        }

        setConversations(response.data.userList);
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
