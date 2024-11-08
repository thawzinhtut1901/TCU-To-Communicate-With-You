import { SettingsMenu } from "@/components/users"
import { Outlet } from "react-router-dom"

const SettingsPage = () => {
  
  return (
    <div className="flex justify-center">
      <div className="flex gap-x-[91px] bg-white bg-opacity-40 mb-6 rounded-[10px] w-11/12 md:w-9/12 h-[750px] md:h-[750px]">
        <SettingsMenu/>
        <Outlet/>
      </div>
    </div>
  )
}

export default SettingsPage