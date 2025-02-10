import { ChatSideBar } from "@/components/users/Chats"
import { FaArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"


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
  const navigate = useNavigate();

  return (
    <div className="my-4 mr-8">
      <FaArrowLeft onClick={() => navigate("/")} className="flex ml-3 w-[24px] h-[20px] text-pink-50"/>
      <ChatSideBar/>
    </div>
  )
}

export default ChatPages