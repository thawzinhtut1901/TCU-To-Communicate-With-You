import { reverseLogoCom, textHeader } from "../../assets"

const SignupDesign = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-extrabold text-[50px]">Welcome To <span className="text-[#D24DF3]">TCU</span></h1>
        <img src={textHeader} alt="" className="mt-[15px] w-[170px]"/>
        <img src={reverseLogoCom} alt="" className="w-[550px] h-[550px]"/>
    </div>
  )
}

export default SignupDesign