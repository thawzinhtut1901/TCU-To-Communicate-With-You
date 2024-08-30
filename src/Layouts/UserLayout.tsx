import { Outlet } from "react-router-dom"

const UserLayout = () => {
  return (
    <div className="overflow-hidden">
        <Outlet/>
    </div>
  )
}

export default UserLayout