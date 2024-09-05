import Admins from "@/components/admin/Admins";
import Dashboard from "@/components/admin/Dashboard";
import Groups from "@/components/admin/Groups";
import Profile from "@/components/admin/Profile";
import QuoteManagement from "@/components/admin/QuoteManagement";
import Setting from "@/components/admin/Setting";
import UserReports from "@/components/admin/UserReports";
import Users from "@/components/admin/Users";
import ValidateUsers from "@/components/admin/ValidateUsers";
import AdminDashboardLayout from "@/Layouts/AdminLayouts/AdminDashboardLayout";
import { Navigate, RouteObject } from "react-router-dom";

const AdminRouter: RouteObject[] = [
  {
    path: "/admin-dashboard",
    element: <AdminDashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"dashboard"} />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "user-data",
        element: <Users />,
      },
      {
        path: "groups",
        element: <Groups />,
      },
      {
        path: "admins",
        element: <Admins />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "quote-management",
        element: <QuoteManagement />,
      },
      {
        path: "validate-users",
        element: <ValidateUsers />,
      },
      {
        path: "user-reports",
        element: <UserReports />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
];

export default AdminRouter;