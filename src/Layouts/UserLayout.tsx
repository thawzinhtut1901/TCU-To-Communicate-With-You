import { Logo } from "@/assets"
import { Outlet, useNavigate } from "react-router-dom"
import "./types.css"

const UserLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-radial-custom-gradient w-full h-screen">
      <div className="flex-grow overflow-x-hidden overflow-y-auto vertical-scrollbar">
        <img onClick={() => navigate("/user/home")} src={Logo} alt="" className="w-[100px] md:w-[160px] h-[50px] md:h-[80px]" />
        <Outlet />
      </div>
    </div>
  
  )
}

export default UserLayout