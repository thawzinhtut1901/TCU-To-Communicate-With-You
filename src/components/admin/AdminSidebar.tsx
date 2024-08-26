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
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons/lib";

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
  return (
    <div className="flex flex-col items-center w-1/5 gap-6 py-8">
      <Logo />
      <div className="flex flex-col items-center justify-center gap-3">
        <SidebarLink to="/admin-dashboard/dashboard" icon={MdSpaceDashboard} label="Dashboard" />
        <SidebarLink to="/admin-dashboard/users" icon={FaUser} label="Users" />
        <SidebarLink to="/admin-dashboard/groups" icon={FaUserGroup} label="Groups" />
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-center gap-3">
        <SidebarLink to="/admin-dashboard/admins" icon={RiAdminFill} label="Admins" />
        <SidebarLink to="/admin-dashboard/profile" icon={CgProfile} label="Profile" />
        <SidebarLink to="/admin-dashboard/quote-management" icon={BsChatQuoteFill} label="Quotes Management" />
        <SidebarLink to="/admin-dashboard/validate-users" icon={GrValidate} label="Validate Users" />
        <SidebarLink to="/admin-dashboard/user-reports" icon={TbReportAnalytics} label="User Reports" />
      </div>
      <Divider />
      <div className="flex flex-col items-center justify-center gap-3">
        <SidebarLink to="/admin-dashboard/setting" icon={IoIosSettings} label="Setting" />
        <Button variant="adminSidebar" size="adminSidebar">
          <MdOutlineLogout />
          Log out
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
