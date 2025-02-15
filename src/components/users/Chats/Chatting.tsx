import { BsThreeDotsVertical } from "react-icons/bs"
import ChatText from "./ChatText"
import { FaMicrophone } from "react-icons/fa"
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { AiOutlinePicture } from "react-icons/ai"
import { useEffect, useState } from "react"
import { createChatData, CreateMessageData } from "@/types/type"
import { useCreateMessages, useCreateNewChat, useGetAChat, useGetAGroupChat } from "@/hooks"
import { useApp } from "@/AppProvider"
import { useParams } from "react-router-dom"
import { IoSend } from "react-icons/io5"
import ChatLookProfile from "./ChatLookProfile"

const Chatting = () => {
  const [createChatData, setCreateChatData] = useState<createChatData>({
    userTwoId: 0,
    message: "",
  })
  const createNewChat = useCreateNewChat();
  const {socket, userOneId} = useApp();
  const {chatId, groupChatId} = useParams();
  const {data: getAChat} = useGetAChat(chatId!, Boolean(chatId));
  const numericChatId = chatId ? Number(chatId) : null;
  const isUserOne = getAChat?.userOneId === userOneId;
  const [createMessageData, setCreateMessageData] = useState<CreateMessageData>({
    chatId: "",
    groupChatId: "",
    text: ""
  });
  const createMessage = useCreateMessages();
  const [lookProfile, setLookProfile] = useState(false);
  const {data: groupChat} = useGetAGroupChat(groupChatId!, Boolean(groupChatId));

  useEffect(() => {
    if(chatId) {
      setCreateMessageData((prev) => ({
        ...prev,
        chatId,
        groupChatId: "",
      }))
    } 
    if(groupChatId) {
      setCreateMessageData((prev) => ({
        ...prev,
        groupChatId,
        chatId: "",
      }))
    }
  }, [chatId, groupChatId])
  
  useEffect(() => {
    if (numericChatId && userOneId !== numericChatId) {
      setCreateChatData((prev) => ({
        ...prev,
        userTwoId: numericChatId,
      }));
    }
  }, [userOneId, numericChatId]);
  
  const handleLookProfile = () => {
    setLookProfile(!lookProfile)
  }

  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      socket.emit("createMessage", createMessageData) // This already contains both chatId and groupChatId
      setCreateMessageData((prev) => ({...prev, text: ""}))
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSentMessage();
    }
  };

  const getActivityStatus = () => {
    if (groupChat) {
      return `${groupChat?.groupMembers?.length} members`;
    }
  
    // Get the relevant user based on who is viewing
    const targetUser = isUserOne ? getAChat?.userTwo : getAChat?.userOne;
  
    // Check if user is currently active
    if (targetUser?.activeNow) {
      return (
        <div className="flex items-center gap-2">
          <div className="bg-green-500 rounded-full w-2 h-2 animate-pulse"></div>
          <span>Active now</span>
        </div>
      );
    }
  
    // Calculate last seen time if available
    if (targetUser?.lastSeen) {
      const lastSeen = new Date(targetUser.lastSeen);
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - lastSeen.getTime()) / 1000);
  
      // Less than a minute
      if (diffInSeconds < 60) {
        return `Last seen ${diffInSeconds} seconds ago`;
      }
  
      // Less than an hour
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (diffInMinutes < 60) {
        return `Last seen ${diffInMinutes} min${diffInMinutes > 1 ? 's' : ''} ago`;
      }
  
      // Less than a day
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) {
        return `Last seen ${diffInHours} hr${diffInHours > 1 ? 's' : ''} ago`;
      }
  
      // More than a day
      const diffInDays = Math.floor(diffInHours / 24);
      return `Last seen ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  
    return "Offline";
  };

  return (
    <div className="relative flex w-screen overflow-hidden">
      <div 
        // className="flex flex-col bg-white bg-opacity-30 mr-[22px] border-[#8566FF] border-[3px] rounded-[20px] w-screen transition-all duration-300 cursor-default"
        className={`flex flex-col mt-8 border-[#8566FF] border-[3px] bg-white bg-opacity-30 ${lookProfile ? "mr-0 w-[72%]" : "mr-[22px] w-screen"} rounded-[20px] cursor-default transition-all duration-300`}
      >
          <div className="flex justify-between items-center bg-[#9054DE] rounded-t-[20px] w-full h-[80px]">
            <div className="flex font-medium text-[16px] text-white">
              <div className="flex items-center">
                <img 
                  onClick={handleLookProfile} 
                  src={
                    groupChatId
                    ? groupChat?.profile
                    : isUserOne
                    ? getAChat?.userTwo?.profile
                    : getAChat?.userOne?.profile
                  } 
                  alt="" 
                  className="mx-[24px] rounded-full w-[48px] h-[48px] cursor-pointer"
                />
                <div className="flex flex-col">
                  <h1>{
                    groupChatId
                    ? groupChat?.groupName
                    : isUserOne
                    ? getAChat?.userTwo?.displayName
                    : getAChat?.userOne?.displayName
                    }</h1>
                  <h3 className="flex items-center text-[#D9D9D9]">
                    {getActivityStatus()}
                  </h3>
                </div>
              </div>
            </div>
            <BsThreeDotsVertical className="mr-[30px] w-[24px] h-[24px] text-white cursor-pointer"/>
          </div>
          
          <ChatText/>

          <div className="relative flex mt-auto">
            <textarea 
              onChange={handleMessage}
              onKeyDown={handleKeyPress} 
              value={createChatData.message || createMessageData.text}
              placeholder="Enter Your Message..."
              className="bg-[#9054DE] mb-[22px] ml-3 py-2 pr-12 pl-3 rounded-tl-[8px] rounded-bl-[8px] focus:outline-none w-[85%] h-[40px] overflow-auto text-[16px] text-white resize-none scrollbar-hide placeholder-slate-50"
            />

            <div className="bg-[#9054DE] mb-[22px] pr-12 rounded-tr-[8px] rounded-br-[8px] w-[12.5%] h-[40px]">
              <div className="top-5 right-9 absolute flex gap-x-3 -translate-y-1/2 transform">
                <FaMicrophone className="text-white cursor-pointer" size={22} />
                <MdOutlineEmojiEmotions className="text-white cursor-pointer" size={22} />
                <AiOutlinePicture className="text-white cursor-pointer" size={22} />
                <button className="text-white cursor-pointer" type="submit" onClick={handleSentMessage}><IoSend size={22}/></button>
              </div>
            </div>
          </div>
          
      </div>
      {lookProfile && <ChatLookProfile userTwo={getAChat?.userTwo}/>}
    </div>
  )
}

export default Chatting;