import { logoMobile, TCULogCom, textHeader } from "../../assets"


const LoginDesign = () => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center h-screen">
<div>
        <h1 className="font-extrabold text-[50px]">Welcome To <span className="text-[#D24DF3]">TCU</span></h1>
        <img src={textHeader} alt="" className="mt-[15px] w-[170px]"/>
        <img src={TCULogCom} alt="" className="w-[550px] h-[550px]"/>
      </div>

      <div className="ml-5 md:hidden">
        <h1 className="pt-[23px] pl-[25px] font-extrabold font-poppins text-[24px] text-white">TCU</h1>
        <div className="flex items-center justify-center">
          <img src={logoMobile} alt="" className="ml-[50px]"/>
        </div>
      </div>
    </div>
    
    

  )
}

export default LoginDesign