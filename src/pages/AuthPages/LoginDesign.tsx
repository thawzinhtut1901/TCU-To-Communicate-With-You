import { TCULogCom, textHeader } from "../../assets";

const LoginDesign = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="md:block hidden text-center">
        <h1 className="font-extrabold text-[50px]">
          Welcome To <span className="text-[#D24DF3]">TCU</span>
        </h1>
        <img src={textHeader} alt="Text Header" className="mt-[15px] w-[170px]" />
        <img src={TCULogCom} alt="TCU Logo Composition" className="w-[550px] h-[550px]" />
      </div>
    </div>
  );
};

export default LoginDesign;
