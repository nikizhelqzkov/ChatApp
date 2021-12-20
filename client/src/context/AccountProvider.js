import { useState, useEffect, createContext, useRef } from "react";
import { io } from "socket.io-client";
export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const socket = useRef();
  useEffect(() => {
    socket.current = io('ws://localhost:9000');
  },[])
  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        socket
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
