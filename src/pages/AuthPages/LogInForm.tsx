import { NavLink, useNavigate } from "react-router-dom";
import { divider, googleLog } from "../../assets";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useEffect, useState } from "react";
import { useSignIn } from "@/hooks";
import { LoginData } from "@/types/type";
import { login } from "@/services/authService";
import MobileImage from "@/components/authComponents/MobileImage";
import { ButtonLoading } from "@/components/ui/buttonLoading";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
interface Errors {
  emailOrUserName?: string;
  password?: string;
}

const LogInForm = () => {
  const navigate = useNavigate();
  const LoginAccount = useSignIn();
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState<LoginData>({
    emailOrUserName: "",
    password: "",
  });

  useEffect(() => {
    if (LoginAccount.isSuccess) {
      const authToken = LoginAccount.data.accessToken;
      delete LoginAccount.data.accessToken;
      login(authToken);
      navigate("/home");
    }
  }, [LoginAccount.isSuccess]);

  useEffect(() => {
    if(LoginAccount.isError) {
      let backendError = LoginAccount.error.message;

      if (backendError.includes("Credential Error")) {
        backendError = "Email or Password is incorrect";
      }

      setErrors((prevErrors) => ({
        ...prevErrors,
        emailOrUserName: backendError,
        password: backendError,
      }));
    }
  })

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const validationErrors: Errors = {};

    if (!loginData.emailOrUserName) {
      validationErrors.emailOrUserName = "* Email Or Username is required !";
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
    const emailOrUserName = event.target.value;
    setLoginData((prev) => ({ ...prev, emailOrUserName }));
    setErrors((prevErrors) => ({ ...prevErrors, emailOrUserName: "" }));
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setLoginData((prev) => ({ ...prev, password }));
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex flex-col justify-center items-center gap-10 px-2 h-screen">
      <h1 className="top-0 left-0 absolute lg:hidden px-10 py-4 font-extrabold font-poppins text-[18px] text-start text-white lg:text-[24px]">
        TCU
      </h1>
      <MobileImage />
      <div className="flex flex-col justify-center items-center">
        <h2 className="flex justify-center font-medium font-primary text-lg text-white lg:text-2xl">
          Log in
        </h2>
        <div className="flex-col mx-auto mt-[20px] lg:mt-[20px] font-primary text-[10px] text-white md:text-[14px]">
          <Label htmlFor="email">Email Address or Username</Label>
          <div className="relative">
          <Input
            type="email"
            id="email"
            value={loginData.emailOrUserName}
            onChange={emailHandler}
            className="rounded-[8px]"
          />
          <IoPerson  className="top-3 right-4 absolute"/>
          </div>

          {errors.emailOrUserName && (
            <span className="my-2 ml-2 font-bold text-red-500 text-xs">
              {errors.emailOrUserName}
            </span>
          )}
        </div>
        <div className="flex-col mx-auto mt-[10px] lg:mt-[20px] font-primary text-[10px] text-white md:text-[14px]">
          <Label
            htmlFor="password"
            className="font-primary font-thin text-[14px]"
          >
            Password
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={loginData.password}
              onChange={passwordHandler}
              className="rounded-[8px]"
            />
            <button onClick={toggleShowPassword}>
              {showPassword ? (
                <PiEyeBold color="slate" className="top-3 right-5 absolute" />
              ) : (
                <PiEyeClosedBold
                  color="slate"
                  className="top-3 right-5 absolute"
                />
              )}
            </button>
            {errors.password && (
            <span className="ml-2 pb-2 font-bold text-red-500 text-xs">
              {errors.password}
            </span>
          )}
          </div>
          

          <div className="md:flex justify-between items-center hidden">
            <NavLink to="/forget-password">
              <h1 className="w-fit font-primary text-[12px] underline cursor-pointe">
                Forget Password
              </h1>
            </NavLink>
            <div className="flex items-center space-x-1">
              <Checkbox id="remember" className="rounded-[5px]" />
              <Label
                htmlFor="remember"
                className="font-primary text-[12px] cursor-pointer"
              >
                Remember Me
              </Label>
            </div>
          </div>
        </div>
        {!LoginAccount.isPending ? (
          <Button
            type="button"
            onClick={handleSubmit}
            className="flex flex-col justify-center order-1 md:order-none bg-[#8566FF] md:bg-slate-50 md:hover:bg-slate-300 hover:bg-purple-500 mx-auto mt-0 lg:mt-[20px] md:border rounded-full w-[250px] lg:w-[500px] font-primary font-thin text-[14px] text-white md:text-black"
          >
            Log In
          </Button>
        ) : (
          <div className="flex flex-col justify-center order-1 md:order-none bg-[#8566FF] md:bg-slate-50 md:hover:bg-slate-300 hover:bg-purple-500 mx-auto mt-[20px] md:border rounded-full w-[250px] lg:w-[500px] font-primary font-thin text-[14px] text-black">
            <ButtonLoading />
          </div>
        )}

        <div className="flex justify-between items-center md:hidden mx-auto mt-[10px] px-4 w-[350px] font-primary text-white">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" className="rounded-[5px]" />
            <Label
              htmlFor="remember"
              className="font-primary text-[12px] cursor-pointer"
            >
              Remember Me
            </Label>
          </div>

          <NavLink to="/forget-password">
            <h1 className="w-fit font-primary text-[12px] cursor-pointer">
              Forget Password
            </h1>
          </NavLink>
        </div>
        <div className="flex mx-auto mt-[12px] lg:mt-[20px] w-full md:w-[550px]">
          <img src={divider} alt="" />
        </div>
        <Button className="flex justify-center bg-slate-50 hover:bg-slate-300 mx-auto mt-[12px] md:mt-[20px] border rounded-full w-[250px] md:w-[500px] font-primary font-thin md:text-[14px]">
          <img src={googleLog} alt="" className="mx-2 w-[15px] h-[15px]" />
          Continue with Google
        </Button>
        <div className="flex items-center mx-auto mt-[20px] md:mt-[50px] w-full md:w-[550px]">
          <hr className="flex-grow border-t-2" />
        </div>
        <h2 className="flex justify-center mt-[10px] md:mt-[20px] pb-[10px] md:pb-0 font-primary font-thin text-[14px] text-white md:text-[16px] cursor-default">
          Don't have an account?{" "}
          <NavLink to="/sign-up">
            <span className="flex hover:border-[#D24DF3] md:hidden ml-1 border-transparent border-b-0 hover:border-b-2 w-fit text-[#D24DF3] cursor-pointer">
              Sign Up{" "}
            </span>
          </NavLink>
        </h2>
        <NavLink to="/sign-up">
          <Button className="md:flex justify-center hidden hover:bg-slate-100 mx-auto mt-[20px] border rounded-full w-[500px] font-primary font-thin text-[14px] text-slate-50 hover:text-black duration-300">
            Sign Up
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default LogInForm;
