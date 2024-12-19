import { useEffect } from "react";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { useApp } from "@/AppProvider";


const ChatRouteGuard = () => {
  const { chatData } = useApp(); // chatData should be of type ChatData | ChatData[] | null
  const navigate = useNavigate();
  const { chatId } = useParams();
  const userId = localStorage.getItem("userChatId");

  useEffect(() => {
    const chat = Array.isArray(chatData) ? chatData[0] : chatData;

    if (chat?.id) {
    //   localStorage.removeItem("userChatId");
      if (chatId !== chat.id) {
        navigate(`/chats/${chat.id}`, { replace: true });
      }
    } else if (userId) {
      if (chatId !== userId) {
        navigate(`/chats/${userId}`, { replace: true });
      }
    }
  }, [chatData, userId, chatId, navigate]);

  return <Outlet />;
};

export default ChatRouteGuard