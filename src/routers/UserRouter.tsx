import { Navigate, RouteObject } from "react-router-dom";
import { HomePages } from "@/pages/UserPages";
import UserLayout from "@/Layouts/UserLayout";

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
        element: <HomePages />,
      },
    ],
  },
];

export default UserRouter;
