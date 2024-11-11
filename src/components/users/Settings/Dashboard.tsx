import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { TbTextSize } from "react-icons/tb"
import { MdOutlineNightlight } from "react-icons/md";
import DarkModeSwitch from "@/components/admin/dashboardComponents/DarkModeSwitch";
import { ActiveStatus } from "@/assets";
import ActiveSwitch from "@/components/admin/dashboardComponents/ActiveSwitch";

const Dashboard = () => {
    const [fontSize, setFontSize] = useState(16);

    const increaseFont = () => setFontSize((prev) => Math.min(prev + 1 , 40));
    const decreaseFont = () => setFontSize((prev) => Math.max(prev - 1 , 10));
    
  return (
    <div className="flex justify-center items-center mx-auto font-roboto">
        <div className="flex flex-col border-slate-500 shadow-inner shadow-slate-700 border w-[400px] h-[700px]">
            <div className="bg-white mx-auto mt-[20px] p-3 rounded-[12px] w-[200px]">
              <h1 className="text-[#591DA9] text-[14px] text-center">DashBoard Setting</h1> 
            </div>

             {/* Message Text Size */}
            <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
                <div className="flex items-center font-medium text-[14px]">
                    <TbTextSize className="border-[#591DA9] mx-[17px] border rounded-full w-[20px] h-[20px] text-[#591DA9]"/>
                    Message Text Size 
                </div>

                <div className="flex justify-between items-center bg-[#9054DE] bg-opacity-80 my-auto mr-3 rounded-[8px] w-[70px] h-9">
                    <div
                    className="flex px-4 py-1 rounded-[8px] text-white cursor-pointer"
                    >
                        {fontSize}
                    </div>

                    <div className="flex flex-col">
                        <button onClick={increaseFont}>
                            <IoMdArrowDropup className="w-5 h-auto text-white hover:text-slate-300 transition" />
                        </button>
                        <button onClick={decreaseFont}>
                            <IoMdArrowDropdown className="w-5 h-auto text-white hover:text-slate-300 transition" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Dark Mode */}
            <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
                <div className="flex items-center font-medium text-[14px]">
                    <MdOutlineNightlight className="border-[#591DA9] mx-[17px] border rounded-full w-[20px] h-[20px] text-[#591DA9]"/>
                    Dark Mode
                </div>

                <div className="flex items-center mr-3">
                    <DarkModeSwitch/>
                </div>
            </div>

            {/* Active Status */}
            <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
                <div className="flex items-center font-medium text-[14px]">
                    <img src={ActiveStatus} alt="" className="mx-[17px] w-[20px] h-[20px]"/>
                    Active Status
                </div>

                <div className="flex items-center mr-3">
                    <ActiveSwitch/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard