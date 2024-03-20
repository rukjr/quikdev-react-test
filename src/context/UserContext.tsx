import React, { createContext, useContext, useState, ReactNode } from "react";
import { IUser } from "@shared/interfaces/IUser";

interface UserContextType {
  user: IUser;
  setUser: (user: IUser) => void;
}

const defaultState: UserContextType = {
  user: { id: "", name: "" },
  setUser: () => {},
};

const UserContext = createContext<UserContextType>(defaultState);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>({ id: "", name: "" });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => useContext(UserContext);
