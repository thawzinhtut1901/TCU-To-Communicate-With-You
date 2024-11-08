import { FC } from "react";
import { IconType } from "react-icons";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineSecurity } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

interface SettingButtonProps {
  icon: IconType;
  label: string;
  to: string;
  isActive: boolean;
}

const SettingButton: FC<SettingButtonProps> = ({ icon: Icon, label, to, isActive }) => (
  <NavLink to={to}>
    <button className={`flex gap-4 items-center hover:bg-main duration-300 hover:text-white w-[400px] px-6 py-4 text-lg rounded ${isActive ? "bg-[#9054DE] text-white bg-opacity-80" : "bg-white"}`}>
      <Icon size="30px" className={isActive ? "text-white" : "hover:text-white"} />
      <span>{label}</span>
    </button>
  </NavLink>
);

const SettingMenu: FC = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-5">
      <h3 className="justify-start font-semibold text-3xl">Setting</h3>

      <div className="relative">
        <IoSearchOutline className="top-2 left-2 absolute" size="16px" />
        <input
          type="text"
          placeholder="Search"
          className="shadow-sm px-4 py-1 pl-8 rounded w-[400px]"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <SettingButton
          to="dashboard-setting"
          icon={MdOutlineDashboard}
          label="Dashboard Setting"
          isActive= {location.pathname === "/admin-dashboard/setting/dashboard-setting"}
        />

        <SettingButton
          to="privacy-security"
          icon={MdOutlineSecurity}
          label="Privacy and Security"
          isActive ={location.pathname === "/admin-dashboard/setting/privacy-security"}
        />
        <SettingButton
          to="notification-sound"
          icon={IoMdNotificationsOutline}
          label="Notification and Sound"
          isActive = {location.pathname === "/admin-dashboard/setting/notification-sound"}
        />
      </div>
    </div>
  );
};

export default SettingMenu;
