import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "../ui/button";
import { useAuthContext } from "@/context/authContext";
import gmailLogo from "../../assets/gmail-logo.png";
import { useState } from "react";
import { VerifyData } from "@/types/type";
import { useResendOtp, useVerifyEmail } from "@/hooks/useAuth";

const InputOTPBox = () => {
  const { OTPBoxHandler, accountData } = useAuthContext();
  const [otpCode, setOtpCode] = useState<string>("");
  const verifyEmail = useVerifyEmail();
  const resendOtp = useResendOtp();

  const handleSubmit = () => {
    const verifyData: VerifyData = {
      email: accountData?.email || '',
      otp: otpCode,
    };
    console.log("Verify Data:", verifyData);
    verifyEmail.mutate(verifyData);
    OTPBoxHandler();
  };

  const handleResentOtp = () => {
    const resendEmail = accountData?.email;
    console.log("Resend email:", resendEmail);
    resendOtp.mutate(resendEmail);
  }

  return (
    <>
      <div className="top-0 left-0 absolute flex justify-center items-center bg-black opacity-50 w-screen h-screen"></div>
      <div className="z-10 absolute flex flex-col justify-center items-center gap-4 bg-white opacity-100 p-4 rounded w-[400px] h-auto">
        <img src={gmailLogo} className="py-2 w-[100px]" alt="" />
        <h3 className="font-bold text-xl">Verify your email address</h3>
        <p className="pb-2 font-semibold text-xs">
          Please enter the 6 digit code sent to your{" "}
          <span className="text-main">email example.com</span>{" "}
        </p>
        <InputOTP
          maxLength={6}
          value={otpCode}
          onChange={setOtpCode}
        >
          <InputOTPGroup className="flex gap-2">
            <InputOTPSlot className="bg-main2 border-none rounded text-white" index={0} />
            <InputOTPSlot className="bg-main2 border-none rounded text-white" index={1} />
            <InputOTPSlot className="bg-main2 border-none rounded text-white" index={2} />
            <InputOTPSlot className="bg-main2 border-none rounded text-white" index={3} />
            <InputOTPSlot className="bg-main2 border-none rounded text-white" index={4} />
            <InputOTPSlot className="bg-main2 border-none rounded text-white" index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="font-extralight">
          OTP code will expire within{" "}
          <span className="text-main underline">05:00</span>
        </p>
        <div className="flex flex-col justify-center items-center gap-2">
          <Button onClick={handleSubmit} variant="otp">
            Confirm
          </Button>
          <button onClick={handleResentOtp} className="font-semibold text-main underline cursor-pointer">
            Resend Code Again
          </button>
        </div>
        <p className="font-semibold">
          Have question?{" "}
          <span className="text-main cursor-pointer"> Email us</span>
        </p>
      </div>
    </>
  );
};

export default InputOTPBox;
