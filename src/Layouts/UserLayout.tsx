import { Logo } from "@/assets"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import "./types.css"
import { FaArrowLeft } from "react-icons/fa";

const UserLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/user/home";
  const isFindFriPage = location.pathname === "/user/find-friends" || location.pathname === "/user/quotes/leaderboard"

  return (
    <div className="flex flex-col bg-custom-bg bg-custom-gradient w-full h-screen">
      <div className={`${isFindFriPage ? "overflow-hidden" : " overflow-x-hidden overflow-y-auto vertical-scrollbar"} flex-grow`}>
       <div className={`${isHomePage ? "" : "flex justify-end md:justify-start"}  `}>
        <img onClick={() => navigate("/user/home")} src={Logo} alt="" className="w-[100px] md:w-[160px] h-[50px] md:h-[80px]" />
       </div>
        {
          !isHomePage && (
              <FaArrowLeft onClick={() => navigate("/user/home")} className="md:hidden flex mb-6 ml-4 w-[14px] text-white"/>
          )
        }
        <Outlet />
      </div>
    </div>
  
  )
}

export default UserLayout