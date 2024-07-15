import { useEffect, useState, useCallback } from "react";
import axiosInstance from "../utils/axiosInstace";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(true);
  const { currentConversation, updateMessages, messages } = useConversation();

  const getMessages = useCallback(async () => {
    if (!currentConversation?._id) return;

    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/message/${currentConversation._id}`
      );
      if (response.status !== 200) throw new Error("Failed to fetch messages");
      updateMessages(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [currentConversation?._id, updateMessages]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return { loading, messages };
};

export default useGetMessages;
