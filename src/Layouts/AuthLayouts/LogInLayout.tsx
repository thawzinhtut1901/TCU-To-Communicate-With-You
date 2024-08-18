import { LoginDesign, LogInForm } from "../../pages/AuthPages";

const LogIn = () => {
  return (
    <div className="flex h-screen ">
      <div className="hidden w-screen lg:block lg:w-1/2">
        <LoginDesign />
      </div>
      <div className="w-screen h-screen md:w-screen bg-custom-gradient lg:w-1/2">
        <LogInForm />
      </div>
    </div>
  );
};

export default LogIn;
