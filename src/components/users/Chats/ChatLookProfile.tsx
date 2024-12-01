import { friSuggestionProfile } from "@/assets"
import { Button } from "@/components/ui/button"
import { AiOutlinePicture } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { IoIosSearch } from "react-icons/io"

const ChatLookProfile = () => {
  return (
    <div className="flex flex-col border-[#8566FF] border-[3px] bg-white bg-opacity-30 mr-[22px] rounded-[20px] w-4/12 h-screen cursor-default">
        <div className="bg-white bg-opacity-55 mx-auto mt-[60px] rounded-[12px] w-11/12 h-[465px]">
            <div className="flex flex-col justify-center items-center">
              <img src={friSuggestionProfile} alt="" className="mt-[19px] rounded-full w-[128px] h-[128px]"/>
              <h1 className="mt-[24px] font-medium text-[20px]">Thaw Zin</h1>
              <h3 className="text-[14px] text-black text-opacity-50">Active 3hr ago</h3>

              <Button className="bg-[#591DA9] mt-3 w-[205px]">View Profile</Button>
              <Button className="flex border-[#591DA9] border-2 mt-[27px] mb-[5px] w-[205px] text-black">
                <IoIosSearch className="mr-[12px] w-[24px] h-[24px]"/>
                <span className="font-medium text-[16px]">Search in chat</span>
              </Button>
              <Button className="flex border-[#591DA9] border-2 mb-[5px] w-[205px] text-black">
                <AiOutlinePicture className="mr-[15px] w-[24px] h-[24px]"/>
                <span className="font-medium text-[16px]">Sent images</span>
              </Button>
              <Button className="flex gap-x-3 border-[#591DA9] border-2 w-[205px] text-black">
                <BsThreeDots className="mr-[15px] w-[24px] h-[24px]"/>
                <span className="font-medium text-[16px]">Mute Chat</span>
              </Button>
             
            </div>
        </div>
    </div>
  )
}

export default ChatLookProfile