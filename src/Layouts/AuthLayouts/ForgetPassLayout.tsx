import { Outlet, useNavigate } from "react-router-dom";
import { forgetPswLogo, logoMobile } from "../../assets";
import { FaArrowLeft } from "react-icons/fa";

const ForgetPassLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-custom-gradient w-full h-screen">
        <FaArrowLeft onClick={() => navigate("/")} className="md:flex hidden ml-[28px] pt-[28px] w-[60px] h-[60px] text-white"/>
        <h1 className="md:flex hidden ml-[120px] pt-[15px] font-bold font-poppins text-[30px] text-white">Forget <span className="text-black">Password</span></h1>
        <h1 className="md:hidden ml-[29px] pt-[23px] font-bold font-poppins text-[24px] text-white">TCU</h1>

       <div className="flex md:flex-row flex-col justify-center md:justify-between items-center">
        
        <img src={logoMobile} alt="" className="md:hidden mt-[16px] ml-[101px] w-[259px] h-[220px]"/>
        <Outlet/>

        <div className="md:flex hidden mt-[20px]">
            <img src={forgetPswLogo} alt="" className="w-[450px]"/>
        </div>
       </div>
    </div>
  )
}

export default ForgetPassLayout