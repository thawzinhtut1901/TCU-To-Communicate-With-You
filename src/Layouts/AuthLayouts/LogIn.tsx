import { LoginDesign, LogInForm } from "../../pages/AuthPages"

const LogIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:block hidden bg-slate-50 w-0 md:w-1/2">
        <LoginDesign/>
      </div>

        <div className="bg-custom-gradient w-screen md:w-1/2">
          <LogInForm/>
        </div>
    </div>
  )
}

export default LogIn