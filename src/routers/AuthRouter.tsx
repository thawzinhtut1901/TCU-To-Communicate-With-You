import { ForgetPassLayout, LogInLayout, ProfileSetupLayout, SignUpLayout, TermsPolicyLayout } from "@/Layouts/AuthLayouts";
import AuthLayout from "@/Layouts/AuthLayouts/AuthLayout";
import { ForgetPaswMail, FriendSuggestion, Policies, ResetPassword, Terms } from "@/pages/AuthPages";
import { Navigate, RouteObject } from "react-router-dom";

const AuthRouter: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LogInLayout />,
      },
      {
        path: "login",
        element: <LogInLayout />,
      },
      {
        path: "sign-up",
        element: <SignUpLayout />,
      },
      {
        path: "forget-password",
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
        path: "profile-setup",
        element: <ProfileSetupLayout />,
      },
      {
        path: "people-you-may-know",
        element: <FriendSuggestion/>
      },
      {
        path: "howtcuwork",
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
    ],
  },
];

export default AuthRouter;
