import {  LoginDesign, SignupDesign, SignupForm } from "../../pages/AuthPages"

const SignUpLayout = () => {
  return (
    <div className="md:flex h-full overflow-hidden">
      <div className="bg-custom-gradient w-full md:w-1/2">
          <div className="md:hidden">
            <LoginDesign/>
          </div>
          <SignupForm/>
        </div>

      <div className="md:block hidden md:bg-slate-50 md:w-1/2">
        <SignupDesign/>
      </div>
    </div>
  )
}

export default SignUpLayout