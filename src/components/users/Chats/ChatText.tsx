// import { useApp } from "@/AppProvider";
// import { useGetMessages } from "@/hooks";
// import { ChatMessageData } from "@/types/type";
// import { useParams } from "react-router-dom";

// const ChatText = () => {
//   const {chatId} = useParams();
//   const {data: getMessage} = useGetMessages(chatId!)
//   const {userOneId} = useApp()

//   return (
//     <div className="flex flex-col space-y-2 p-4 h-screen">
//       {
//         getMessage?.map((message:any) => {
//           const isSender = userOneId === message?.senderId;

//         })
//       }
//       {/* Receiver Message */}
//       <div className="flex items-start">
//         <div className="bg-purple-200 px-4 py-2 rounded-lg max-w-[70%] text-black message-box">
//           <h1>Hello, how are you?</h1>
//         </div>
//       </div>

//       {/* Sender Message */}
//       <div className="flex justify-end items-end">
//         <div className="bg-blue-500 px-4 py-2 rounded-lg max-w-[70%] text-white message-box">
//           <h1>I'm good, thank you! How about you?</h1>
//         </div>
//       </div>

//       {/* Another Receiver Message */}
//       <div className="flex items-start">
//         <div className="bg-purple-200 px-4 py-2 rounded-lg max-w-[70%] text-black message-box">
//           <h1>I'm doing well too, thanks!</h1>
//         </div>
//       </div>
//     </div>

//     // <div className="flex flex-col p-4">
//     //   {getMessage?.map((message:any) => (
//     //     <div key={message?.id} className="bg-purple-200 my-1 px-3 py-2 rounded-md message-box">
//     //       {message?.text}
//     //     </div>
//     //   ))}
//     // </div>
//   );
// };

// export default ChatText;

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
