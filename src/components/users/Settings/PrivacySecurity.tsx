import { ActiveStatus, PersonBook } from "@/assets"
import { AiOutlineStop } from "react-icons/ai"
import { MdAutoDelete, MdMailOutline, MdOutlineCalendarMonth, MdOutlineDevices, MdPersonOutline } from "react-icons/md"
import "./type.css";

const PrivacySecurity = () => {
  return (
    <div className="flex justify-center items-center mx-auto font-roboto">
    <div className="flex flex-col border-slate-500 shadow-inner shadow-slate-700 border w-[400px] h-[700px]">
        <div className="bg-white mx-auto mt-[20px] p-3 rounded-[12px] w-[200px]">
          <h1 className="text-[#591DA9] text-[14px] text-center">Privacy And Security</h1> 
        </div>

         {/* Devices */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
                <MdOutlineDevices className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
                Devices
            </div>

            <div className="flex items-center mr-5">
              <h1 className="font-medium text-[#591DA9] text-[15px]">3</h1>
            </div>
        </div>

        {/* Block user */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <AiOutlineStop className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Block Users
            </div>

            <div className="flex items-center mr-5">
              <h1 className="font-medium text-[#591DA9] text-[15px]">3</h1>
            </div>
        </div>

        {/* Last Seen Online */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <img src={ActiveStatus} alt="" className="mx-[17px] w-[20px] h-[20px]"/>
              Last Seen & Online
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Everybody</h1>
            </div>
        </div>

        {/* Profile */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdPersonOutline className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Profile Photos
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Everybody</h1>
            </div>
        </div>

        {/* Bio */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <img src={PersonBook} alt="" className="mx-[19px] w-[16px] h-[20px]"/>
              Bio
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Nobody</h1>
            </div>
        </div>

        {/* Message */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdMailOutline className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Messages
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Everybody</h1>
            </div>
        </div>

        {/* Forward Message */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdMailOutline className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Forward Messages
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Everybody</h1>
            </div>
        </div>

        {/* Date Of birth */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdOutlineCalendarMonth className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Date of Birth
            </div>

            <div className="flex items-center mr-5">
              <h1 className="font-medium text-[#591DA9] text-[15px]">Nobody</h1>
            </div>
        </div>

        {/* Deactivate */}
        <div className="flex bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[70px] cursor-pointer">
          <div className="flex flex-col my-auto">
            <div className="flex items-center font-medium text-[#591DA9] text-[14px]">
                <MdAutoDelete className="mx-[17px] w-[20px] h-[20px]"/>
                Delete My Account
              </div>

              <div className="flex gap-x-[185px] mt-[14px] text-[14px]">
                <h1 className="ml-[55px] font-normal">If away for</h1>

                <div className="flex items-center">
                  <h1 className="font-medium text-[#591DA9] text-[15px]">12 months</h1>
                </div>
              </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default PrivacySecurity