import { gmailLogo } from "@/assets"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface OTPBoxProps {
    onSubmit: () => void;
    onResend: () => void;
    setOtpCode: (code: string) => void;
    onClose: () => void;
    // timeLeft: number;
  }

// timeLeft

const ForgetPswOTP: React.FC<OTPBoxProps> = ({ onSubmit, onResend, setOtpCode, onClose }) => {
    const [otpCode, setLocalOtpCode] = useState<string>("");
    // const [showError, setShowError] = useState<boolean>(false);
    const [resendCoolDown, setResendCoolDown] = useState<number>(60);

    useEffect(() => {
        setOtpCode(otpCode); 
      }, [otpCode, setOtpCode]);

    // useEffect(() => {
    //   if(timeLeft === 0) {
    //     setShowError(true)
    //   }
    // }, [timeLeft]);

    useEffect(() => {
      if(resendCoolDown > 0) {
        const cooldownTimer = setInterval(() => {
          setResendCoolDown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(cooldownTimer);
      }
    }, [resendCoolDown]);

    const handleResend = () => {
      onResend();
      setResendCoolDown(60);
  };

      const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="md:z-10 absolute flex flex-col justify-center items-center gap-4 bg-white opacity-100 p-4 rounded w-[400px] h-auto">
        <Button  onClick={onClose}  className="top-2 right-2 absolute text-black hover:text-gray-700">
          <IoMdCloseCircleOutline color="#8566FF" />
        </Button>
        <img src={gmailLogo} className="py-2 w-[50px] md:w-[100px]" alt="" />
        <h3 className="font-bold text-[18px] text-black md:text-xl">Verify your email address</h3>
        <p className="pb-2 font-semibold text-black text-xs">
          Please enter the 6 digit code sent to your{" "}
          <span className="text-main">email example.com</span>{" "}
        </p>

        <InputOTP
          maxLength={6}
          value={otpCode}
          onChange={setLocalOtpCode}
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

        {/* {
          showError ? (
            <p className="font-semibold text-[14px] text-red-500 md:text-[18px]">
              Time's up! Please try again.
            </p>
          ) : (
            <p className="font-extralight text-[14px] text-black md:text-[18px]">
              OTP code will expire within{" "}
              <span className="text-main underline">{formatTime(timeLeft)}</span>
            </p>
          )
        } */}
        
        <div className="flex flex-col justify-center items-center gap-2">
          <Button onClick={onSubmit} variant="otp">
            Confirm
          </Button>
          <div className="flex">
            <button onClick={handleResend} disabled={resendCoolDown > 0} className={`font-semibold text-[14px] md:text-[16px] underline cursor-pointer ${resendCoolDown > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-main'}`}>
              Resend Code Again 
            </button>
            <p className="mt-[2px] md:mt-1 ml-1 font-bold text-[12px] text-slate-600 md:text-[14px]">{resendCoolDown > 0 && `(${formatTime(resendCoolDown)})`}</p>
          </div>
        </div>

        <p className="font-semibold text-[14px] text-black md:text-[16px]">
          Have question?{" "}
          <span className="text-main cursor-pointer"> Email us</span>
        </p>
    </div>
    </div>
  )
}

export default ForgetPswOTP