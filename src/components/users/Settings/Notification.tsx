import { MdNotificationsNone, MdOutlineAddReaction, MdVibration } from "react-icons/md"
import ActiveSwitch from "@/components/admin/dashboardComponents/ActiveSwitch";
import { IoMailUnread } from "react-icons/io5";
import { BsMicFill } from "react-icons/bs";

const Notification = () => {
  return (
    <div className="flex justify-center items-center mx-auto font-roboto">
    <div className="flex flex-col border-slate-500 shadow-inner shadow-slate-700 border w-[400px] h-[700px]">
        <div className="bg-white mx-auto mt-[20px] p-3 rounded-[12px] w-[200px]">
          <h1 className="text-[#591DA9] text-[14px] text-center">Notification and Sound</h1> 
        </div>

         {/* Noti for chat */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
                <MdNotificationsNone className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
                Notification from All Chats
            </div>

            <div className="flex items-center mr-5">
              <ActiveSwitch/>
            </div>
        </div>

        {/* Noti for group */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdNotificationsNone className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Notification from All Groups
            </div>

            <div className="flex items-center mr-5">
              <ActiveSwitch/>
            </div>
        </div>

        {/* Reaction */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
            <MdOutlineAddReaction className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Reaction
            </div>

            <div className="flex items-center mr-5">
              <ActiveSwitch/>
            </div>
        </div>

        {/* Count Unread Messages */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <IoMailUnread className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Count Unread Messages
            </div>

            <div className="flex items-center mr-5">
              <ActiveSwitch/>
            </div>
        </div>
        
        {/* Ringtone */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <BsMicFill className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Ringtone
            </div>

            <div className="flex items-center mr-5">
              <h1 className="font-medium text-[#591DA9] text-[15px]">Default</h1>
            </div>
        </div>

        {/* Vibrate */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdVibration className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Vibrate
            </div>

            <div className="flex items-center mr-5">
              <ActiveSwitch/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Notification