import { createContext, useContext, useState } from "react";

const UserInfoContext = createContext(null);

export function UserInfoContextComponent({ children }) {
  const [userInfo, setUserInfo] = useState("Usuário deslogado");

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export function useUserInfo() {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  return { userInfo, setUserInfo };
}
