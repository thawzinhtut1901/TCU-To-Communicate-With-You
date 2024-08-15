import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useSignUp } from "../../hooks";
import { useState } from "react";
import { useAuthContext } from "@/context/authContext";
import MobileImage from "@/components/authComponents/MobileImage";
import { ButtonLoading } from "@/components/ui/buttonLoading";

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignupForm = () => {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const createAccount = useSignUp();
  const { OTPBoxHandler, accountData, setAccountData } = useAuthContext();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const validationErrors: Errors = {};

    if (!accountData.email) {
      validationErrors.email = "* Email is required !";
    } else if (!/\S+@\S+\.\S+/.test(accountData.email)) {
      validationErrors.email = "Invalid Email !";
    } else {
      validationErrors.email = createAccount.error?.message;
    }

    if (!accountData.password) {
      validationErrors.password = "* Password is required !";
    } else if (accountData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters !";
    }

    if (confirmPassword !== accountData.password) {
      validationErrors.confirmPassword = "Password does not match !";
    } else if (!confirmPassword) {
      validationErrors.confirmPassword = " ";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      createAccount.mutate(accountData);
      console.log(accountData);
      OTPBoxHandler();
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setAccountData((prev) => ({ ...prev, email }));
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setAccountData((prev) => ({ ...prev, password }));
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
    setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <MobileImage />
      <div className="flex flex-col justify-center items-center">
        <h2 className="flex justify-center pt-3 lg:pt-0 font-medium font-poppins text-lg text-white lg:text-2xl">
          Sign up
        </h2>
        <div className="flex-col mx-auto mt-[10px] lg:mt-[20px] font-poppins lg:font-thin text-[10px] text-white lg:text-[14px]">
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            id="email"
            value={accountData.email}
            onChange={handleEmailChange}
            className="rounded-[8px]"
          />
          {errors.email && (
            <span className="my-2 font-bold text-red-500 text-xs">
              {errors.email}
            </span>
          )}
        </div>

        <div className="flex-col mx-auto mt-[10px] lg:mt-[20px] font-poppins lg:font-thin text-[10px] text-white lg:text-[14px]">
          <Label
            htmlFor="password"
            className="font-poppins font-thin text-[14px]"
          >
            Password *
          </Label>

          <Input
            type="password"
            id="password"
            value={accountData.password}
            onChange={handlePasswordChange}
            className="rounded-[8px]"
          />
          {errors.password && (
            <span className="my-2 font-bold text-red-500 text-xs">
              {errors.password}
            </span>
          )}
        </div>

        <div className="flex-col mx-auto mt-[10px] lg:mt-[20px] font-poppins lg:font-thin text-[10px] text-white lg:text-[14px]">
          <Label htmlFor="confirm">Confirm Your Password *</Label>

          <Input
            type="password"
            id="confirm"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="rounded-[8px]"
          />

          {errors.confirmPassword && (
            <span className="my-2 font-bold text-red-500 text-xs">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <div className="flex space-x-2 mx-auto mt-[20px] lg:mt-[50px] w-[350px] lg:w-[550px] font-poppins font-thin text-[9px] text-white">
          <Checkbox id="recieve-email" className="mt-1 rounded-[5px]" />
          <Label
            htmlFor="recieve-email"
            className="text-[12px] lg:text-[14px] cursor-pointer"
          >
            I want to receive emails about the product, feature updates, event
            and marketing promotion.
          </Label>
        </div>

        <h2 className="md:flex mx-auto mt-[24px] w-[350px] lg:w-[550px] font-poppins font-thin text-[12px] text-white lg:text-[14px]">
          By creating an account, you agree to the{" "}
          <a href="#" className="pl-[2px] lg:pl-1 border-b">
            {" "}
            Term of use and Privacy Policy.
          </a>
        </h2>

        {
        !createAccount.isPending ? (
          <Button
            onClick={handleSubmit}
            type="button"
            className="flex justify-center bg-slate-50 hover:bg-slate-300 mt-[24px] ml-0 md:ml-[55px] border rounded-full font-poppins font-thin text-[#8566FF] text-[12px] md:text-[14px]"
          >
            Create An Account
          </Button>
        ) : (
          <div className="flex justify-center bg-slate-50 hover:bg-slate-300 mt-[24px] ml-0 md:ml-[55px] border rounded-full font-poppins font-thin text-[#8566FF] text-[12px] md:text-[14px]">
            <ButtonLoading/>
          </div>
        )
      }

        <h2 className="flex justify-center mx-auto mt-[14px] lg:mt-[24px] pb-[20px] lg:pb-0 w-full lg:w-[550px] font-poppins font-thin text-[12px] text-white lg:text-[14px]">
          Already have an account?{" "}
          <a
            href="/"
            className="md:hover:border-slate-50 hover:border-[#D24DF3] pl-1 border-transparent border-b-0 hover:border-b-2 text-[#D24DF3] lg:text-white"
          >
            Log in
          </a>
        </h2>
      </div>
    </div>
  );
};

export default SignupForm;
