import { LoginDesign, LogInForm } from "../../pages/AuthPages"

const LogIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="hidden w-0 md:w-1/2 md:block bg-slate-50">
        <LoginDesign/>
      </div>

        <div className="w-screen md:w-1/2 bg-custom-gradient">
          <LogInForm/>
        </div>
    </div>
  )
}

export default LogIn