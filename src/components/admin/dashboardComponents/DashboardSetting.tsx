import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { TbTextSize } from "react-icons/tb";
import DarkModeSwitch from "./DarkModeSwitch";
import { FaUserCheck } from "react-icons/fa";
import ActiveSwitch from "./ActiveSwitch";

const DashboardSetting = () => {
  const [fontSize, setFontSize] = useState(16);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 1, 40));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 1, 10));

  return (
    <div className="w-[400px] bg-[#e4d4f9] shadow h-[600px] flex flex-col items-center py-4">
      <h2 className="px-4 py-3 bg-white rounded text-main">
        Dashboard Setting
      </h2>
      <div className="flex flex-col gap-4 my-6">
        {/* text size */}
        <div className="flex w-[400px] items-center justify-between px-4 py-2 h-[60px] bg-white border-b border-gray-300 shadow">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-purple-100 rounded-full">
              <TbTextSize />
            </div>
            <span>Message Text Size</span>
          </div>
          <div className="flex w-[100px] items-center justify-between bg-purple-400 border border-gray-300 rounded-lg">
            <input
              type="text"
              value={fontSize}
              readOnly
              className="w-12 font-bold text-center text-white bg-transparent border-none text-md focus:outline-none"
            />
            <div className="flex flex-col">
              <button onClick={increaseFont}>
                <IoMdArrowDropup className="w-5 h-auto text-white transition hover:text-main2" />
              </button>
              <button onClick={decreaseFont}>
                <IoMdArrowDropdown className="w-5 h-auto text-white transition hover:text-main2" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex w-[400px] items-center justify-between px-4 py-2 h-[60px] bg-white border-b border-gray-300 shadow">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-purple-100 rounded-full">
              <MdDarkMode />
            </div>
            <span>Dark Mode</span>
          </div>
          <DarkModeSwitch/>
        </div>
        <div className="flex w-[400px] items-center justify-between px-4 py-2 h-[60px] bg-white border-b border-gray-300 shadow">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-purple-100 rounded-full">
            <FaUserCheck />
            </div>
            <span>Active Status</span>
          </div>
          <ActiveSwitch/>
        </div>
      </div>
    </div>
  );
};

export default DashboardSetting;
