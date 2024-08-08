import { RouteObject } from "react-router-dom"
import { LogIn, SignUpLayout } from "../Layouts/AuthLayouts"

const UserRouter: RouteObject[] = [
    {
        path: "/",
        element: <LogIn/>,
    },
    {
        path: "/sign-up",
        element: <SignUpLayout/>
    }
    
]

export default UserRouter