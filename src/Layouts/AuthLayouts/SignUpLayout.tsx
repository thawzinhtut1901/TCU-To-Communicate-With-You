import {  SignupDesign, SignupForm } from "../../pages/AuthPages"

const SignUpLayout = () => {
  return (
    <div className="flex h-full">
      <div className="bg-custom-gradient w-1/2">
          <SignupForm/>
        </div>

      <div className="bg-slate-50 w-1/2">
        <SignupDesign/>
      </div>
    </div>
  )
}

export default SignUpLayout