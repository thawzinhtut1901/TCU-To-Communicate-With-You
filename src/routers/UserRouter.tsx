import { Navigate, RouteObject } from "react-router-dom";
import UserLayout from "@/Layouts/UserLayout";
import { HomeLayout } from "@/Layouts/UserLayouts";

const UserRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/home",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
    ],
  },
];

export default UserRouter;
