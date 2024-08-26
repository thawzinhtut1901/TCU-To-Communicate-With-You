/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { useForgetPassword, useResetPassword } from "../../hooks"
import { useEffect, useState } from "react"
import ForgetPswOTP from "./ForgetPswOTP"
import { login } from "@/services/authService"
import Swal from "sweetalert2"
import { ButtonLoading } from "@/components/ui/buttonLoading"

interface Errors {
  email?: string;
}

const ForgetPaswMail = () => {
  const [email, setEmail] = useState<string>("");
  const [showOtpBox, setShowOtpBox] = useState<boolean>(false);
  const [otp, setOtpCode] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  // const [timeLeft, setTimeLeft] = useState<number>(180);
  const navigate = useNavigate();
  const sendEmail = useForgetPassword(email);
  const ResetPsw = useResetPassword();

  useEffect(() => {
    if(sendEmail.isSuccess){
      setShowOtpBox(true);
      // setTimeLeft(180);
    }
  }, [sendEmail.isSuccess]);

  useEffect(() => {
    if(sendEmail.isError) {
      const backendError = sendEmail.error.message || "An unexpected error";

      setErrors((prevErrors) => ({
        ...prevErrors,
        email: backendError,
      }));
      setShowOtpBox(false);
    }
  });

  useEffect(() => {
    if (sendEmail.isPending) {
      setShowOtpBox(false); 
    }
  }, [sendEmail.isPending]);

  useEffect(() => {
    if(ResetPsw.isSuccess){
      const authToken = ResetPsw.data.accessToken;
      delete ResetPsw.data.accessToken;
      login(authToken);

      const key = ResetPsw?.data?.resetKey;
      navigate("/forget-password/change-password", { state: {key}});
    }
  }, [ResetPsw.isSuccess])

  useEffect(() => {
    if(ResetPsw.isError) {
      Swal.fire({
        icon: "error",
        title: "Wrong OTP code",
        text: ResetPsw.error.message,
        timer: 2000,
      });
    }
  }, [ResetPsw.isError])

  // useEffect(() => {
  //   if (showOtpBox && timeLeft > 0) {
  //     const countdown = setInterval(() => {
  //       setTimeLeft((prevTime) => prevTime - 1);
  //     }, 1000);

  //     return () => clearInterval(countdown);
  //   }
  // }, [showOtpBox, timeLeft]);

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const validationErrors: Errors = {};

    if (!email) {
      validationErrors.email = "* Email is required !";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid Email !";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
    sendEmail.mutate();
    setShowOtpBox(true)
    }
  };

  const handleOtpSubmit = () => {
    setShowOtpBox(false);
    ResetPsw.mutate({ email, otp });
  }

  const onClose = () => {
    setShowOtpBox(false);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  }

  return (
    <div className="md:my-[150px] md:ml-[120px] w-[350px] md:w-[450px] font-poppins text-white">
        <h1 className="flex justify-center md:hidden my-[32px] font-semibold text-[20px]">Forgot Password</h1>
        
        <Label htmlFor="email" className="md:text-[18px]">
            Enter Your Email Address
        </Label>

        <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            className="md:bg-slate-200 mt-[5px] md:mt-[10px] rounded-[8px] md:text-black md:text-[16px]"
        />

            {errors.email && (
              <span className="flex mt-1 ml-3 text-xs font-bold text-red-500">
                {errors.email}
              </span>
            )}

        {
          !sendEmail.isPending ? (
            <Button
              type="submit"
              onClick={handleContinue}
              className="flex bg-slate-200 md:bg-[#8566FF] md:hover:bg-purple-500 hover:bg-slate-400 mt-[35px] md:mt-[20px] px-auto rounded-full md:rounded-[10px] w-[150px] md:w-[200px] text-[#393ED0] md:text-white"
            >
              Continue
            </Button>
          ) : (
            <div className="bg-slate-200 md:bg-[#8566FF] mt-[35px] md:mt-[20px] px-auto rounded-full md:rounded-[10px] w-[150px] md:w-[200px] text-[#393ED0] md:text-white">
              <ButtonLoading />
            </div>
          )
        }

        {!sendEmail.isPending && showOtpBox && <ForgetPswOTP  onSubmit={handleOtpSubmit} onResend={sendEmail.mutate} setOtpCode={setOtpCode} onClose={onClose}/>}
    </div>
  )
}

export default ForgetPaswMail;

// timeLeft={timeLeft}