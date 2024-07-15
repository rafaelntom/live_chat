import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstace";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(true);

  const { currentConversation, updateMessages, messages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axiosInstance.get(
          `/message/${currentConversation?._id}`
        );

        console.log(response);

        if (response.status !== 200)
          throw new Error("Failed to fetch messages");

        updateMessages(response.data);
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch conversations");
      } finally {
        setLoading(false);
      }
    };

    if (currentConversation?._id) getMessages();
  }, [currentConversation, updateMessages]);

  return { loading, messages };
};

export default useGetMessages;
