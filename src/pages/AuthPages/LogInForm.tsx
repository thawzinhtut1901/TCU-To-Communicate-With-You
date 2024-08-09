import { NavLink } from "react-router-dom";
import { divider, googleLog } from "../../assets";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const LogInForm = () => {
  return (
    <div className="h-screen ">
      <h2 className="flex justify-center py-[50px] text-2xl font-medium text-white font-poppins">
        Log in
      </h2>

      <div className="flex-col mx-auto mt-[20px] w-[550px] font-poppins font-thin text-[14px] text-white">
        <Label htmlFor="email">Email Address or Username</Label>

        <Input className="rounded-[8px]" />
      </div>

      <div className="flex-col mx-auto mt-[20px] w-[550px] font-poppins font-thin text-[14px] text-white">
        <Label
          htmlFor="password"
          className="font-poppins font-thin text-[14px]"
        >
          Password
        </Label>

        <Input className="rounded-[8px]" />

        <div className="flex justify-end mt-[5px]">
          <h1 className="border-b w-fit text-[12px] cursor-pointer">
            Forget Password
          </h1>
        </div>

        <div className="flex space-x-2 text-[12px]">
          <Checkbox id="remember" className="rounded-[5px]" />
          <Label htmlFor="remember" className="cursor-pointer">
            Remember Me
          </Label>
        </div>
      </div>

      <Button className="flex flex-col justify-center bg-slate-50 hover:bg-slate-300 mx-auto mt-[20px] border rounded-full w-[550px] font-poppins font-thin text-[14px]">
        Log In
      </Button>

      <div className="flex mx-auto mt-[50px] w-[550px]">
        <img src={divider} alt="" />
      </div>

      <Button className="flex justify-center bg-slate-50 hover:bg-slate-300 mx-auto mt-[20px] border rounded-full w-[550px] font-poppins font-thin text-[14px]">
        <img src={googleLog} alt="" className="mx-2 w-[15px] h-[15px]" />
        Continue with Google
      </Button>

      <div className="flex items-center mx-auto mt-[50px] w-[550px]">
        <hr className="flex-grow border-t-2" />
      </div>

      <h2 className="flex justify-center mt-[20px] font-poppins font-thin text-[18px] text-white">
        Don't have an account
      </h2>

      <NavLink to="/sign-up">
        <Button className="flex justify-center hover:bg-slate-100 mx-auto mt-[20px] border rounded-full w-[550px] font-poppins font-thin text-[14px] text-slate-50 hover:text-black">
          Sign Up
        </Button>
      </NavLink>
    </div>
  );
};

export default LogInForm;
