import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { getToken } from "./services/authService";
import { SocketURL } from "./services/ApiEndPoint";
import { useGetAllChats, useGetMe } from "./hooks";

interface ProviderDataProps {
    socket: Socket,
    userOneId: number,
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    chatData: any[];
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
  const [menuOpen, setMenuOpen] = useState(true);
  const { data: getMe } = useGetMe();
  const { data: getAllChats } = useGetAllChats();
  const userOneId = getMe?.id;
  const [chatData, setChatData] = useState<any[]>([]);
  const [socket, setSocket] = useState<Socket>(() => {
      const token = getToken();
      return io(SocketURL, {
          auth: {
              token: token,
          },
      });
  });

  useEffect(() => {
    setSocket(socket)
    socket.on("createChat", (data) => {
        setChatData((prevData) => {
            if (!prevData.some((chat) => chat.id === data.id)) {
                return [...prevData, data];
            }
            return prevData; 
        });
        console.log("Global listener - New chat created:", data);
    });

    return () => {
        socket.off("createChat");
    };
}, [socket]);


  useEffect(() => {
    if (getAllChats?.items) {
        setChatData((prevChats) => {
            const newChats = getAllChats.items.filter(
                (chat: any) => !prevChats.find((prevChat) => prevChat.id === chat.id)
            );
            return [...prevChats, ...newChats];
        });
    }
}, [getAllChats?.items]);

  return (
      <AppContext.Provider value={{ socket, userOneId, menuOpen, setMenuOpen, chatData }}>
          {children}
      </AppContext.Provider>
  );
};
