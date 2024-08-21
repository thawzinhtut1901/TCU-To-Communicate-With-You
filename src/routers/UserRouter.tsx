import { Navigate, RouteObject } from "react-router-dom";
import {
  ForgetPassLayout,
  LogInLayout,
  ProfileSetupLayout,
  SignUpLayout,
  TermsPolicyLayout,
} from "../Layouts/AuthLayouts";
import { ForgetPaswMail, Policies, ResetPassword, Terms } from "../pages/AuthPages";
import { HomeLayout } from "@/Layouts/UserLayouts";

const UserRouter: RouteObject[] = [
  {
    path: "/",
    element: <LogInLayout />,
  },
  {
    path: "/sign-up",
    element: <SignUpLayout />,
  },
  {
    path: "/profile-setup",
    element: <ProfileSetupLayout />,
  },
  {
    path: "/howtcuwork",
    element: <TermsPolicyLayout/>,
    children: [
      {
        index: true,
        element: <Navigate to={"terms"}/>,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "policies",
        element: <Policies />,
      },
    ]
  },
  {
    path: "/forget-password",
    element: <ForgetPassLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"mail"} />,
      },
      {
        path: "mail",
        element: <ForgetPaswMail />,
      },
      {
        path: "change-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout/>
  }
];

export default UserRouter;
