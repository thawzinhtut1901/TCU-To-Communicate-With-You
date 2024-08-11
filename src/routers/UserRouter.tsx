import { Navigate, RouteObject } from "react-router-dom"
import { ForgetPassLayout, LogIn, SignUpLayout } from "../Layouts/AuthLayouts"
import { ForgetPaswMail, ResetPassword } from "../pages/AuthPages"

const UserRouter: RouteObject[] = [
    {
        path: "/",
        element: <LogIn/>,
    },
    {
        path: "/sign-up",
        element: <SignUpLayout/>
    },
    {
        path: "/forget-password",
        element: <ForgetPassLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={"mail"}/>
            },
            {
                path: "mail",
                element: <ForgetPaswMail/>
            },
            {
                path: "change-password",
                element: <ResetPassword/>
            }

            // mail/:email
        ]
    }
    
]

export default UserRouter