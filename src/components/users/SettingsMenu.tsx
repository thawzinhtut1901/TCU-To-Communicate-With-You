import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io"
import { MdOutlineDashboard, MdOutlineSecurity } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"


const SettingsMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const inDashboard = location.pathname === "/user/settings/dashboard";
    const inPrivacySecurity = location.pathname === "/user/settings/privacy";
    const inNotiSound = location.pathname === "/user/settings/notification";

  return (
    <div className="flex flex-col ml-[40px] font-roboto">
        <h1 className="mt-[28px] font-bold font-roboto text-[28px]">Settings</h1>

        {/* Search */}
        <form className="relative mt-[18px]">
          <IoIosSearch
            className="top-[7px] left-2 absolute"
            size="20px"
            color="gray"
          />
          <input
            className="shadow-md py-1 pl-9 rounded-[6px] w-[320px] h-[34px]"
            placeholder="Search..."
            // value={search}
            // onChange={handleSearchChange}
          />
        </form>
        
        {/* Menu */}
        <div className="flex flex-col mt-[30px]">
            <button onClick={() => navigate("/user/settings/dashboard")} className={`flex gap-x-3 hover:bg-[#9054DE] shadow-md shadow-slate-700 p-3 rounded-t-[10px] text-[14px] hover:text-white ${inDashboard ? "bg-[#9054DE] text-white bg-opacity-80" : "bg-white"}`}>
                <MdOutlineDashboard className="w-[18px] h-[18px]"/>
                DashBoard Setting
            </button>
            <button onClick={() => navigate("/user/settings/privacy")} className={`flex gap-x-3 hover:bg-[#9054DE] shadow-md shadow-slate-700 mt-[12px] p-3 text-[14px] hover:text-white ${inPrivacySecurity ? "bg-[#9054DE] text-white bg-opacity-80" : "bg-white"}`}>
                <MdOutlineSecurity className="w-[18px] h-[18px]"/>
                Privacy and Security
            </button>
            <button onClick={() => navigate("/user/settings/notification")} className={`flex gap-x-3 hover:bg-[#9054DE] shadow-md shadow-slate-700 mt-[12px] p-3 rounded-b-[10px] text-[14px] hover:text-white ${inNotiSound ? "bg-[#9054DE] text-white bg-opacity-80" : "bg-white"}`}>
                <IoMdNotificationsOutline className="w-[18px] h-[18px]"/>
                Notification and Sound
            </button>
        </div>
    </div>
  )
}

export default SettingsMenu