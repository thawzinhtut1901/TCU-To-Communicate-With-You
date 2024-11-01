// Import statements
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaUserGroup } from "react-icons/fa6";
import { MdSpaceDashboard, MdOutlineLogout, MdMenu } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsChatQuoteFill } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { IconType } from "react-icons/lib";

import { Button } from "../ui/button";
import Divider from "./Divider";
import Logo from "./Logo";
import { logout } from "@/services/authService";
import "./type.css";

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
        className={`flex items-center justify-between px-5 gap-2 ${
          isActive ? "bg-main text-white" : "bg-background"
        }`}
      >
        {label}
        <Icon className="text-xl" aria-hidden="true" />
      </Button>
    )}
  </NavLink>
);

const LogoutDialog: React.FC<{ onCancel: () => void; onConfirm: () => void }> = ({
  onCancel,
  onConfirm,
}) => (
  <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white shadow-lg p-6 rounded-[5px] w-[450px]">
      <h2 className="font-semibold text-[18px]">Are you sure you want to log out?</h2>
      <div className="flex justify-end gap-4 mt-4">
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-200 px-4 py-2 rounded-[5px] text-slate-950 hover:text-slate-800"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-[5px] text-white hover:text-slate-100"
        >
          Log Out
        </button>
      </div>
    </div>
  </div>
);

const SidebarOverlay: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="fixed inset-0 md:hidden bg-black bg-opacity-50" onClick={onClick} aria-label="Close sidebar overlay" />
);

const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const openLogoutDialog = () => setShowLogoutDialog(true);
  const closeLogoutDialog = () => setShowLogoutDialog(false);

  const confirmLogout = () => {
    logout();
    navigate("/");
    closeLogoutDialog();
  };

  return (
    <>
      <div className="md:hidden bg-main p-4 h-full">
        <MdMenu 
          className="text-3xl text-white cursor-pointer" 
          onClick={toggleSidebar} 
          aria-label="Open sidebar" 
        />
      </div>

      <div
        className={`flex h-screen top-0 inset-y-0 left-0 z-40 bg-white shadow-lg transform transition-transform duration-300 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:w-1/5`}
      >
        <div className="flex flex-col items-center gap-6 px-4 py-8 md:h-auto min-h-screen md:min-h-0 max-h-[100vh] overflow-auto scrollbar-hide">
          <Logo />

          {/* Primary Links */}
          <div className="flex flex-col items-center gap-3">
            <SidebarLink to="/admin-dashboard/dashboard" icon={MdSpaceDashboard} label="Dashboard" />
            <SidebarLink to="/admin-dashboard/user-data" icon={FaUser} label="Users" />
            <SidebarLink to="/admin-dashboard/groups" icon={FaUserGroup} label="Groups" />
          </div>

          <Divider />

          {/* Management Links */}
          <div className="flex flex-col items-center gap-3">
            <SidebarLink to="/admin-dashboard/admins" icon={RiAdminFill} label="Admins" />
            <SidebarLink to="/admin-dashboard/profile" icon={CgProfile} label="Profile" />
            <SidebarLink to="/admin-dashboard/quote-management" icon={BsChatQuoteFill} label="Quotes Management" />
            <SidebarLink to="/admin-dashboard/validate-users" icon={GrValidate} label="Validate Users" />
            <SidebarLink to="/admin-dashboard/user-reports" icon={TbReportAnalytics} label="User Reports" />
          </div>

          <Divider />

          {/* Settings and Logout */}
          <div className="flex flex-col items-center gap-3">
            <NavLink to="/admin-dashboard/setting">
            <Button variant="adminSidebar" size="adminSidebar">
              <IoIosSettings className="text-xl" aria-hidden="true" />
             Setting
            </Button>
            </NavLink>
            <Button onClick={openLogoutDialog} variant="adminSidebar" size="adminSidebar">
              <MdOutlineLogout className="text-xl" aria-hidden="true" />
              Log Out
            </Button>
          </div>

          {showLogoutDialog && (
            <LogoutDialog onCancel={closeLogoutDialog} onConfirm={confirmLogout} />
          )}
        </div>
      </div>

      {isSidebarOpen && <SidebarOverlay onClick={toggleSidebar} />}
    </>
  );
};

export default AdminSidebar;
