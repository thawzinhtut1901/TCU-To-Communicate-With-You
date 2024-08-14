import { NavLink, useNavigate } from "react-router-dom";
import { divider, googleLog } from "../../assets";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import logoMobile from "../../assets/LogoMobile.png";
import { useEffect, useState } from "react";
import { useSignIn } from "@/hooks";
import { AuthData } from "@/types/type";
import { login } from "@/services/authService";

interface Errors {
  email?: string;
  password?: string;
}

const LogInForm = () => {
  const navigate = useNavigate();
  const LoginAccount = useSignIn();
  const [errors, setErrors] = useState<Errors>({});
  const [loginData, setLoginData] = useState<AuthData>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if(LoginAccount.isSuccess){
      const authToken =LoginAccount.data.accessToken;
      delete LoginAccount.data.accessToken;
      login(authToken);
      navigate("")
    };
  }, [LoginAccount.isSuccess]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const validationErrors: Errors = {};

    if (!loginData.email) {
      validationErrors.email = "* Email is required !";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      validationErrors.email = "Invalid Email !";
    }

    if (!loginData.password) {
      validationErrors.password = "* Password is required !";
    } else if (loginData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters !";
    }
    
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      LoginAccount.mutate(loginData);
      console.log(LoginAccount);
    }
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setLoginData((prev) => ({ ...prev, email }));
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setLoginData((prev) => ({...prev, password}));
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  };

  return (
    <div className="flex flex-col items-center py-5 md:py-16 h-screen">
            <div className="flex flex-col justify-center gap-2 md:hidden md:py-0 text-center">
        <h1 className="px-10 font-extrabold font-poppins text-[24px] text-start text-white">
          TCU
        </h1>
          <img src={logoMobile} alt="Mobile Logo" className="w-[300px] h-fit ms-20"/>
      </div>
      <h2 className="flex justify-center font-medium font-poppins text-lg text-white md:text-2xl">
        Log in
      </h2>

      <div className="flex-col mx-auto mt-[30px] md:mt-[20px] font-poppins md:font-thin text-[10px] text-white md:text-[14px]">
        <Label htmlFor="email">Email Address or Username</Label>
        <Input
          type="email"
          id="email"
          value={loginData.email}
          onChange={emailHandler}
          className="rounded-[8px]"
        />
        {
          errors.email && (
            <span className="my-2 font-bold text-red-500 text-xs">{errors.email}</span>
          )
        }
      </div>

      <div className="flex-col mx-auto mt-[20px] font-poppins md:font-thin text-[10px] text-white md:text-[14px]">
        <Label
          htmlFor="password"
          className="font-poppins font-thin text-[14px]"
        >
          Password
        </Label>
        <Input
          type = "password"
          id="password"
          value={loginData.password}
          onChange={passwordHandler}
          className="rounded-[8px]"
        />
        {
          errors.password && (
            <span className="my-2 font-bold text-red-500 text-xs">{errors.password}</span>
          )
        }

        <div className="md:block hidden">
            <NavLink to="/forget-password">
                <div className="flex justify-end mt-[5px]">
                    <h1 className="border-b w-fit text-[12px] cursor-pointer">
                    Forget Password
                    </h1>
                </div>
            </NavLink>
          

          <div className="flex space-x-1 md:space-x-2 md:text-[12px]">
            <Checkbox id="remember" className="rounded-[5px]" />
            <Label htmlFor="remember" className="cursor-pointer">
              Remember Me
            </Label>
          </div>
        </div>
        </div>

        <Button type="button" onClick={handleSubmit} className="flex flex-col justify-center order-1 md:order-none bg-[#8566FF] md:bg-slate-50 md:hover:bg-slate-300 hover:bg-purple-500 mx-auto mt-[20px] md:border rounded-full w-[250px] md:w-[550px] font-poppins font-thin text-[14px] text-white md:text-black">
            Log In
        </Button>

      <div className="flex justify-between items-center md:hidden mx-auto mt-[30px] w-[350px] font-poppins text-white">
        <div className="flex space-x-1 text-[12px]">
          <Checkbox id="remember" className="rounded-[5px]" />
          <Label htmlFor="remember" className="cursor-pointer">
            Remember Me
          </Label>
        </div>

        <NavLink to="/forget-password">
            <h1 className="w-fit text-[14px] cursor-pointer">
            Forget Password
            </h1>
        </NavLink>
      </div>

  

      <div className="flex mx-auto mt-[12px] md:mt-[50px] w-full md:w-[550px]">
        <img src={divider} alt="" />
      </div>

        <Button  className="flex justify-center bg-slate-50 hover:bg-slate-300 mx-auto mt-[12px] md:mt-[20px] border rounded-full w-[250px] md:w-[550px] font-poppins font-thin md:text-[14px]">
            <img src={googleLog} alt="" className="mx-2 w-[15px] h-[15px]"/>
            Continue with Google 
        </Button>

      <div className="flex items-center mx-auto mt-[20px] md:mt-[50px] w-full md:w-[550px]">
        <hr className="flex-grow border-t-2" />
      </div>

        <h2 className="flex justify-center mt-[10px] md:mt-[20px] pb-[10px] md:pb-0 font-poppins font-thin text-[14px] text-white md:text-[18px] cursor-default">Don't have an account? <a href="/sign-up" className="flex hover:border-[#D24DF3] md:hidden ml-1 border-transparent border-b-0 hover:border-b-2 w-fit text-[#D24DF3] cursor-pointer">Sign Up </a></h2>

      <NavLink to="/sign-up">
        <Button className="md:flex justify-center hidden hover:bg-slate-100 mx-auto mt-[20px] border rounded-full w-[550px] font-poppins font-thin text-[14px] text-slate-50 hover:text-black duration-300">
          Sign Up
        </Button>
      </NavLink>
    </div>
  )
}

export default LogInForm