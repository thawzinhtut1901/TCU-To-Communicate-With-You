import { TCULogCom } from "../../assets";

const LoginDesign = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white h-screen">
      <div className="lg:flex flex-col justify-center items-center hidden text-center">
        <h1 className="font-primary text-[50px]">
          Welcome To <span className="text-[#D24DF3]">TCU</span>
        </h1>
        <p className="font-primary text-slate-600">"Make friends with us"</p>
        <img src={TCULogCom} alt="TCU Logo Composition" className="w-[450px] h-[450px]" />
      </div>
    </div>
  );
};

export default LoginDesign;
