import { LoginDesign, LogInForm } from "../../pages/AuthPages";

const LogIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="hidden w-0 lg:block bg-slate-50 lg:w-1/2">
        <LoginDesign />
      </div>
      <div className="w-screen h-screen md:w-screen bg-custom-gradient lg:w-1/2">
        <LogInForm />
      </div>
    </div>
  );
};

export default LogIn;
