import { Route, Routes, useRoutes } from "react-router-dom"
import { AdminRouter, UserRouter } from "./routers"
import AuthRouter from "./routers/AuthRouter";
import { AppProvider } from "./AppProvider";

const App = () => {
  const UserRouting = useRoutes(UserRouter);
  const AuthRouting = useRoutes(AuthRouter);
  const AdminRouting = useRoutes(AdminRouter);

  return (
    <div>
      <AppProvider>
        <Routes>
          <Route path="/*" element={UserRouting}/>
          <Route path="/auth/*" element={AuthRouting}/>
          <Route path="/admin-dashboard/*" element={AdminRouting}/>
        </Routes>
      </AppProvider>

    </div>
  )
}

export default App