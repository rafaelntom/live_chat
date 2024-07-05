// hooks/useAuth.ts
import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/AuthContext";

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
