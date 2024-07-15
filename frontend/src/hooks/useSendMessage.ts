import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axiosInstance from "../utils/axiosInstace";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);

  const { currentConversation, messages, updateMessages } = useConversation();

  const sendMessage = async (message: string) => {
    if (!currentConversation) return;
    setLoading(true);

    try {
      const response = await axiosInstance.post(
        `/message/send/${currentConversation._id}`,
        { message: message }
      );

      if (response.status !== 201) throw new Error("Failed to send message");

      updateMessages([...messages, response.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};
