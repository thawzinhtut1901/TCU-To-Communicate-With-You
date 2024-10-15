import { FaBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useGetMe } from "@/hooks";

const AdminNavbar: React.FC = () => {
  const {data: getMe} = useGetMe();
  console.log(getMe)
  const navigate = useNavigate();
  return (
    <div className="top-0 right-0 z-10 sticky flex justify-between items-center bg-main px-20 py-4 w-full">
      <div className="relative">
        <IoIosSearch
          className="top-[7px] right-2 absolute"
          size="20px"
          color="gray"
        />
        <input
          className="px-4 py-1 rounded-full w-[300px]"
          placeholder="Search"
        />
      </div>

      <div className="flex justify-center items-center gap-4">
        <div>
          <Button onClick={() => navigate("/home")} className="text-white">Go back to user account</Button>
        </div>
        <div className="relative">
          <span className="top-[-5px] right-[-2px] absolute bg-red-500 rounded-full w-[14px] h-[14px] text-[10px] text-center text-white">
            12
          </span>
          <FaBell color="white" size="24px" />
        </div>
        <LanguageSwitcher />
        <div className="flex items-center gap-3">
          <img src={getMe?.profile} className="rounded-full w-10 h-10" alt="Profile" />
          <div className="flex flex-col justify-center items-start gap-1">
            <h3 className="text-white">{getMe?.displayName}</h3>
          </div>
          <button className="border rounded-full text-white">
            <MdKeyboardArrowDown size="20px" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
