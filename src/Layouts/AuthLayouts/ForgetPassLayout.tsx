import { Outlet, useNavigate } from "react-router-dom";
import { forgetPswLogo } from "../../assets";
import { FaArrowLeft } from "react-icons/fa";

const ForgetPassLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-custom-gradient w-full h-screen">
        <FaArrowLeft onClick={() => navigate("/")} className="ml-[28px] pt-[28px] w-[60px] h-[60px] text-white"/>
        <h1 className="ml-[120px] pt-[15px] font-bold font-poppins text-[30px] text-white">Forget <span className="text-black">Password</span></h1>

       <div className="flex justify-between">
        <Outlet/>

        <div className="mt-[20px]">
            <img src={forgetPswLogo} alt="" className="w-[450px]"/>
        </div>
       </div>
    </div>
  )
}

export default ForgetPassLayout