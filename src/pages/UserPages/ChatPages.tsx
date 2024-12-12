// import { useApp } from "@/AppProvider";
// import { ChatLookProfile, ChatSideBar, Chatting, StartChat } from "@/components/users/Chats"
// import { useEffect, useState } from "react";
import { ChatSideBar } from "@/components/users/Chats"


// const ChatPages = () => {
//   const [selectedChat, setSelectedChat] = useState<number | null>(null);
//   const [lookProfile, setLookProfile] = useState(false);
//   // const { userId } = location.state || {};
//   const {socket, userOneId} = useApp();

//   useEffect(() => {
//     if(userOneId !== id) {
//       setSelectedChat(userId)
//     }
//   }, [userId])
  
//   return (
//     <div className="flex gap-x-4 w-screen h-screen overflow-hidden">
//       <ChatSideBar userId={userId} onSelectChat={setSelectedChat} selectedChat={selectedChat} socket={socket}/>
//       {/* {selectedChat === null ? (<StartChat />) : (<Chatting userId={selectedChat} socket={socket} lookProfile={lookProfile} setLookProfile={setLookProfile}/>)}
//       {lookProfile && <ChatLookProfile />} */}

//       <Outlet/>
//     </div>
//   )
// }

// export default ChatPages



const ChatPages = () => {
  return (
    <div className="mr-8">
      <ChatSideBar/>
    </div>
  )
}

export default ChatPages