import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5"
import ChatList from "./ChatList";
import { useApp } from "@/AppProvider"
import { AddMembers } from "../Groups/AddMembers";

const ChatSideBar = () => {
  const {menuOpen, setMenuOpen } = useApp();

  const hadleMenuOpen = () => {
    setMenuOpen(!menuOpen)
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
            <div className="mt-[13px] ml-[27px]">
              {/* <Button className="bg-black bg-opacity-30 shadow-md shadow-slate-400">Create Group</Button> */}
              <AddMembers/>
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