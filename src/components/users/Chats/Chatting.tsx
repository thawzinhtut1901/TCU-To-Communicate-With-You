import { friSuggestionProfile } from "@/assets"
import { BsThreeDotsVertical } from "react-icons/bs"
import ChatText from "./ChatText"
import { FaMicrophone } from "react-icons/fa"
import { MdOutlineEmojiEmotions } from "react-icons/md"
import { AiOutlinePicture } from "react-icons/ai"


const Chatting = ({ lookProfile, setLookProfile }: { lookProfile: boolean; setLookProfile: React.Dispatch<React.SetStateAction<boolean>> }) => {
  
  const handleLookProfile = () => {
    setLookProfile(!lookProfile)
  }

  return (
    <div className={`flex flex-col border-[#8566FF] border-[3px] bg-white bg-opacity-30 ${lookProfile ? "mr-0" : "mr-[22px]"} rounded-[20px] w-screen cursor-default`}>
        <div className="flex justify-between items-center bg-[#9054DE] rounded-t-[20px] w-full h-[80px]">
          <div onClick={handleLookProfile} className="flex font-medium text-[16px] text-white">
            <img src={friSuggestionProfile} alt="" className="mx-[24px] rounded-full w-[48px] h-[48px] cursor-pointer"/>
            <div className="flex flex-col">
              <h1>Thaw Zin</h1>
              <h3 className="text-[#D9D9D9]">Active 20m ago</h3>
            </div>
          </div>

          <BsThreeDotsVertical className="mr-[30px] w-[24px] h-[24px] text-white cursor-pointer"/>
        </div>
        <ChatText/>

        <div className="relative flex mt-auto">
          <input 
            placeholder="Enter Your Message..."
            className="bg-[#9054DE] mx-auto mb-[22px] pr-12 pl-3 rounded-[8px] w-[98%] h-[40px] text-[16px] text-white placeholder-slate-50"
          />
          <div className="top-5 right-9 absolute flex gap-x-3 transform -translate-y-1/2">
            <FaMicrophone className="text-white cursor-pointer" size={22} />
            <MdOutlineEmojiEmotions className="text-white cursor-pointer" size={22} />
            <AiOutlinePicture className="text-white cursor-pointer" size={22} />
          </div>
        </div>
    </div>
  )
}

export default Chatting;