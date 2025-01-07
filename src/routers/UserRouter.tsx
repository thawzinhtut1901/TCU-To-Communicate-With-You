import { Navigate, RouteObject } from "react-router-dom";
import UserLayout from "@/Layouts/UserLayout";
import { ChatLayouts, HomeLayout } from "@/Layouts/UserLayouts";
import { ProfileView } from "@/components/users";
import { FindFriendsPage, QuotePage, ProfilePage, RelationPage, SettingsPage } from "@/pages/UserPages";
import { Dashboard, Notification, PrivacySecurity } from "@/components/users/Settings";
import { FriendList, JoinedGp, ProfileInfo, RelationshipInfo } from "@/components/users/ProfileInfo";
import { Chatting } from "@/components/users/Chats";
import { CreateQuote, LeaderBoard } from "@/components/users/Quotes";
import { RequestRelation } from "@/components/users/Relationship";
// import { useEffect } from "react";
// import { ChatSideBar, Chatting } from "@/components/users/Chats";
// import { Chatting } from "@/components/users/Chats";
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

// const {socket} = useApp();

// const SocketRoute = () => {
//   const userId = localStorage.getItem("userChatId")
//   const { chatData } = useApp(); 
//   const navigate = useNavigate();

//   useEffect(() => {
//     if(!chatData) {
      
//     }
//   })
// }

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
        element: <ProfilePage/>,
        children: [
          {
            index: true,
            element: <Navigate to={"more-info"}/>
          },
          {
            path: "more-info",
            element: <ProfileInfo/>
          },
          {
            path: "friend-list",
            element: <FriendList/>
          },
          {
            path: "join-group",
            element: <JoinedGp/>
          },
          {
            path: "relationship-list",
            element: <RelationshipInfo/>
          }
        ]
      },
      {
        path: "quotes",
        element: <QuotePage/>,
        children: [
          {
            index: true,
            element: <Navigate to={"leaderboard"}/>
          },
          {
            path: "leaderboard",
            element: <LeaderBoard/>
          },
          {
            path: "create-quote",
            element: <CreateQuote/>
          }
        ]
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
        element: <RelationPage/>,
        children: [
          // {
          //   index: true,
          //   element: <Navigate to={"relation"}/>
          // },
          {
            path: "user",
            element: <RequestRelation/>
          }
        ]
      }
    ],
  },
  {
    path: "/chats",
    element: <ChatLayouts/>,
    children: [
      {
        path: ":chatId",
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
