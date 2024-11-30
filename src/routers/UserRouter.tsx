import { Navigate, RouteObject } from "react-router-dom";
import UserLayout from "@/Layouts/UserLayout";
import { ChatLayouts, HomeLayout, UserProfileLayout } from "@/Layouts/UserLayouts";
import { ProfileView } from "@/components/users";
import { FindFriendsPage, GroupPage, ProfilePage, RelationPage, SettingsPage } from "@/pages/UserPages";
import { Dashboard, Notification, PrivacySecurity } from "@/components/users/Settings";
import { Chatting } from "@/components/users/Chats";
// import { useEffect, useState } from "react";

// const ResponsiveNavigate = ({ to } : {to:any}) => {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1024);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [to, setIsDesktop]);

//   return isDesktop ? <Navigate to={to} /> : null;
// };

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
        element: <SettingsPage/>,
        children: [
          {
            index: true,
            element: <Navigate to={"dashboard"}/> ,
          },
          {
            path: "dashboard",
            element: <Dashboard/>
          },
          {
            path: "privacy",
            element: <PrivacySecurity/>
          },
          {
            path: "notification",
            element: <Notification/>
          }
        ]
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
    element: <ChatLayouts/>,
    children: [
      {
        path: "chatting",
        element: <Chatting/>
      }
    ]
  },
  {
    path: "/view-my-profile",
    element: <ProfileView/>
  }
];

export default UserRouter;
