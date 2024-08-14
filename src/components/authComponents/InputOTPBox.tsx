import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Button } from "../ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useAuthContext } from "@/context/authContext";
import { useResendOtp, useVerifyEmail } from "@/hooks/useAuth";
import gmailLogo from "../../assets/gmail-logo.png";
import { VerifyData } from "@/types/type";

const InputOTPBox = () => {
  const { OTPBoxHandler, accountData } = useAuthContext();
  const [otpCode, setOtpCode] = useState<string>("");
  const verifyEmail = useVerifyEmail();
  const resendOtp = useResendOtp();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const verifyData: VerifyData = {
      email: accountData?.email || "",
      otp: otpCode,
    };
    console.log("Verify Data:", verifyData);
    verifyEmail.mutate(verifyData);
    
    if (verifyEmail.isSuccess) {
      OTPBoxHandler();
      navigate('/profile-setup');
    }
  };

  const handleResendOtp = () => {
    const resendEmail = accountData?.email;
    console.log("Resend email:", resendEmail);
    resendOtp.mutate(resendEmail);
  };

  return (
    <>
      <div className="top-0 left-0 items-center justify-center hidden w-screen h-screen bg-black opacity-50 md:absolute md:flex"></div>
      <div className="top-[100px] left-[50px] md:left-[500px] z-10 absolute flex flex-col justify-center items-center gap-4 bg-white opacity-100 p-2 md:p-4 rounded w-[300px] md:w-[400px] h-auto">
        <div
          onClick={OTPBoxHandler}
          className="flex justify-end w-full cursor-pointer"
        >
          <IoMdCloseCircleOutline color="#8566FF" />
        </div>
        <img src={gmailLogo} className="py-2 w-[50px] md:w-[100px]" alt="Gmail Logo" />
        <h3 className="text-lg font-bold md:text-xl">Verify your email address</h3>
        <p className="pb-2 text-xs font-semibold">
          Please enter the 6-digit code sent to your{" "}
          <span className="text-main">email example.com</span>
        </p>
        <InputOTP maxLength={6} value={otpCode} onChange={setOtpCode}>
          <InputOTPGroup className="flex gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                className="text-white border-none rounded bg-main2"
                index={index}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm font-extralight md:text-base">
          OTP code will expire within{" "}
          <span className="underline text-main">05:00</span>
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          <Button onClick={handleSubmit} variant="otp">
            Confirm
          </Button>
          <button
            onClick={handleResendOtp}
            className="text-xs font-semibold underline cursor-pointer text-main md:text-base"
          >
            Resend Code Again
          </button>
        </div>
        <p className="py-2 text-xs font-semibold md:py-0 md:text-base">
          Have questions?{" "}
          <span className="cursor-pointer text-main">Email us</span>
        </p>
      </div>
    </>
  );
};

export default InputOTPBox;
