import { Outlet, useNavigate } from "react-router-dom"

const TermsPolicyLayout = () => {
  const navigate = useNavigate();

  const HeaderHandler = () => {
    navigate("/sign-up");
  };
  return (
    <div className="bg-custom-gradient w-full h-screen overflow-hidden">
      <h1 onClick={HeaderHandler} className="md:ml-[80px] p-4 font-bold font-roman text-[28px] text-center text-white md:text-[50px] md:text-start cursor-pointer">
        TCU
      </h1>
      <Outlet/>
    </div>
  )
}

export default TermsPolicyLayout