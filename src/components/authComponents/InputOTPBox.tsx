/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
import { login } from "@/services/authService";
import Swal from "sweetalert2";

const InputOTPBox = () => {
  const { OTPBoxHandler, accountData } = useAuthContext();
  const [otpCode, setOtpCode] = useState<string>("");
  const [resendCooldown, setResendCooldown] = useState<number>(60);
  // const [timeLeft, setTimeLeft] = useState<number>(180);
  // const [showError, setShowError] = useState<boolean>(false);
  const verifyEmail = useVerifyEmail();
  const resendOtp = useResendOtp();
  const navigate = useNavigate();

  useEffect(() => {
    if (verifyEmail.isSuccess) {
      const authToken = verifyEmail.data.accessToken;
      delete verifyEmail.data.accessToken;
      login(authToken);
      navigate("/auth/profile-setup");
    }
  }, [verifyEmail.isSuccess, navigate]);

  useEffect(() => {
    if (verifyEmail.isError) {
      Swal.fire({
        icon: "error",
        title: "Wrong OTP",
        text: verifyEmail.error?.message,
        timer: 2000,
      });
    }
  }, [verifyEmail.isError]);

  // useEffect(() => {
  //   if(timeLeft === 0) {
  //     setShowError(true)
  //   }
  // }, [timeLeft])

  // useEffect(() => {
  //   // Start the countdown
  //   const countdown = setInterval(() => {
  //     setTimeLeft((prevTime) => {
  //       if (prevTime <= 1) {
  //         clearInterval(countdown);
  //         return 0;
  //       }
  //       return prevTime - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(countdown);
  // }, [timeLeft]);

  useEffect(() => {
    if (resendCooldown > 0) {
      const cooldownTimer = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(cooldownTimer);
    }
  }, [resendCooldown]);

  // Format time in MM:SS format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleSubmit = () => {
    const verifyData: VerifyData = {
      email: accountData?.email || "",
      otp: otpCode,
    };
    console.log("Verify Data:", verifyData);
    verifyEmail.mutate(verifyData);

    // if (verifyEmail.isSuccess) {
    //   OTPBoxHandler();
    //   navigate("/profile-setup");
    // }
  };

  const handleResendOtp = () => {
    const resendEmail = accountData?.email;
    console.log("Resend email:", resendEmail);
    resendOtp.mutate(resendEmail);
    setResendCooldown(60);
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
        {/* {
          showError ? (
            <p className="text-sm font-semibold text-red-500 md:text-base">
              Time is up! Please request a new OTP.
            </p>
          ) : (
            <p className="text-sm font-extralight md:text-base">
              OTP code will expire within{" "}
              <span className="underline text-main">{formatTime(timeLeft)}</span>
            </p>
          )
        } */}
        
        <div className="flex flex-col items-center justify-center gap-2">
          <Button onClick={handleSubmit} variant="otp">
            Confirm
          </Button>
          <div className="flex">
          <button
            onClick={handleResendOtp}
            disabled={resendCooldown > 0}
            className={`font-semibold text-[14px] md:text-[16px] underline cursor-pointer ${resendCooldown > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-main'}`}
          >
            Resend Code Again
          </button>
          <p className="mt-[2px] md:mt-1 ml-1 font-bold text-[12px] text-slate-600 md:text-[14px]">{resendCooldown > 0 && `(${formatTime(resendCooldown)})`}</p>
          </div>
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
