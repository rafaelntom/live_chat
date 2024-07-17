import { useEffect } from "react";
import useConversation from "../zustand/useConversation";
import { useSocketContext } from "./useSocketContext";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, updateMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (message) => {
      updateMessages([...messages, message]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, updateMessages]);
};

export default useListenMessages;
