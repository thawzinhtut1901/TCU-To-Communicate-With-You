import { logoMobile, TCULogCom, textHeader } from "../../assets";

const LoginDesign = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="font-extrabold text-[50px]">
          Welcome To <span className="text-[#D24DF3]">TCU</span>
        </h1>
        <img src={textHeader} alt="Text Header" className="mt-[15px] w-[170px]" />
        <img src={TCULogCom} alt="TCU Logo Composition" className="w-[550px] h-[550px]" />
      </div>

      <div className="md:hidden ml-5 text-center">
        <h1 className="pt-[23px] pl-[25px] font-extrabold font-poppins text-[24px] text-white">
          TCU
        </h1>
        <div className="flex justify-center items-center">
          <img src={logoMobile} alt="Mobile Logo" className="ml-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default LoginDesign;
