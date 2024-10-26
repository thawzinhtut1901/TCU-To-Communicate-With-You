import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetMe } from "@/hooks";

const AdminNavbar: React.FC = () => {
  const { data: getMe } = useGetMe();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 right-0 z-10 w-full px-4 py-3 shadow-md bg-main">
      <div className="flex items-center gap-10 md:justify-between md:gap-4">
        {/* Search Bar */}
        <div className="relative w-[200px] md:w-[300px]">
          <IoIosSearch className="absolute top-2 right-3" size="20px" color="gray" />
          <input
            className="w-full px-4 py-2 rounded-full focus:outline-none"
            placeholder="Search"
          />
        </div>

        {/* Right Section: Desktop View */}
        <div className="items-center hidden gap-4 md:flex">
          <Button onClick={() => navigate("/home")} className="text-white">
            Go back to user account
          </Button>

          {/* Notifications */}
          <div className="relative">
            <span className="top-[-5px] right-[-2px] absolute bg-red-500 rounded-full w-[14px] h-[14px] text-[10px] text-center text-white">
              12
            </span>
            <FaBell color="white" size="24px" />
          </div>

          <LanguageSwitcher />

          {/* Profile and Dropdown Toggle */}
          <div className="relative">
            <button
              className="flex items-center gap-2 text-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src={getMe?.profile}
                alt="Profile"
                className="object-cover w-8 h-8 rounded-full"
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
              className="object-cover w-8 h-8 rounded-full"
            />
            <MdKeyboardArrowDown size="20px" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-lg shadow-lg">
              <button
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                onClick={() => navigate("/home")}
              >
                Go to User Account
              </button>

              {/* Notifications */}
              <div className="relative block px-4 py-2">
                <span className="absolute top-0 right-0 bg-red-500 rounded-full w-[14px] h-[14px] text-[10px] text-center text-white">
                  12
                </span>
                <FaBell color="black" size="20px" />
              </div>

              {/* Language Switcher */}
              <div className="block px-4 py-2">
                <LanguageSwitcher />
              </div>

              <button
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
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
