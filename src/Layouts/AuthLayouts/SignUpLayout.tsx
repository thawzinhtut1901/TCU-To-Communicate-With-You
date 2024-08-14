import { useAuthContext } from "@/context/authContext";
import { SignupDesign, SignupForm } from "../../pages/AuthPages";
import InputOTPBox from "@/components/authComponents/InputOTPBox";

const SignUpLayout = () => {
  const { openOTPBox } = useAuthContext();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-screen md:w-screen bg-custom-gradient lg:w-1/2">
        <SignupForm />
      </div>
      <div className="hidden w-0 lg:block bg-slate-50 lg:w-1/2">
        <SignupDesign />
      </div>
      {openOTPBox && <InputOTPBox />}
    </div>
  );
};

export default SignUpLayout;
