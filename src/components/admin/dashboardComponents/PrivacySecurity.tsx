import { 
    MdDevices, MdOutlineAutoDelete, MdOutlineMessage 
  } from "react-icons/md";
  import { GoBlocked } from "react-icons/go";
  import { FiPhone } from "react-icons/fi";
  import { FaCalendarAlt, FaUserCheck } from "react-icons/fa";
  import { IoPersonOutline } from "react-icons/io5";
  import { LuUserSquare } from "react-icons/lu";
  import { TbMessageForward } from "react-icons/tb";
import { FC } from "react";

  interface SettingItemProps {
    icon: FC; 
    label: string;
    value: string | number;
    isWarning?: boolean;
  }
  
  const SettingItem: FC<SettingItemProps> = ({ icon: Icon, label, value, isWarning }) => (
    <div className="flex w-[400px] items-center justify-between px-4 py-2 h-[60px] bg-white border-b border-gray-300 shadow">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-8 h-8 mr-3 bg-purple-100 rounded-full">
          <Icon />
        </div>
        <span>{label}</span>
      </div>
      <p className={`px-6 font-semibold ${isWarning ? 'text-red-500' : 'text-main'}`}>
        {value}
      </p>
    </div>
  );
  
  const PrivacySecurity = () => {
    const settings = [
      { icon: MdDevices, label: "Devices", value: "3" },
      { icon: GoBlocked, label: "Block Users", value: "3" },
      { icon: FiPhone, label: "Phone Number", value: "Everybody" },
      { icon: FaUserCheck, label: "Last Seen & Online", value: "Everybody" },
      { icon: IoPersonOutline, label: "Profile Photos", value: "Everybody" },
      { icon: LuUserSquare, label: "Bio", value: "Nobody" },
      { icon: MdOutlineMessage, label: "Messages", value: "Everybody" },
      { icon: TbMessageForward, label: "Forwarded Messages", value: "Everybody" },
      { icon: FaCalendarAlt, label: "Date of Birth", value: "Everybody" },
    ];
  
    return (
      <div className="w-[400px] bg-[#e4d4f9] shadow h-[600px] flex flex-col items-center pt-4">
        <h2 className="sticky top-0 left-0 px-4 py-3 bg-white rounded text-main">
          Privacy & Security
        </h2>
        <div className="flex flex-col gap-5 my-6 overflow-y-scroll">
          {settings.map(({ icon, label, value }) => (
            <SettingItem key={label} icon={icon} label={label} value={value} />
          ))}
        </div>
        <div className="flex w-[400px] items-center justify-between px-4 py-2 h-[80px] bg-white border-b border-gray-300 shadow">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-purple-100 rounded-full">
              <MdOutlineAutoDelete />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-red-500">Delete My Account</span>
              <span className="text-sm">If away for</span>
            </div>
          </div>
          <p className="pt-6 text-sm text-main">12 months</p>
        </div>
      </div>
    );
  };
  
  export default PrivacySecurity;
  