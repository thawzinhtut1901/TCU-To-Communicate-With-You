import { Route, Routes, useRoutes } from "react-router-dom"
import { AdminRouter, UserRouter } from "./routers"


const App = () => {
  const UserRouting = useRoutes(UserRouter);
  const AdminRouting = useRoutes(AdminRouter);

  return (
    <div>
      <Routes>
        <Route path="/*" element={UserRouting}/>
      </Routes>
      <Routes>
        <Route path="/*" element={AdminRouting}/>
      </Routes>
    </div>
  )
}

export default App