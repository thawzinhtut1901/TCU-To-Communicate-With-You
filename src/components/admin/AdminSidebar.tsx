import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdSpaceDashboard, MdOutlineLogout } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsChatQuoteFill } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { Button } from "../ui/button";
import Divider from "./Divider";
import Logo from "./Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { IconType } from "react-icons/lib";
import "./type.css";
import { useState } from "react";
import { logout } from "@/services/authService";

interface SidebarLinkProps {
  to: string;
  icon: IconType;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon: Icon, label }) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <Button
        variant="adminSidebar"
        size="adminSidebar"
        className={isActive ? "bg-main text-white" : "bg-background"}
      >
        <Icon />
        {label}
      </Button>
    )}
  </NavLink>
);

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const logoutHandler = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    setShowLogoutDialog(false);
    navigate("/");
    logout();
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
  };

  return (
    <div className="flex flex-col items-center gap-6 py-8 w-1/5 max-h-[100vh] overflow-auto scrollbar-hide">
      <Logo />
      <div className="flex flex-col justify-center items-center gap-3">
        <SidebarLink to="/admin-dashboard/dashboard" icon={MdSpaceDashboard} label="Dashboard" />
        <SidebarLink to="/admin-dashboard/user-data" icon={FaUser} label="Users" />
        <SidebarLink to="/admin-dashboard/groups" icon={FaUserGroup} label="Groups" />
      </div>
      <Divider />
      <div className="flex flex-col justify-center items-center gap-3">
        <SidebarLink to="/admin-dashboard/admins" icon={RiAdminFill} label="Admins" />
        <SidebarLink to="/admin-dashboard/profile" icon={CgProfile} label="Profile" />
        <SidebarLink to="/admin-dashboard/quote-management" icon={BsChatQuoteFill} label="Quotes Management" />
        <SidebarLink to="/admin-dashboard/validate-users" icon={GrValidate} label="Validate Users" />
        <SidebarLink to="/admin-dashboard/user-reports" icon={TbReportAnalytics} label="User Reports" />
      </div>
      <Divider />
      <div className="flex flex-col justify-center items-center gap-3">
        <SidebarLink to="/admin-dashboard/setting" icon={IoIosSettings} label="Setting" />
        <Button onClick={logoutHandler} variant="adminSidebar" size="adminSidebar">
          <MdOutlineLogout />
          Log out
        </Button>


      </div>
      {showLogoutDialog && (
          <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white shadow-lg p-6 rounded-[5px] w-[450px]">
              <h2 className="font-semibold text-[18px]">
                Are you sure you want to log out?
              </h2>
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={cancelLogout}
                  className="bg-gray-300 hover:bg-gray-200 px-4 py-2 rounded-[5px] text-slate-950 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-[5px] text-white hover:text-slate-100"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default AdminSidebar;
