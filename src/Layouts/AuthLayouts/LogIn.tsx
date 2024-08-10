import { LoginDesign, LogInForm } from "../../pages/AuthPages"

const LogIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 bg-slate-50">
        <LoginDesign/>
      </div>

        <div className="w-1/2 bg-custom-gradient">
          <LogInForm/>
        </div>
    </div>
  )
}

export default LogIn