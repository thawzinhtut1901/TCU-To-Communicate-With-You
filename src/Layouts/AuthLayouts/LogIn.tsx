import { LoginDesign, LogInForm } from "../../pages/AuthPages"

const LogIn = () => {
  return (
    <div className="md:flex h-full overflow-hidden">
      <div className="md:block hidden md:bg-slate-50 md:w-1/2">
        <LoginDesign/>
      </div>

        <div className="bg-custom-gradient w-full md:w-1/2">
          <div className="md:hidden">
            <LoginDesign/>
          </div>
          <LogInForm/>
        </div>
    </div>
  )
}

export default LogIn