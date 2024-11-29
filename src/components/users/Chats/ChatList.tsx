import { friSuggestionProfile } from "@/assets"
import "./type.css";
import { useGetAllChats } from "@/hooks";

const ChatList = ({ onSelectChat, selectedChat }: { onSelectChat: (id: number) => void; selectedChat: number | null }) => {
    const {data: getAllChats} = useGetAllChats();
    console.log(getAllChats)
    const userList = [
        {
            id: 1,
            profilePicture: {friSuggestionProfile},
            displayName : "Thaw Zin",
            chatMsg : "Hello"
        },
        {
            id: 2,
            profilePicture: {friSuggestionProfile},
            displayName : "Thaw Zin",
            chatMsg : "Hello"
        },
        {
            id: 3,
            profilePicture: {friSuggestionProfile},
            displayName : "Thaw Zin",
            chatMsg : "Hello"
        },
        {
            id: 4,
            profilePicture: {friSuggestionProfile},
            displayName : "Thaw Zin",
            chatMsg : "Hello"
        },
        {
            id: 5,
            profilePicture: {friSuggestionProfile},
            displayName : "Thaw Zin",
            chatMsg : "Hello"
        },
        {
            id: 6,
            profilePicture: {friSuggestionProfile},
            displayName : "Kyn",
            chatMsg : "Hello"
        },
        {
            id: 7,
            profilePicture: {friSuggestionProfile},
            displayName : "Kyu",
            chatMsg : "Hello"
        },
        {
            id: 8,
            profilePicture: {friSuggestionProfile},
            displayName : "Thaw Zin",
            chatMsg : "Hello"
        },
        {
            id: 9,
            profilePicture: {friSuggestionProfile},
            displayName : "Thaw Zin",
            chatMsg : "Hello"
        },
        {
            id: 10,
            profilePicture: {friSuggestionProfile},
            displayName : "Thaw Zin",
            chatMsg : "Hello"
        },
    ];

  return (
    <div className="flex flex-col max-h-[70vh] overflow-auto scrollbar-hide">
        {
            userList?.map((user:any) => (
                <div onClick={() => onSelectChat(user.id)} key={user?.id} className={`flex items-center border-[#591DA9] mx-auto mb-4 border rounded-[12px] w-11/12 h-[88px] cursor-pointer ${selectedChat === user?.id ? "bg-blue-600 text-white" : "bg-[#2264E5] bg-opacity-10"}`}>
                    <img src={user?.profilePicture} alt="" className="mx-[12px] rounded-full w-[64px] h-[64px]"/>
                    <div className="flex flex-col font-primary">
                        <h1 className="font-medium text-[20px]">{user?.displayName}</h1>
                        <p className="text-[#393939]">{user?.chatMsg}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ChatList