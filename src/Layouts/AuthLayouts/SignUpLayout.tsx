import {  SignupDesign, SignupForm } from "../../pages/AuthPages"

const SignUpLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 bg-custom-gradient">
          <SignupForm/>
        </div>

      <div className="w-1/2 bg-slate-50">
        <SignupDesign/>
      </div>
    </div>
  )
}

export default SignUpLayout