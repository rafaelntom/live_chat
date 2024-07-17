import { useContext } from "react";
import { SocketContext, SocketContextType } from "../context/SocketContext";

export const useSocketContext = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
