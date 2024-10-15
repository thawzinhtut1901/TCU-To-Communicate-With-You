import { Outlet } from "react-router-dom"
import SettingMenu from "./dashboardComponents/SettingMenu"

const Setting = () => {
  return (
    <div className="flex justify-between px-20 py-10">
      <SettingMenu/>
      <Outlet/>
    </div>
  )
}

export default Setting