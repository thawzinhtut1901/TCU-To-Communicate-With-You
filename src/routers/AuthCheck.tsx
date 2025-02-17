import { getToken } from "@/services/authService";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthCheck = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const token = getToken();

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true); 
      const token = getToken(); 

      if (!token && !location.pathname.startsWith("/auth")) {
        navigate("/auth/login", { replace: true });
      } else if (token && location.pathname.startsWith("/auth/login")) {
        navigate("/user/home", { replace: true });
      }

      setLoading(false);
    };

    checkAuth();
  }, [token, navigate, location.pathname]);


  if (loading) {
    return <div>Loading...</div>; 
  }

  return <>{children}</>;
};

export default AuthCheck;


