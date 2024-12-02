import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/authContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthCheck from "./routers/AuthCheck.tsx";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <BrowserRouter>
        <AuthCheck>     
          <GoogleOAuthProvider clientId={clientId}>
            <App />
          </GoogleOAuthProvider>
          </AuthCheck>
        </BrowserRouter>
      
      
    </AuthProvider>
  </QueryClientProvider>
);
