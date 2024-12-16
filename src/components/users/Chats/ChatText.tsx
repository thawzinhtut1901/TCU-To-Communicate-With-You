import { useApp } from "@/AppProvider";
import { useGetMessages } from "@/hooks";
import { useParams } from "react-router-dom";

const ChatText = () => {
  const { chatId } = useParams();
  const { data: getMessage } = useGetMessages(chatId!);
  const { userOneId } = useApp();

  return (
    <div className="flex flex-col space-y-2 p-4 h-screen overflow-auto">
      {getMessage?.map((message: any) => {
        const isSender = userOneId === message?.senderId;

        return (
          <div
            key={message?.id}
            className={`flex ${isSender ? "justify-end items-end" : "items-start"}`}
          >
            <div
              className={`${
                isSender
                  ? "bg-blue-500 text-white"
                  : "bg-purple-200 text-black"
              } px-4 py-2 rounded-lg max-w-[70%]`}
            >
              <h1>{message?.text}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatText;


// import { useApp } from "@/AppProvider";
// import { useGetMessages } from "@/hooks";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// const ChatText = () => {
//   const { chatId } = useParams();
//   const { data: getMessage } = useGetMessages(chatId!);
//   const { userOneId, chatData } = useApp();

//   const [messages, setMessages] = useState<any[]>([]);

//   useEffect(() => {
//     // Merge messages from getMessage and real-time chatData
//     const filteredChatData = chatData.filter(
//       (chat) => chat.chatId === parseInt(chatId!)
//     );
//     const mergedMessages = [...(getMessage || []), ...filteredChatData];
//     setMessages(mergedMessages);
//   }, [getMessage, chatData, chatId]);

//   return (
//     <div className="flex flex-col space-y-2 p-4 h-screen overflow-auto">
//       {messages.map((message: any) => {
//         const isSender = userOneId === message?.senderId;

//         return (
//           <div
//             key={message?.id}
//             className={`flex ${isSender ? "justify-end items-end" : "items-start"}`}
//           >
//             <div
//               className={`${
//                 isSender
//                   ? "bg-blue-500 text-white"
//                   : "bg-purple-200 text-black"
//               } px-4 py-2 rounded-lg max-w-[70%]`}
//             >
//               <h1>{message?.text}</h1>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ChatText;
