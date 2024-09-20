import { getToken } from "@/services/authService"
import { ReactNode, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";

const AuthCheck = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const token = getToken();

    useEffect(() => {
      if (!token) {
          window.location.reload(); 
      }
  }, [token]);


  useEffect(() => {
    if(token) {
      navigate("/home");
    }
  }, [token])

    if (!token) {
        return <Navigate to="/auth/login"/>;
      } 
      return <>{children}</>;
}

export default AuthCheck