import { RouteObject } from "react-router-dom"
import { LogIn } from "../Layouts/AuthLayouts"

const UserRouter: RouteObject[] = [
    {
        path: "/",
        element: <LogIn/>
    }
]

export default UserRouter