import { FC } from "react";
import { IconType } from "react-icons";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineSecurity } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface SettingButtonProps {
  icon: IconType;
  label: string;
  to: string;
}

const SettingButton: FC<SettingButtonProps> = ({ icon: Icon, label, to }) => (
  <NavLink to={to}>
    <button className="flex gap-4 items-center bg-white hover:bg-main duration-300 hover:text-white w-[400px] px-6 py-4 text-lg rounded">
      <Icon size="30px" className="hover:text-white" />
      <span>{label}</span>
    </button>
  </NavLink>
);

const SettingMenu: FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="justify-start text-3xl font-semibold">Setting</h3>

      <div className="relative">
        <IoSearchOutline className="absolute top-2 left-2" size="16px" />
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-1 pl-8 rounded w-[400px] shadow-sm"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <SettingButton
          to="dashboard-setting"
          icon={MdOutlineDashboard}
          label="Dashboard Setting"
        />

        <SettingButton
          to="privacy-security"
          icon={MdOutlineSecurity}
          label="Privacy and Security"
        />
        <SettingButton
          to="notification-sound"
          icon={IoMdNotificationsOutline}
          label="Notification and Sound"
        />
      </div>
    </div>
  );
};

export default SettingMenu;
