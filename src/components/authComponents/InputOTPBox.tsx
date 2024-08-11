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
import { IoMdCloseCircleOutline } from "react-icons/io";

const InputOTPBox = () => {
  const { OTPBoxHandler, accountData } = useAuthContext();
  const [otpCode, setOtpCode] = useState<string>("");
  const verifyEmail = useVerifyEmail();
  const resendOtp = useResendOtp();

  const handleSubmit = () => {
    const verifyData: VerifyData = {
      email: accountData?.email || "",
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
  };

  return (
    <>
      <div className="top-0 left-0 items-center justify-center hidden w-screen h-screen bg-black opacity-50 md:absolute md:flex"></div>
      <div className="absolute top-[100px] left-[50px] md:left-[500px] rounded w-[300px] md:w-[400px] p-2 md:p-4 h-auto z-10 bg-white opacity-100 flex flex-col justify-center items-center gap-4">
        <div
          onClick={() => OTPBoxHandler()}
          className="flex justify-end w-full "
        >
          <IoMdCloseCircleOutline color="#8566FF" />
        </div>
        <img src={gmailLogo} className=" w-[50px] md:w-[100px] py-2" alt="" />
        <h3 className="text-lg font-bold md:text-xl">Verify your email address</h3>
        <p className="pb-2 text-xs font-semibold">
          Please enter the 6 digit code sent to your{" "}
          <span className="text-main">email example.com</span>{" "}
        </p>
        <InputOTP maxLength={6} value={otpCode} onChange={setOtpCode}>
          <InputOTPGroup className="flex gap-2">
            <InputOTPSlot
              className="text-white border-none rounded bg-main2"
              index={0}
            />
            <InputOTPSlot
              className="text-white border-none rounded bg-main2"
              index={1}
            />
            <InputOTPSlot
              className="text-white border-none rounded bg-main2"
              index={2}
            />
            <InputOTPSlot
              className="text-white border-none rounded bg-main2"
              index={3}
            />
            <InputOTPSlot
              className="text-white border-none rounded bg-main2"
              index={4}
            />
            <InputOTPSlot
              className="text-white border-none rounded bg-main2"
              index={5}
            />
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
            onClick={handleResentOtp}
            className="text-xs font-semibold underline cursor-pointer md:text-base text-main"
          >
            Resend Code Again
          </button>
        </div>
        <p className="py-2 text-xs font-semibold md:py-0 md:text-base">
          Have question?{" "}
          <span className="cursor-pointer text-main"> Email us</span>
        </p>
      </div>
    </>
  );
};

export default InputOTPBox;
