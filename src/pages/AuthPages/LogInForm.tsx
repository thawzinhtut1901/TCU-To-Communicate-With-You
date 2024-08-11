import { NavLink, useNavigate } from "react-router-dom";
import { divider, googleLog } from "../../assets";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useSignIn } from "../../hooks";
import { useEffect, useState } from "react";
import { AuthData } from "../../types/type";
import logoMobile from "../../assets/LogoMobile.png";
interface Errors {
  email?: string;
  password?: string;
}

const LogInForm = () => {
  const navigate = useNavigate();
  const [accountData, setAccountData] = useState<AuthData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const sigInAccount = useSignIn();

  useEffect(() => {
    if (sigInAccount.isSuccess) {
      navigate("");
    }
  }, [sigInAccount.isSuccess, navigate]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const validationErrors: Errors = {};

    if (!accountData.email) {
      validationErrors.email = " *Email is required !";
    } else if (!/\S+@\S+\.\S+/.test(accountData.email)) {
      validationErrors.email = "Invalid Email !";
    }

    if (!accountData.password) {
      validationErrors.password = "Password is required !";
    } else if (accountData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters !";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      sigInAccount.mutate(accountData);
      console.log(sigInAccount);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setAccountData((prev) => ({ ...prev, email }));
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "* Email is required !",
      }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid Email !" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setAccountData((prev) => ({ ...prev, password }));
    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "* Password is required !",
      }));
    } else if (password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters !",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  return (
    <div className="flex flex-col items-center h-screen py-5 md:py-16">
            <div className="flex flex-col justify-center gap-2 text-center md:py-0 md:hidden">
        <h1 className=" font-extrabold text-start px-10 font-poppins text-[24px] text-white">
          TCU
        </h1>
          <img src={logoMobile} alt="Mobile Logo" className="w-[300px] h-fit ms-20"/>
      </div>
      <h2 className="flex justify-center text-lg font-medium text-white md:text-2xl font-poppins">
        Log in
      </h2>

      <div className="flex-col mx-auto mt-[30px] md:mt-[20px] font-poppins md:font-thin text-[10px] text-white md:text-[14px]">
        <Label htmlFor="email">Email Address or Username</Label>
        <Input
          id="email"
          className="rounded-[8px]"
          value={accountData.email}
          onChange={handleEmailChange}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="flex-col mx-auto mt-[20px] font-poppins md:font-thin text-[10px] text-white md:text-[14px]">
        <Label
          htmlFor="password"
          className="font-poppins font-thin text-[14px]"
        >
          Password
        </Label>
        <Input
          id="password"
          className="rounded-[8px]"
          type="password"
          value={accountData.password}
          onChange={handlePasswordChange}
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password}</p>
        )}

        <div className="hidden md:block">
          <div className="flex justify-end mt-[5px]">
            <h1 className="border-b w-fit text-[12px] cursor-pointer">
              Forget Password
            </h1>
          </div>

          <div className="flex space-x-1 md:space-x-2 md:text-[12px]">
            <Checkbox id="remember" className="rounded-[5px]" />
            <Label htmlFor="remember" className="cursor-pointer">
              Remember Me
            </Label>
          </div>
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        className="flex flex-col justify-center order-1 md:order-none bg-[#8566FF] md:bg-slate-50 md:hover:bg-slate-300 hover:bg-purple-500 mx-auto mt-[20px] md:border rounded-full w-[250px] md:w-[550px] font-poppins font-thin text-[14px] text-white md:text-black"
      >
        Log In
      </Button>

      <div className="flex justify-between items-center md:hidden mx-auto mt-[30px] w-[350px] font-poppins text-white">
        <div className="flex space-x-1 text-[12px]">
          <Checkbox id="remember" className="rounded-[5px]" />
          <Label htmlFor="remember" className="cursor-pointer">
            Remember Me
          </Label>
        </div>

        <h1 className="w-fit text-[14px] cursor-pointer">
          Forget Password
        </h1>
      </div>

  

      <div className="flex mx-auto mt-[12px] md:mt-[50px] w-full md:w-[550px]">
        <img src={divider} alt="" />
      </div>

      <Button className="flex justify-center bg-slate-50 hover:bg-slate-300 mx-auto mt-[12px] md:mt-[20px] border rounded-full w-[250px] md:w-[550px] font-poppins font-thin md:text-[14px]">
        <img src={googleLog} alt="" className="mx-2 w-[15px] h-[15px]" />
        Continue with Google
      </Button>

      <div className="flex items-center mx-auto mt-[20px] md:mt-[50px] w-full md:w-[550px]">
        <hr className="flex-grow border-t-2" />
      </div>

      <h2 className="flex justify-center mt-[10px] md:mt-[20px] pb-[10px] md:pb-0 font-poppins font-thin text-[14px] text-white md:text-[18px]">
        Don't have an account?{" "}
        <NavLink to={"/sign-up"}>
          <span className="flex hover:border-[#D24DF3] md:hidden ml-1 border-transparent border-b-0 hover:border-b-2 w-fit text-[#D24DF3]">
            Sign Up{" "}
          </span>
        </NavLink>
      </h2>

      <NavLink to="/sign-up">
        <Button className="md:flex justify-center hidden hover:bg-slate-100 duration-300 mx-auto mt-[20px] border rounded-full w-[550px] font-poppins font-thin text-[14px] text-slate-50 hover:text-black">
          Sign Up
        </Button>
      </NavLink>
    </div>
  );
};

export default LogInForm;
