import { useNavigate, useParams } from "react-router-dom";
import "./type.css";
import { useGetAllChats, useGetMessages } from "@/hooks";
import { useApp } from "@/AppProvider";

const ChatList = () => {
    const {data: getAllChats } = useGetAllChats();
    const {chatId} = useParams();
    const {data: getMessage} = useGetMessages(chatId!)
    console.log(getMessage)
    const {userOneId} = useApp();

    const navigate = useNavigate();

    const handleChatting = (chatId:string) => {
        navigate(`/chats/${chatId}`)
    }

  return (
    <div className="flex flex-col max-h-[70vh] overflow-auto scrollbar-hide">
        {
            getAllChats?.items?.map((chat:any) => {
                const isUserOne = userOneId === chat.userOneId;
                const profile = isUserOne ? chat?.userTwo?.profile : chat?.userOne?.profile;
                // const chatName = isUserOne ? chat.userTwo.chatName : chat.userOne.chatName;

                return (
                    <div 
                    onClick={() => handleChatting(chat.id)} 
                    key={chat?.id} 
                    className="flex items-center border-[#591DA9] bg-[#2264E5] bg-opacity-10 mx-auto mb-4 border rounded-[12px] w-11/12 h-[88px] cursor-pointer"
                    // className={`flex items-center border-[#591DA9] mx-auto mb-4 border rounded-[12px] w-11/12 h-[88px] cursor-pointer ${selectedChat === user?.id ? "bg-blue-600 text-white" : "bg-[#2264E5] bg-opacity-10"}`}
                >
                    <img src={profile} alt="" className="mx-[12px] rounded-full w-[64px] h-[64px]"/>
                    <div className="flex flex-col font-primary">
                        <h1 className="font-medium text-[20px]">{chat?.chatName}</h1>
                        {/* <p className="text-[#393939]">{user?.chatMsg}</p> */}
                    </div>
                </div>
                )
            })
        }
    </div>
  )
}

export default ChatList;