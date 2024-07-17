import { createContext, ReactNode, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface SocketContextType {
  socket: Socket | null;
  onlineUsers: string[];
  setOnlineUsers: React.Dispatch<React.SetStateAction<string[]>>;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  const userData = JSON.parse(localStorage.getItem("token")!);

  useEffect(() => {
    if (userData._id) {
      const socket = io("http://localhost:5000", {
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
  }, []);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers, setOnlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketContextProvider };
