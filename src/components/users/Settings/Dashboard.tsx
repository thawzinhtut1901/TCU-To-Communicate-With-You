import { MdOutlineNightlight } from "react-icons/md";
import DarkModeSwitch from "@/components/admin/dashboardComponents/DarkModeSwitch";
import { ActiveStatus } from "@/assets";
import ActiveSwitch from "@/components/admin/dashboardComponents/ActiveSwitch";

const Dashboard = () => {    
  return (
    <div className="flex justify-center items-center mx-auto font-roboto">
        <div className="flex flex-col border-slate-500 shadow-inner shadow-slate-700 border w-[400px] h-[700px]">
            <div className="bg-white mx-auto mt-[20px] p-3 rounded-[12px] w-[200px]">
              <h1 className="text-[#591DA9] text-[14px] text-center">DashBoard Setting</h1> 
            </div>

            {/* Dark Mode */}
            <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
                <div className="flex items-center font-medium text-[14px]">
                    <MdOutlineNightlight className="border-[#591DA9] mx-[17px] border rounded-full w-[20px] h-[20px] text-[#591DA9]"/>
                    Dark Mode
                </div>

                <div className="flex items-center mr-3">
                    <DarkModeSwitch/>
                </div>
            </div>

            {/* Active Status */}
            <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
                <div className="flex items-center font-medium text-[14px]">
                    <img src={ActiveStatus} alt="" className="mx-[17px] w-[20px] h-[20px]"/>
                    Active Status
                </div>

                <div className="flex items-center mr-3">
                    <ActiveSwitch/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard