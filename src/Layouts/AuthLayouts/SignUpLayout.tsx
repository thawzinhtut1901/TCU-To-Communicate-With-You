import { useAuthContext } from "@/context/authContext";
import { SignupDesign, SignupForm } from "../../pages/AuthPages";
import InputOTPBox from "@/components/authComponents/InputOTPBox";

const SignUpLayout = () => {
  const { openOTPBox } = useAuthContext();
  return (
    <div className="items-center justify-center block h-screen md:flex">
      <div className="w-screen md:w-1/2 bg-custom-gradient">
        <SignupForm />
      </div>
      <div className="hidden w-0 md:w-1/2 md:block bg-slate-50">
        <SignupDesign />
      </div>
      {openOTPBox && <InputOTPBox />}
    </div>
  );
};

export default SignUpLayout;
