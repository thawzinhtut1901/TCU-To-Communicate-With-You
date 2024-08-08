import { TCULogCom, textHeader } from "../../assets"


const LoginDesign = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[30px]">
        <h1 className="font-extrabold text-[50px]">Welcome To <span className="text-[#D24DF3]">TCU</span></h1>
        <img src={textHeader} alt="" className="mt-[15px] w-[170px]"/>
        <img src={TCULogCom} alt="" className="w-[550px] h-[550px]"/>
    </div>
    

  )
}

export default LoginDesign