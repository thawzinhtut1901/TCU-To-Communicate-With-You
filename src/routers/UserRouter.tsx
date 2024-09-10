import { Navigate, RouteObject } from "react-router-dom";
import UserLayout from "@/Layouts/UserLayout";
import { ChatLayouts, HomeLayout, UserProfileLayout } from "@/Layouts/UserLayouts";
import { ProfileView } from "@/components/users";

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
  {
    path: "/profile",
    element: <UserProfileLayout/>
  },
  {
    path: "/chats",
    element: <ChatLayouts/>
  },
  {
    path: "/view-my-profile",
    element: <ProfileView/>
  }
];

export default UserRouter;
