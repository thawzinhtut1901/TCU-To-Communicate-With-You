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
  }

const ForgetPswOTP: React.FC<OTPBoxProps> = ({ onSubmit, onResend, setOtpCode, onClose }) => {
    const [otpCode, setLocalOtpCode] = useState<string>("");

    useEffect(() => {
        setOtpCode(otpCode); 
      }, [otpCode, setOtpCode]);

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
        <p className="font-extralight text-[14px] text-black md:text-[18px]">
          OTP code will expire within{" "}
          <span className="text-main underline">05:00</span>
        </p>
        <div className="flex flex-col justify-center items-center gap-2">
          <Button onClick={onSubmit} variant="otp">
            Confirm
          </Button>
          <button onClick={onResend} className="font-semibold text-[14px] text-main md:text-[16px] underline cursor-pointer">
            Resend Code Again
          </button>
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