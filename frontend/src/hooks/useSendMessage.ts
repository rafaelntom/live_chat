import { useState } from "react";
import useConversation from "../zustand/useConversation";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);

  const { currentConversation, messages, updateMessages } = useConversation();

  const userToken = JSON.parse(localStorage.getItem("chat-user") || "{}");

  const sendMessage = async (message: string) => {
    if (!currentConversation) return;
    setLoading(true);

    try {
      const response = await fetch(
        `/api/message/send/${currentConversation._id}`,
        {
          method: "POST",
          body: JSON.stringify({ message }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      const data = await response.json();
      updateMessages([...messages, data.message]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};
