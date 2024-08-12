import { useAuthContext } from "@/context/authContext";
import { SignupDesign, SignupForm } from "../../pages/AuthPages";
import InputOTPBox from "@/components/authComponents/InputOTPBox";

const SignUpLayout = () => {
  const { openOTPBox } = useAuthContext();
  return (
    <div className="block md:flex justify-center items-center h-screen">
      <div className="bg-custom-gradient w-screen md:w-1/2">
        <SignupForm />
      </div>
      <div className="md:block hidden bg-slate-50 w-0 md:w-1/2">
        <SignupDesign />
      </div>
      {openOTPBox && <InputOTPBox />}
    </div>
  );
};

export default SignUpLayout;
