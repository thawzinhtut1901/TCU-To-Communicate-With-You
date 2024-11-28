import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetMe } from "@/hooks";

const AdminNavbar: React.FC = () => {
  const { data: getMe } = useGetMe();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="top-0 right-0 z-10 sticky bg-main shadow-md px-4 py-3 w-full">
      <div className="flex md:justify-between items-center gap-10 md:gap-4">
        {/* Search Bar */}
        <div className="relative w-[200px] md:w-[300px]">
          <IoIosSearch className="top-2 right-3 absolute" size="20px" color="gray" />
          <input
            className="px-4 py-2 rounded-full w-full focus:outline-none"
            placeholder="Search"
          />
        </div>

        {/* Right Section: Desktop View */}
        <div className="md:flex items-center gap-4 hidden">
          <Button onClick={() => navigate("/user/home")} className="text-white">
            Go back to user account
          </Button>

          {/* Notifications */}
          <div className="relative">
            <span className="top-[-5px] right-[-2px] absolute bg-red-500 rounded-full w-[14px] h-[14px] text-[10px] text-center text-white">
              12
            </span>
            <FaBell color="white" size="24px" />
          </div>

          <div className="flex">
            <h3 className="font-medium font-poppins text-[16px] text-slate-50">{getMe?.userName}</h3>
          </div>

          {/* Profile and Dropdown Toggle */}
          <div className="relative">
            <button
              className="flex items-center gap-2 text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={getMe?.profile}
                alt="Profile"
                className="rounded-full w-8 h-8 object-cover"
              />
              <MdKeyboardArrowDown size="20px" />
            </button>
          </div>
        </div>


        {/* Profile + Dropdown for Mobile */}
        <div className="relative md:hidden">
          <button
            className="flex items-center gap-2 text-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src={getMe?.profile}
              alt="Profile"
              className="rounded-full w-8 h-8 object-cover"
            />
            <MdKeyboardArrowDown size="20px" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="right-0 z-20 absolute bg-white shadow-lg mt-2 py-2 rounded-lg w-48">
              <button
                className="block hover:bg-gray-100 px-4 py-2 w-full text-gray-700 text-left"
                onClick={() => navigate("/home")}
              >
                Go to User Account
              </button>

              {/* Notifications */}
              <div className="block relative px-4 py-2">
                <span className="top-0 right-0 absolute bg-red-500 rounded-full w-[14px] h-[14px] text-[10px] text-center text-white">
                  12
                </span>
                <FaBell color="black" size="20px" />
              </div>

              <button
                className="block hover:bg-gray-100 px-4 py-2 w-full text-gray-700 text-left"
                onClick={() => console.log("Logout")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
