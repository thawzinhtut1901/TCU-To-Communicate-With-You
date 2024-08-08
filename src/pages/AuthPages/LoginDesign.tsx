import { logoMobile, TCULogCom, textHeader } from "../../assets"


const LoginDesign = () => {
  return (
    <div>
      <div className="md:flex md:flex-col md:justify-center md:items-center hidden md:mt-[30px]">
        <h1 className="font-extrabold text-[50px]">Welcome To <span className="text-[#D24DF3]">TCU</span></h1>
        <img src={textHeader} alt="" className="mt-[15px] w-[170px]"/>
        <img src={TCULogCom} alt="" className="w-[550px] h-[550px]"/>
      </div>

      <div className="md:hidden ml-5">
        <h1 className="pt-[23px] pl-[25px] font-extrabold font-poppins text-[24px] text-white">TCU</h1>
        <div className="flex justify-center items-center">
          <img src={logoMobile} alt="" className="ml-[50px]"/>
        </div>
      </div>
    </div>
    
    

  )
}

export default LoginDesign