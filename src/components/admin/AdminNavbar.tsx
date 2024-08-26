import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import LanguageSwitcher from "./LanguageSwitcher";
import profile from "../../assets/avatar.jpg";

const AdminNavbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-20 py-4 bg-main">
      <div className="relative">
        <IoIosSearch
          className="absolute top-[7px] left-2"
          size="20px"
          color="gray"
        />
        <input
          className="w-[300px] rounded-full px-4 py-1"
          placeholder="    Search"
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          <span className="absolute w-[14px] h-[14px] top-[-5px] right-[-2px] text-center text-[10px] text-white bg-red-500 rounded-full">
            12
          </span>
          <FaBell color="white" size="24px" />
        </div>
        <LanguageSwitcher />
        <div className="flex items-center gap-3">
          <img src={profile} className="w-10 h-10 rounded-full" alt="Profile" />
          <div className="flex flex-col items-start justify-center gap-1">
            <h3 className="text-white">John Doe</h3>
          </div>
          <button className="text-white border rounded-full">
            <MdKeyboardArrowDown size="20px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
