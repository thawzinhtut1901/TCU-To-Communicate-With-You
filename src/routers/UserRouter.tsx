import { Navigate, RouteObject } from "react-router-dom";
import UserLayout from "@/Layouts/UserLayout";
import { ChatLayouts, HomeLayout, UserProfileLayout } from "@/Layouts/UserLayouts";
import { ProfileView } from "@/components/users";
import { FindFriendsPage, GroupPage, ProfilePage, RelationPage, SettingsPage } from "@/pages/UserPages";

const UserRouter: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"home"} />,
      },
      {
        path: "home",
        element: <HomeLayout/>
      },
      {
        path: "find-friends",
        element: <FindFriendsPage/>
      },
      {
        path: "profile",
        element: <ProfilePage/>
      },
      {
        path: "groups",
        element: <GroupPage/>
      },
      {
        path: "settings",
        element: <SettingsPage/>
      },
      {
        path: "relation",
        element: <RelationPage/>
      }
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
