import { Outlet, useNavigate } from "react-router-dom"
import {TiThMenu} from "react-icons/ti";
import { useApp } from "@/AppProvider";

const QuotePage = () => {
  const navigate = useNavigate();
  const {mobileMenuOpen, setMobileMenuOpen} = useApp();

  const handleMenuOpen = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex flex-col justify-center items-center font-poppins overflow-hidden">
      <div className="bg-black bg-opacity-15 border border-black border-opacity-25 rounded-[10px] w-10/12 h-[570px]">
        <div className="flex flex-col m-[16px]">
          <div className="flex md:justify-center items-center bg-black bg-opacity-25 rounded-[8px] w-full h-[50px]">
            <TiThMenu onClick={handleMenuOpen} className="md:hidden mx-3 w-[20px] h-[25px] font-bold text-white"/>
            <h1 className="font-medium text-[26px] text-white md:text-[32px] uppercase">leaderboard</h1>
          </div>

          <div className="flex md:gap-x-[20px] mt-[20px]">
            <div className="flex flex-col items-center bg-white bg-opacity-40 rounded-[10px] w-1/4 h-[600px]">

            {/* <div 
               className={`flex flex-col items-center bg-white bg-opacity-40 rounded-[10px] w-full md:w-1/4 h-[600px] ${
                mobileMenuOpen ?  "block" : "hidden md:flex w-1/4"
              }`}
            > */}
              <button 
                className="bg-gradient-to-t hover:bg-gradient-to-b from-blue-400 hover:from-blue-400 to-blue-600 hover:to-blue-600 drop-shadow-[0px_2px_1px_rgba(255,255,255,1)] shadow-lg mt-[26px] py-[13px] rounded-[8px] w-[180px] font-medium text-[16px] text-gray-800 hover:text-white"
                onClick={() => navigate("/user/quotes/leaderboard")}
              >
                Leaderboard
              </button>

              <button 
                className="bg-gradient-to-t hover:bg-gradient-to-b from-purple-400 hover:from-purple-400 to-purple-600 hover:to-purple-600 drop-shadow-[0px_2px_1px_rgba(255,255,255,1)] shadow-lg mt-[26px] py-[13px] rounded-[8px] w-[180px] font-medium text-[16px] text-gray-800 hover:text-white"
                onClick={() => navigate("/user/quotes/create-quote")}
              >
                Create Quotes
              </button>


            </div>

            <div className="bg-white bg-opacity-40 rounded-[10px] w-full h-[600px]">
              <Outlet/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default QuotePage


