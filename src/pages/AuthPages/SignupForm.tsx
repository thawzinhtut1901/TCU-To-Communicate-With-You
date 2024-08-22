import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { ButtonLoading } from "@/components/ui/buttonLoading";
import MobileImage from "@/components/authComponents/MobileImage";
import { useSignUp } from "../../hooks";
import { useAuthContext } from "@/context/authContext";

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignupForm = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const createAccount = useSignUp();
  const { OTPBoxHandler, accountData, setAccountData } = useAuthContext();

  useEffect(() => {
    if (createAccount.isSuccess) {
      OTPBoxHandler();
    }
  }, [createAccount.isSuccess]);

  useEffect(() => {
    if (createAccount.isError) {
      const backendError = createAccount.error.message || "An unexpected error";
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: backendError,
      }));
    }
  }, [createAccount.isError]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const validationErrors: Errors = {};

    if (!accountData.email) {
      validationErrors.email = "* Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(accountData.email)) {
      validationErrors.email = "Invalid Email!";
    }

    if (!accountData.password) {
      validationErrors.password = "* Password is required!";
    } else if (accountData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters!";
    }

    if (confirmPassword !== accountData.password) {
      validationErrors.confirmPassword = "Password does not match!";
    } else if (!confirmPassword) {
      validationErrors.confirmPassword = " ";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      createAccount.mutate(accountData);
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

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <h1 className="top-0 left-0 absolute lg:hidden px-10 py-4 font-extrabold font-poppins text-[18px] text-start text-white lg:text-[24px]">
        TCU
      </h1>
      <MobileImage />
      <div className="flex flex-col items-center justify-center">
        <h2 className="flex justify-center pt-3 text-lg font-medium text-white lg:pt-0 font-primary lg:text-2xl">
          Sign up
        </h2>
        <div className="flex-col mx-auto mt-[10px] lg:mt-[20px] font-primary lg:font-thin text-[10px] text-white lg:text-[14px]">
          <Label htmlFor="email">Email *</Label>
          <div className="relative">
            <Input
              type="email"
              id="email"
              value={accountData.email}
              onChange={handleEmailChange}
              className="rounded-[8px]"
            />
            {errors.email && (
              <span className="my-2 text-xs font-bold text-red-500">
                {errors.email}
              </span>
            )}
            <MdOutlineAlternateEmail className="absolute top-3 right-3" />
          </div>
        </div>

        <div className="flex-col mx-auto mt-[10px] lg:mt-[20px] font-primary lg:font-thin text-[10px] text-white lg:text-[14px]">
          <Label htmlFor="password">Password *</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              value={accountData.password}
              onChange={handlePasswordChange}
              className="rounded-[8px]"
            />
            <button
              className="absolute top-3 right-5"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <PiEyeBold color="slate" />
              ) : (
                <PiEyeClosedBold color="slate" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="my-2 text-xs font-bold text-red-500">
              {errors.password}
            </span>
          )}
        </div>

        <div className="flex-col mx-auto mt-[10px] lg:mt-[20px] font-primary lg:font-thin text-[10px] text-white lg:text-[14px]">
          <Label htmlFor="confirm">Confirm Your Password *</Label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="rounded-[8px]"
            />
            <button
              className="absolute top-3 right-5"
              onClick={toggleShowConfirmPassword}
            >
              {showConfirmPassword ? (
                <PiEyeBold color="slate" />
              ) : (
                <PiEyeClosedBold color="slate" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="my-2 text-xs font-bold text-red-500">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <div className="flex space-x-2 mx-auto mt-[20px] lg:mt-[50px] w-[350px] lg:w-[550px] font-primary font-thin text-[9px] text-white">
          <Checkbox id="receive-email" className="mt-1 rounded-[5px]" />
          <Label
            htmlFor="receive-email"
            className="text-[10px] lg:text-[14px] cursor-pointer"
          >
            I want to receive emails about the product, feature updates, events,
            and marketing promotions.
          </Label>
        </div>

        <h2 className="flex mx-auto mt-[24px] ms-10 lg:ms-20 w-[350px] lg:w-[550px] font-primary font-thin text-[10px] text-white lg:text-[12px]">
          By creating an account, you agree to the{" "}
          <p
            onClick={() => navigate("/howtcuwork")}
            className="px-1 font-bold text-blue-500 underline cursor-pointer text-md"
          >
            Terms
          </p>
          and
          <p
            onClick={() => navigate("/howtcuwork/policies")}
            className="px-1 font-bold text-blue-500 underline cursor-pointer text-md"
          >
            Privacy Policy
          </p>
        </h2>

        {!createAccount.isPending ? (
          <Button
            onClick={handleSubmit}
            type="button"
            className="flex justify-center bg-slate-50 hover:bg-slate-300 mt-[24px] border rounded-full px-4 font-primary text-[#8566FF] text-[12px] lg:text-[14px]"
          >
            Create An Account
          </Button>
        ) : (
          <div className="flex justify-center bg-slate-50 hover:bg-slate-300 mt-[24px] border rounded-full font-primary text-[#8566FF] text-[12px] lg:text-[14px]">
            <ButtonLoading />
          </div>
        )}

        <h2 className="flex justify-center mx-auto mt-[14px] lg:mt-[18px] pb-[20px] lg:pb-0 w-full lg:w-[550px] font-primary font-thin text-[12px] text-white lg:text-[14px]">
          Already have an account?{" "}
          <a
            href="/signin"
            className="pl-1 font-bold text-[#1DA1F2] underline cursor-pointer"
          >
            Log In
          </a>
        </h2>
      </div>
    </div>
  );
};

export default SignupForm;
