import AdminNavbar from "@/components/admin/AdminNavbar"
import AdminSidebar from "@/components/admin/AdminSidebar"
import { Outlet } from "react-router-dom"

const AdminDashboardLayout = () => {
  return (
    <div className="flex w-screen h-screen overflow-y-hidden">
        <AdminSidebar/>
        <div className="flex flex-col w-4/5 h-screen bg-gray-50">
            <AdminNavbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminDashboardLayout