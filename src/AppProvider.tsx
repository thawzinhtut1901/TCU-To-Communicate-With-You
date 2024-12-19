// import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// import { io, Socket } from "socket.io-client";
// import { getToken } from "./services/authService";
// import { SocketURL } from "./services/ApiEndPoint";
// import { useGetMe } from "./hooks";

// interface ProviderDataProps {
//     socket: Socket,
//     userOneId: number,
//     menuOpen: boolean,
//     setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
//     chatData: any[],
//     // SocketSentMessage: (data: any) => void,
// }

// const AppContext = createContext<ProviderDataProps | null>(null);

// export function useApp() {
//    const context = useContext(AppContext);
//    if(!context) {
//     throw new Error("useApp must be used within an AppProvider");
//    }
//    return context
// }

// export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [menuOpen, setMenuOpen] = useState(true);
//   const { data: getMe } = useGetMe();
//   const userOneId = getMe?.id;
//   const [chatData, setChatData] = useState<any[]>([]);
//   const [socket, setSocket] = useState<Socket>(() => {
//       const token = getToken();
//       return io(SocketURL, {
//           auth: {
//               token: token,
//           },
//       });
//   });

// //   const SocketSentMessage = (data:any) => {
// //     console.log("Sent Message", data);
// //     setChatData((prevChats) => [...prevChats, data]);
// //   }

//   useEffect(() => {
//     setSocket(socket)
//     socket.on("createChat", (data) => {
//         console.log("Global listener - New chat created:", data);
//         setChatData((prevChats) => [...prevChats, data?.userTwo]);
//     });

//         socket.on("createMessage", (data) => {
//         console.log("Sent Message", data)
//     })

//     return () => {
//         socket.off("createChat");
//         socket.off("createMessage")
//     };
// }, [socket]);



// console.log(chatData)

//   return (
//       <AppContext.Provider value={{ socket, userOneId, menuOpen, setMenuOpen, chatData }}>
//           {children}
//       </AppContext.Provider>
//   );
// };

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { getToken } from "./services/authService";
import { SocketURL } from "./services/ApiEndPoint";
import { useGetMe } from "./hooks";
// import { ChatMessageData } from "./types/type";

interface ProviderDataProps {
    socket: Socket;
    userOneId: number;
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    chatData: any[];
    receivedMessage: any;
}

const AppContext = createContext<ProviderDataProps | null>(null);

export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [receivedMessage, setReceivedMessage] = useState();
    const [menuOpen, setMenuOpen] = useState(true);
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

    useEffect(() => {
        // Listener for createChat
        socket.on("createChat", (data) => {
            console.log("Global listener - New chat created:", data);
            setChatData((prevChats) => [...prevChats, data?.userTwo]);
        });

        // Listener for createMessage
        socket.on("createMessage", (data) => {
            // console.log("Sent Message", data);
            setReceivedMessage(data)
        });

        // Cleanup on unmount
        return () => {
            socket.off("createChat");
            socket.off("createMessage");
        };
    }, []); // Dependency array is empty to avoid redundant calls

    // console.log(receivedMessage)

    return (
        <AppContext.Provider value={{ socket, userOneId, menuOpen, setMenuOpen, chatData, receivedMessage }}>
            {children}
        </AppContext.Provider>
    );
};
