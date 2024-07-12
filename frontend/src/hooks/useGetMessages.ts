import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { MessageInterface } from "../types/interfaces";

const useGetMessages = () => {
  const [loading, setLoading] = useState(true);

  const { currentConversation, updateMessages, messages } = useConversation();
  const userToken = JSON.parse(localStorage.getItem("chat-user") || "{}");

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await fetch(
          `/api/message/${currentConversation?._id}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        if (response.status !== 200)
          throw new Error("Failed to fetch messages");

        const data: MessageInterface[] = await response.json();
        updateMessages(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch conversations");
      } finally {
        setLoading(false);
      }
    };

    if (currentConversation?._id) getMessages();
  }, [currentConversation, updateMessages, userToken]);

  return { loading, messages };
};

export default useGetMessages;
