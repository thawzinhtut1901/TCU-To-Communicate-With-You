import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5"
import ChatList from "./ChatList";
import { useApp } from "@/AppProvider"
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// interface ChatSideBarProps {
//   onSelectChat: (id: number) => void,
//   selectedChat: number | null,
//   userId : number
//   socket: any
// }

// const ChatSideBar = ({ onSelectChat, selectedChat, userId, socket }: ChatSideBarProps) => {
//   const navigate = useNavigate();
//   const IdOfUser = 
//   const [menuOpen, setMenuOpen] = useState(true);
  // const createYourQuote = useCreateQuote();
  // const [createQuote, setCreateQuote] = useState<userPublicQuotesData>({
  //   quote: ""
  // })

  // useEffect(() => {
  //   if(!socket) return;

  //   console.log(socket.id)

  //   socket.on("createChat", (data: SocketData) => {
  //     console.log("Socket is Connect", data);
  //   });

  //   return () => {
  //     socket.off("createChat");
  //   };
  // }, [socket])

//   console.log(userId)
  
//   const handleSideBar = () => {
//     setMenuOpen(!menuOpen)
//   };

  // const handleQuote = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const quote = event.target.value;
  //   setCreateQuote((prev) => ({...prev, quote}))
  // }

  // const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   createYourQuote.mutate(createQuote)
  // }

//   return (
//     <div className={`flex flex-col cursor-default border-[#8566FF] border-[3px] bg-white bg-opacity-30 ml-[22px] rounded-[20px] h-screen ${menuOpen ? "w-1/4" : "w-[80px]"} transition-all duration-300`}>
//         <div className={`${menuOpen ? "ml-[27px]" : "justify-center"} flex items-center gap-x-3 mt-[18px] text-[#591DA9]`}>
//             <IoMenu onClick={handleSideBar} className="flex w-[25px] h-[25px] cursor-pointer"/>
//             {menuOpen && <h1 className="font-roman text-[33px]">TCU</h1>}
//         </div>

        // {
        //     menuOpen && (
        //         <div className="flex flex-col">
        //             <form onSubmit={handleQuoteSubmit} className="relative mx-auto w-full max-w-sm md:max-w-md">
        //                 <div className="top-[10px] left-10 absolute border-[#591DA9] bg-[#591DA9] -mt-[3px] md:-mt-2 -ml-2 border rounded-full w-3 h-3"></div>
        //                 <input 
        //                     type="text" 
        //                     value={createQuote.quote}
        //                     onChange={handleQuote}
        //                     className="border-[#591DA9] bg-white bg-opacity-25 shadow-inner shadow-slate-800 mt-1 md:mt-2 ml-[14px] px-2 md:px-4 py-1 md:py-2 border rounded-[8px] w-11/12 text-[12px] text-black text-center md:text-[16px] cursor-text placeholder-gray-500"
        //                     placeholder="Share your thoughts, inspire others! Write a quote today!"
        //                 />
        //             </form>

        //             <div className="flex">
        //                 <form className="relative mx-[14px] mt-6">
        //                     <IoIosSearch
        //                         className="top-[7px] left-2 absolute"
        //                         size="20px"
        //                         color="purple"
        //                     />
        //                     <input
        //                         className="bg-[#B895E7] bg-opacity-70 shadow-md shadow-slate-700 px-8 py-1 rounded-[6px] w-[300px] h-[34px] text-white placeholder-slate-200"
        //                         placeholder="Search..."
        //                         // value={search}
        //                         // onChange={handleSearchChange}
        //                     />
        //                 </form>
        //             </div>

        //             <div className="mt-[25px]">
        //                 <ChatList onSelectChat={onSelectChat} selectedChat={selectedChat} />
        //             </div>
        //         </div>
                
        //     )
        // }
//     </div>
//   )
// }

// export default ChatSideBar


const ChatSideBar = () => {
  const {menuOpen, setMenuOpen } = useApp();
  const navigate = useNavigate();

  const hadleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  const handleCreateGroup = () => {
    navigate("/chats/create-groups")
  }

  return (
    <div className={`flex flex-col cursor-default border-[#8566FF] border-[3px] bg-white bg-opacity-30 ml-[22px] rounded-[20px] h-screen ${menuOpen ? "w-full" : "w-[80px]"} transition-all duration-300`}>
      <div className={`${menuOpen ? "ml-[27px]" : "justify-center"} flex items-center gap-x-3 mt-[18px] text-[#591DA9]`}>
        <IoMenu onClick={hadleMenuOpen} className="flex w-[25px] h-[25px] cursor-pointer"/>
        {menuOpen && <h1 className="font-roman text-[33px]">TCU</h1>}
      </div>

      {
        menuOpen && (
          <div className="flex flex-col">
            <div onClick={handleCreateGroup} className="mt-[13px] ml-[27px]">
              <Button className="bg-black bg-opacity-30 shadow-md shadow-slate-400">Create Group</Button>
            </div>

            <div className="flex">
              <form className="relative mx-[14px] mt-6">
                <IoIosSearch
                  className="top-[7px] left-2 absolute"
                  size="20px"
                  color="purple"
                />
                <input
                  className="bg-[#B895E7] bg-opacity-70 shadow-md shadow-slate-700 px-8 py-1 rounded-[6px] w-[300px] h-[34px] text-white placeholder-slate-200"
                  placeholder="Search..."
                  // value={search}
                  // onChange={handleSearchChange}
                />
              </form>
            </div>

            <div className="mt-[25px]">
              <ChatList/>
            </div>
          </div>
                
        )
      }
    </div>
  )
}

export default ChatSideBar;