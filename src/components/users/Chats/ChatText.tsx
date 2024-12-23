import { useApp } from "@/AppProvider";
import { useGetMessages } from "@/hooks";
import { useParams } from "react-router-dom";
import "./type.css"
import { useEffect, useRef } from "react";

const ChatText = () => {
  const { chatId } = useParams();
  const { data: getMessage } = useGetMessages(chatId!);
  const { userOneId } = useApp();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [getMessage]); 

  return (
    <div className="flex flex-col space-y-2 p-4 h-screen overflow-auto vertical-scrollbar">
      {getMessage?.map((message: any) => {
        const isSender = userOneId === message?.senderId;

        return (
          <div
            key={message?.id}
            className={`flex ${
              isSender ? "justify-end items-end" : "items-start"
            }`}
          >
            <div
              className={`${
                isSender ? "bg-blue-500 text-white" : "bg-purple-200 text-black"
              } px-4 py-2 rounded-lg max-w-[70%]`}
            >
              <h1>{message?.text}</h1>
            </div>
          </div>
        );
      })}
       <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatText;
