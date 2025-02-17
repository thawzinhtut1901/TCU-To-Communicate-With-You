import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
  import { io, Socket } from "socket.io-client";
  import { getToken } from "./services/authService";
  import { SocketURL } from "./services/ApiEndPoint";
  import { useGetMe } from "./hooks";
  import { useMutation, useQueryClient } from "@tanstack/react-query";
  // import { ChatMessageData } from "./types/type";
  
  interface ProviderDataProps {
    socket: Socket;
    userOneId: number;
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    chatData: any[];
  }
  
  const AppContext = createContext<ProviderDataProps | null>(null);
  
  export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error("useApp must be used within an AppProvider");
    }
    return context;
  }
  
  export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: getMe } = useGetMe();
    const userOneId = getMe?.id;
    const [chatData, setChatData] = useState<any[]>([]);
    const [socket] = useState<Socket>(() => {
      const token = getToken();
      return io(SocketURL, {
        auth: {
          token: token,
        },
      });
    });
    const queryClient = useQueryClient();

    const createChatMutation = useMutation({
      mutationFn: (newChat: any) => newChat,
      onMutate: (newChat) => {
        const previousChat = queryClient.getQueryData([
          "allchats"
        ]);

        queryClient.setQueryData(
          ["allchats"],
          (oldChats: any) => {
            return {
              ...oldChats,
              items: [...(oldChats?.items || []), newChat]
            }
          }
        );

        return {previousChat}
      },
      
    });
    
  
    const createMsgMutation = useMutation({
      mutationFn: (messages: any) => messages,
      onMutate: (variables: any) => {
        // Get the appropriate query key based on whether it's a group chat or individual chat
        const queryKey = variables.groupChatId 
          ? ["groupmessages", variables.groupChatId]
          : ["messages", variables.chatId];
    
        // Get previous items for potential rollback
        const previousItems = queryClient.getQueryData(queryKey);
    
        // Optimistically update the cache
        queryClient.setQueryData(queryKey, (oldData: any) => {
          return oldData ? [...oldData, { ...variables }] : [{ ...variables }];
        });
    
        return { previousItems };
      },
    });
  
    useEffect(() => {
      // Listener for createChat
      socket.on("createChat", (newChat) => {
       console.log(newChat)
       createChatMutation.mutate(newChat);
       setChatData(newChat);
      });
  
      // Listener for createMessage
      socket.on("createMessage", (data) => {
        createMsgMutation.mutate(data);
      });
  
      // Cleanup on unmount
      return () => {
        socket.off("createChat");
        socket.off("createMessage");
      };
    }, []); // Dependency array is empty to avoid redundant calls
  
    return (
      <AppContext.Provider
        value={{
          socket,
          userOneId,
          menuOpen,
          setMenuOpen,
          mobileMenuOpen,
          setMobileMenuOpen,
          chatData,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  