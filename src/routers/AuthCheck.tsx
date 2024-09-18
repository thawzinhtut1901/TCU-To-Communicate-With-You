import { getToken } from "@/services/authService"
import { ReactNode, useEffect } from "react"
import { Navigate } from "react-router-dom";

const AuthCheck = ({ children }: { children: ReactNode }) => {
    const token = getToken();

    useEffect(() => {
      if (!token) {
          window.location.reload(); 
      }
  }, [token]);

    if (!token) {
        return <Navigate to="/auth/login"/>;
      } 
      return <>{children}</>;
}

export default AuthCheck