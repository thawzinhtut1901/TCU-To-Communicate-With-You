import { useAuthContext } from "@/context/authContext";
import { SignupDesign, SignupForm } from "../../pages/AuthPages";
import InputOTPBox from "@/components/authComponents/InputOTPBox";

const SignUpLayout = () => {
  const { openOTPBox } = useAuthContext();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 bg-custom-gradient">
        <SignupForm />
      </div>

      <div className="w-1/2 bg-slate-50">
        <SignupDesign />
      </div>
      {openOTPBox && <InputOTPBox />}
    </div>
  );
};

export default SignUpLayout;
