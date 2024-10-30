import AdminNavbar from "@/components/admin/AdminNavbar"
import AdminSidebar from "@/components/admin/AdminSidebar"
import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  return (
<div className="flex w-screen h-screen overflow-hidden">
    <AdminSidebar />
    <div className="flex flex-col w-full min-h-screen overflow-y-hidden bg-gray-100 md:w-4/5">
        <AdminNavbar />
        <Outlet />
    </div>
</div>

  )
}

export default AdminDashboardLayout