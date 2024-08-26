import { useRoutes } from "react-router-dom"
import { AdminRouter, UserRouter } from "./routers"
import AuthRouter from "./routers/AuthRouter";


const App = () => {
  const routes = [...UserRouter,...AuthRouter,...AdminRouter];
  const routing = useRoutes(routes);


  return (

    
    <div>
      {routing}
    </div>
  )
}

export default App