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

    const handleGroupChat = (groupChatId:string) => {
        navigate(`/chats/groups/${groupChatId}`)
    }

    return (
        <div className="flex flex-col max-h-[60vh] overflow-auto scrollbar-hide">
            {
                getFindAUser ? (
                    <div
                    onClick={() => handleChatting(getFindAUser?.id)}
                    className="flex items-center border-[#591DA9] bg-[#2264E5] bg-opacity-10 mx-auto mb-4 border rounded-[12px] w-11/12 h-[88px] cursor-pointer"
                >
                    <img src={getFindAUser?.profile} alt="" className="mx-[12px] rounded-full w-[50px] h-[50px]" />
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
                    const profile =chat?.groupName ? chat.profile : isUserOne ? chat?.userTwo?.profile : chat?.userOne?.profile
                    const handleClick = chat.type === "groupChat" 
                    ? () => handleGroupChat(chat?.id) 
                    : () => handleChatting(chat?.id);

                    return (
                        <div
                            onClick={handleClick}
                            key={chat?.id}
                            className="flex items-center border-[#591DA9] bg-[#2264E5] bg-opacity-10 mx-auto mb-4 border rounded-[12px] w-11/12 h-[88px] cursor-pointer"
                        >
                            <img src={profile} alt="" className="mx-[12px] rounded-full w-[50px] h-[50px]" />
                            <div className="flex flex-col font-primary">
                                <h1 className="font-medium text-[20px]">
                                    {chat?.groupName ? chat.groupName : (
                                        isUserOne ? chat?.userTwo?.displayName : chat?.userOne?.displayName
                                    )}
                                </h1>
                                <p className="text-[#393939] text-[16px]">
                                    {chat?.latestMessage?.senderId === userOneId 
                                        ? `You: ${chat?.latestMessage?.text}`
                                        : chat?.latestMessage?.text
                                    }
                                </p>
                            </div>
                        </div>
                    );
            })}
        </div>
    );
};

export default ChatList;
