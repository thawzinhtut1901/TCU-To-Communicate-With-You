import { TCULogCom } from "../../assets";

const LoginDesign = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex-col items-center justify-center hidden text-center lg:flex">
        <h1 className=" font-primary text-[50px]">
          Welcome To <span className="text-[#D24DF3]">TCU</span>
        </h1>
        <p className=" font-primary text-slate-600">"Make friends with us"</p>
        <img src={TCULogCom} alt="TCU Logo Composition" className="w-[450px] h-[450px]" />
      </div>
    </div>
  );
};

export default LoginDesign;
