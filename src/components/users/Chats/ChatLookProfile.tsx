import { Button } from "@/components/ui/button"
import { AiOutlinePicture } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { IoIosSearch } from "react-icons/io"

const ChatLookProfile = ({userTwo} : any) => {
  const getActivityStatus = () => {
    // if (groupChat) {
    //   return `${groupChat?.members?.length} members`;
    // }
  
    // Get the relevant user based on who is viewing
    const targetUser = userTwo;
  
    // Check if user is currently active
    if (targetUser?.activeNow) {
      return (
        <div className="flex items-center gap-2">
          <div className="bg-green-500 rounded-full w-2 h-2 animate-pulse"></div>
          <span>Active now</span>
        </div>
      );
    }
  
    // Calculate last seen time if available
    if (targetUser?.lastSeen) {
      const lastSeen = new Date(targetUser.lastSeen);
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - lastSeen.getTime()) / 1000);
  
      // Less than a minute
      if (diffInSeconds < 60) {
        return `Last seen ${diffInSeconds} seconds ago`;
      }
  
      // Less than an hour
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (diffInMinutes < 60) {
        return `Last seen ${diffInMinutes} min${diffInMinutes > 1 ? 's' : ''} ago`;
      }
  
      // Less than a day
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) {
        return `Last seen ${diffInHours} hr${diffInHours > 1 ? 's' : ''} ago`;
      }
  
      // More than a day
      const diffInDays = Math.floor(diffInHours / 24);
      return `Last seen ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
  
    return "Offline";
  };

  return (
    <div className="top-0 right-2 absolute border-[#8566FF] border-[3px] bg-white bg-opacity-30 my-4 rounded-[20px] w-3/12 h-full cursor-default">
        <div className="bg-white bg-opacity-55 mx-auto mt-[60px] rounded-[12px] w-10/12 h-[480px]">
            <div className="flex flex-col justify-center items-center">
              <img src={userTwo?.profile} alt="" className="mt-[19px] rounded-full w-[128px] h-[128px]"/>
              <h1 className="mt-[24px] font-medium text-[20px]">{userTwo?.displayName}</h1>
              <h3 className="text-[14px] text-black text-opacity-50">{getActivityStatus()}</h3>

              <Button className="bg-[#591DA9] mt-3 w-[160px]">View Profile</Button>
              <Button className="flex gap-x-1 border-[#591DA9] border-2 mt-[27px] mb-[15px] w-[160px] text-black">
                <IoIosSearch className="w-[24px] h-[24px]"/>
                <span className="font-medium text-[16px]">Search in chat</span>
              </Button>
              <Button className="flex border-[#591DA9] border-2 mb-[15px] w-[160px] text-black">
                <AiOutlinePicture className="mr-[15px] w-[24px] h-[24px]"/>
                <span className="font-medium text-[16px]">Sent images</span>
              </Button>
              <Button className="flex gap-x-3 border-[#591DA9] border-2 w-[160px] text-black">
                <BsThreeDots className="mr-[15px] w-[24px] h-[24px]"/>
                <span className="font-medium text-[16px]">Mute Chat</span>
              </Button>
             
            </div>
        </div>
    </div>
  )
}

export default ChatLookProfile