import React, { createContext, useState, ReactNode } from "react";

export interface AuthContextType {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [userToken, setUserToken] = useState<string | null>(
    JSON.parse(localStorage.getItem("chat-user") || "null")
  );

  const setToken = (token: string) => {
    if (token) {
      localStorage.setItem("chat-user", JSON.stringify(token));
    } else {
      localStorage.removeItem("chat-user");
    }

    setUserToken(token);
  };

  return (
    <AuthContext.Provider value={{ userToken, setUserToken, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
