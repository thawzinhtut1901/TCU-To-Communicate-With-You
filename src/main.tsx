import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/authContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthCheck from "./routers/AuthCheck.tsx";
import { AppProvider } from "./AppProvider.tsx";

const clientId = "316123631212-nppk3tjkk3gtpu4627oiqp5kq85squju.apps.googleusercontent.com";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <AppProvider>
            <AuthCheck>
              <App />
            </AuthCheck>
          </AppProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
);
