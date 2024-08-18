import { Navigate, RouteObject } from "react-router-dom";
import {
  ForgetPassLayout,
  LogInLayout,
  ProfileSetupLayout,
  SignUpLayout,
} from "../Layouts/AuthLayouts";
import { ForgetPaswMail, ResetPassword } from "../pages/AuthPages";
import TermOfUse from "@/Layouts/AuthLayouts/TermOfUse";
import PrivancyPolicy from "@/Layouts/AuthLayouts/PrivancyPolicy";

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
    path: "/term-of-use",
    element: <TermOfUse />,
  },
  {
    path: "/privacy-policy",
    element: <PrivancyPolicy />,
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
];

export default UserRouter;
