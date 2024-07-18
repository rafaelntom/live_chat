import { createContext, ReactNode, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAuthContext } from "../hooks/useAuthContext";

export interface SocketContextType {
  socket: Socket | null;
  onlineUsers: string[];
  setOnlineUsers: React.Dispatch<React.SetStateAction<string[]>>;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  const { userToken } = useAuthContext();

  const userData = JSON.parse(localStorage.getItem("token")!);

  useEffect(() => {
    if (userData) {
      const socket = io("https://live-chat-wzeb.onrender.com", {
        query: {
          userId: userData._id,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users: string[]) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers, setOnlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketContextProvider };
