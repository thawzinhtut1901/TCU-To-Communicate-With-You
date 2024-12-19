import { BsThreeDotsVertical } from "react-icons/bs"
import ChatText from "./ChatText"
import { FaMicrophone } from "react-icons/fa"
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { AiOutlinePicture } from "react-icons/ai"
import { useEffect, useState } from "react"
import { createChatData, CreateMessageData } from "@/types/type"
import { useCreateMessages, useCreateNewChat, useGetAChat } from "@/hooks"
import { useApp } from "@/AppProvider"
import { useParams } from "react-router-dom"
import { IoSend } from "react-icons/io5"

const Chatting = () => {
  // const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [createChatData, setCreateChatData] = useState<createChatData>({
    userTwoId: 0,
    message: "",
  })
  const createNewChat = useCreateNewChat();
  const {socket, userOneId} = useApp();
  const {chatId} = useParams();
  // const {data: getMessage} = useGetMessages(chatId!);
  const {data: getAChat} = useGetAChat(chatId!);
  // console.log("Message",getMessage)
  const numericChatId = chatId ? Number(chatId) : null;
  const isUserOne = getAChat?.userOneId === userOneId;
  const [createMessageData, setCreateMessageData] = useState<CreateMessageData>({
    chatId: "",
    text: ""
  });
  const createMessage = useCreateMessages();
  console.log(createMessageData.chatId)

  useEffect(() => {
    if(chatId) {
      setCreateMessageData((prev) => ({
        ...prev,
        chatId
      }))
    }
  }, [chatId])
  
  useEffect(() => {
    if (numericChatId && userOneId !== numericChatId) {
      setCreateChatData((prev) => ({
        ...prev,
        userTwoId: numericChatId,
      }));
    }
  }, [userOneId, numericChatId]);
  
  // useEffect(() => {
  //   if (!socket) return;
  
  //   console.log("Socket connected with ID: ", socket.id);
  
  //   socket.on("createChat", (data: SocketData) => {
  //     console.log("Socket Data Received: ", data);
  
  //     // Update userTwoId with the received data.id
  //     setCreateChatData((prev) => ({
  //       ...prev,
  //       userTwoId: Number(data.id), // Convert data.id (string) to number
  //     }));
  //   });
  
  //   return () => {
  //     socket.off("createChat");
  //   };
  // }, [socket]);
  
  
  // const handleLookProfile = () => {
  //   setLookProfile(!lookProfile)
  // }

  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(numericChatId) {
      const message = event.target.value;
      setCreateChatData((prev) => ({...prev, message}))
    } else {
      const text = event.target.value;
      setCreateMessageData((prev) => ({...prev, text}))
    }
 
  }

  const handleSentMessage = () => {
    if(numericChatId) {
      createNewChat.mutate(createChatData)
      setCreateChatData((prev) => ({ ...prev, message: "" }));
    } else {
      createMessage.mutate(createMessageData)
      socket.emit("createMessage", {createMessageData})
      setCreateMessageData((prev) => ({...prev, text: ""}))
    }

  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSentMessage();
    }
  };

  return (
    <div 
      className="flex flex-col border-[#8566FF] border-[3px] bg-white bg-opacity-30 mr-[22px] rounded-[20px] w-screen transition-all duration-300 cursor-default"
      // className={`flex flex-col border-[#8566FF] border-[3px] bg-white bg-opacity-30 ${lookProfile ? "mr-0" : "mr-[22px]"} rounded-[20px] w-screen cursor-default transition-all duration-300`}
    >
        <div className="flex justify-between items-center bg-[#9054DE] rounded-t-[20px] w-full h-[80px]">
          <div className="flex font-medium text-[16px] text-white">
            {
              isUserOne ? (
                <div className="flex items-center">
                  <img src={getAChat?.userTwo?.profile} alt="" className="mx-[24px] rounded-full w-[48px] h-[48px] cursor-pointer"/>
                  <div className="flex flex-col">
                    <h1>{getAChat?.userTwo?.displayName}</h1>
                    <h3 className="text-[#D9D9D9]">Active 20m ago</h3>
                  </div>
                </div>
              ) : (
                <div className="flex items-center"> 
                  <img src={getAChat?.userOne?.profile} alt="" className="mx-[24px] rounded-full w-[48px] h-[48px] cursor-pointer"/>
                  <div className="flex flex-col">
                    <h1>{getAChat?.userOne?.displayName}</h1>
                    <h3 className="text-[#D9D9D9]">Active 20m ago</h3>
                  </div>
              </div>
              )
            }

          </div>

          <BsThreeDotsVertical className="mr-[30px] w-[24px] h-[24px] text-white cursor-pointer"/>
        </div>
        
        <ChatText/>

        <div className="relative flex mt-auto">
          <input 
            onChange={handleMessage}
            onKeyDown={handleKeyPress} 
            value={createChatData.message || createMessageData.text}
            placeholder="Enter Your Message..."
            className="bg-[#9054DE] mx-auto mb-[22px] pr-12 pl-3 rounded-[8px] w-[98%] h-[40px] text-[16px] text-white placeholder-slate-50"
          />
          <div className="top-5 right-9 absolute flex gap-x-3 transform -translate-y-1/2">
            <FaMicrophone className="text-white cursor-pointer" size={22} />
            <MdOutlineEmojiEmotions className="text-white cursor-pointer" size={22} />
            <AiOutlinePicture className="text-white cursor-pointer" size={22} />
            <button className="text-white cursor-pointer" type="submit" onClick={handleSentMessage}><IoSend size={22}/></button>
          </div>
        </div>
    </div>
  )
}

export default Chatting;