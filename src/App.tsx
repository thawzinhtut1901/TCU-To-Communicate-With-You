import { Route, Routes, useRoutes } from "react-router-dom"
import { AdminRouter, UserRouter } from "./routers"
import AuthRouter from "./routers/AuthRouter";
import AuthCheck from "./routers/AuthCheck";


const App = () => {
  const UserRouting = useRoutes(UserRouter);
  const AuthRouting = useRoutes(AuthRouter);
  const AdminRouting = useRoutes(AdminRouter);

  return (
    <div>
      <Routes>
        <Route path="/*" element={UserRouting}/>
        <Route path="/auth/*" element={<AuthCheck>{AuthRouting}</AuthCheck>}/>
        <Route path="/admin-dashboard/*" element={AdminRouting}/>
      </Routes>
    </div>
  )
}

export default App