import { NavLink } from "react-router-dom";
import { divider, googleLog } from "../../assets";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const LogInForm = () => {
   
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="flex justify-center text-2xl font-medium text-white font-poppins">Log in</h2>

        <div className="flex-col mx-auto mt-[30px] md:mt-[20px] w-[350px] lg:w-[550px] font-poppins md:font-thin text-[10px] text-white md:text-[14px]">
        <Label htmlFor="email">
            Email Address or Username
        </Label>
        <Input className="rounded-[8px]" />
      </div>

        <div className="flex-col mx-auto mt-[20px] w-[350px] lg:w-[550px] font-poppins md:font-thin text-[10px] text-white md:text-[14px]">
        <Label htmlFor="password" className="font-poppins font-thin text-[14px]">
            Password
        </Label>

        <Input className="rounded-[8px]" />

        <div className="hidden md:block">
            <div className="flex justify-end mt-[5px]">
                <h1 className="border-b w-fit text-[12px] cursor-pointer">Forget Password</h1>
            </div>

            <div className="flex space-x-1 md:space-x-2 md:text-[12px]">
                <Checkbox id="remember" className="rounded-[5px]"/>
                <Label
                    htmlFor="remember"
                    className="cursor-pointer"
                >
                    Remember Me
                </Label>
            </div>
        </div>
        </div>
     
        <Button className="flex flex-col justify-center order-1 md:order-none bg-[#8566FF] md:bg-slate-50 md:hover:bg-slate-300 hover:bg-purple-500 mx-auto mt-[20px] md:border rounded-full w-[250px] md:w-[550px] font-poppins font-thin text-[14px] text-white md:text-black">
            Log In
        </Button>

        <div className="flex justify-between md:hidden mx-auto mt-[30px] w-[350px] font-poppins text-white">
            <div className="flex space-x-1 text-[12px]">
                <Checkbox id="remember" className="rounded-[5px]"/>
                <Label
                    htmlFor="remember"
                    className="cursor-pointer"
                >
                    Remember Me
                </Label>
            </div>

            <h1 className="border-b w-fit text-[14px] cursor-pointer">Forget Password</h1>
        </div>

        <div className="flex mx-auto mt-[12px] md:mt-[50px] w-[450px] md:w-[550px]">
            <img src={divider} alt="" />
        </div>

        <Button  className="flex justify-center bg-slate-50 hover:bg-slate-300 mx-auto mt-[12px] md:mt-[20px] border rounded-full w-[250px] md:w-[550px] font-poppins font-thin md:text-[14px]">
            <img src={googleLog} alt="" className="mx-2 w-[15px] h-[15px]"/>
            Continue with Google 
        </Button>

        <div className="flex items-center mx-auto mt-[20px] md:mt-[50px] w-[450px] md:w-[550px]">
            <hr className="flex-grow border-t-2" />
        </div>

        <h2 className="flex justify-center mt-[10px] md:mt-[20px] pb-[10px] md:pb-0 font-poppins font-thin text-[14px] text-white md:text-[18px]">Don't have an account? <span className="flex hover:border-[#D24DF3] md:hidden ml-1 border-transparent border-b-0 hover:border-b-2 w-fit text-[#D24DF3]">Sign In </span></h2>

        <NavLink to="/sign-up">
            <Button className="md:flex justify-center hidden hover:bg-slate-100 mx-auto mt-[20px] border rounded-full w-[550px] font-poppins font-thin text-[14px] text-slate-50 hover:text-black">
                Sign Up
            </Button>
        </NavLink>
    </div>
  );
};

export default LogInForm;
