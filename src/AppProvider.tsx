import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { getToken } from "./services/authService";
import { SocketURL } from "./services/ApiEndPoint";
import { useGetMe } from "./hooks";

interface ProviderDataProps {
    socket: Socket,
    userOneId: number,
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<ProviderDataProps | null>(null);

export function useApp() {
   const context = useContext(AppContext);
   if(!context) {
    throw new Error("useApp must be used within an AppProvider");
   }
   return context
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(true)
    const {data: getMe} = useGetMe();
    const userOneId = getMe?.id;
    const [socket, setSocket] = useState<Socket>(() => {
      const token = getToken();
      return io(SocketURL, {
        auth: {
          token: token,
        },
      });
    });

    useEffect(() => {
      setSocket(socket);
      socket.on("createChat", (data) => {
        
        console.log("Global listener - New chat created:", data)
      })
      return () => {
        socket.off("createChat")
      };
    }, [socket]);

    return (
        <AppContext.Provider value={{socket, userOneId, menuOpen, setMenuOpen}}>
            {children}
        </AppContext.Provider>
    )
}