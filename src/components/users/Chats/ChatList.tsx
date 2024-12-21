import { useNavigate } from "react-router-dom";
import "./type.css";
import { useApp } from "@/AppProvider";
import { useGetAllChats, useGetFindAUser } from "@/hooks";
import { useEffect } from "react";

const ChatList = () => {
    const { userOneId, chatData } = useApp(); 
    const navigate = useNavigate();
    const { data: getAllChats } = useGetAllChats();
    console.log(getAllChats)
    const userId = localStorage.getItem("userChatId")
    const {data: getFindAUser} = useGetFindAUser({userId: Number(userId)})

    useEffect(() => {
        if (chatData) {
            localStorage.removeItem("userChatId");
        }
    }, [chatData]);
    
    const handleChatting = (chatId: string) => {
        navigate(`/chats/${chatId}`);
    };

    return (
        <div className="flex flex-col max-h-[70vh] overflow-auto scrollbar-hide">
            {
                getFindAUser ? (
                    <div
                    onClick={() => handleChatting(getFindAUser?.id)}
                    className="flex items-center border-[#591DA9] bg-[#2264E5] bg-opacity-10 mx-auto mb-4 border rounded-[12px] w-11/12 h-[88px] cursor-pointer"
                >
                    <img src={getFindAUser?.profile} alt="" className="mx-[12px] rounded-full w-[64px] h-[64px]" />
                    <div className="flex flex-col font-primary">
                        <h1 className="font-medium text-[20px]">{getFindAUser?.displayName}</h1>
                    </div>
                </div>
                ) : (
                    null
                )
            }

            {
                getAllChats?.items?.map((chat: any) => {
                    const isUserOne = userOneId === chat.userOneId;
                    const profile = isUserOne ? chat?.userTwo?.profile : chat?.userOne?.profile;
        
                    return (
                        <div
                            onClick={() => handleChatting(chat?.id)}
                            key={chat?.id}
                            className="flex items-center border-[#591DA9] bg-[#2264E5] bg-opacity-10 mx-auto mb-4 border rounded-[12px] w-11/12 h-[88px] cursor-pointer"
                        >
                            <img src={profile} alt="" className="mx-[12px] rounded-full w-[64px] h-[64px]" />
                            <div className="flex flex-col font-primary">
                                <h1 className="font-medium text-[20px]">{chat?.chatName}</h1>
                            </div>
                        </div>
                    );
            })}
        </div>
    );
};

export default ChatList;
