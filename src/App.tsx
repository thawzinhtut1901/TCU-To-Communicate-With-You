import { Route, Routes, useRoutes } from "react-router-dom"
import { AdminRouter, UserRouter } from "./routers"
import AuthRouter from "./routers/AuthRouter";


const App = () => {
  const UserRouting = useRoutes(UserRouter);
  const AdminRouting = useRoutes(AdminRouter);
  const AuthRouting = useRoutes(AuthRouter);

  return (
    <div>
      <Routes>
        <Route path="/*" element={UserRouting}/>
        <Route path="/auth/*" element={AuthRouting} />
      </Routes>
      <Routes>
        <Route path="/*" element={AdminRouting}/>
      </Routes>
    </div>
  )
}

export default App