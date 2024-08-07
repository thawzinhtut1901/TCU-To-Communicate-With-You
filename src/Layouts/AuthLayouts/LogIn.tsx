import { LoginDesign, LogInForm } from "../../pages/AuthPages"

const LogIn = () => {
  return (
    <div className="flex h-full">
      <div className="bg-slate-50 w-1/2">
        <LoginDesign/>
      </div>

        <div className="bg-custom-gradient w-1/2">
          <LogInForm/>
        </div>
    </div>
  )
}

export default LogIn