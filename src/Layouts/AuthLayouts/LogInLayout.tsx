import { LoginDesign, LogInForm } from "../../pages/AuthPages";

const LogIn = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="lg:block hidden w-screen lg:w-1/2">
        <LoginDesign />
      </div>
      <div className="bg-custom-gradient w-screen md:w-screen lg:w-1/2 h-screen">
        <LogInForm />
      </div>
    </div>
  );
};

export default LogIn;
