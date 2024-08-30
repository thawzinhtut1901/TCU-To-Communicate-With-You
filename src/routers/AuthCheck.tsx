import { getToken } from "@/services/authService"
import { ReactNode } from "react"
import { Navigate } from "react-router-dom";

const AuthCheck = ({ children }: { children: ReactNode }) => {
    const token = getToken();

    if (token) {
        return <Navigate to="/home"/>;
      }
    
      return children;

}

export default AuthCheck