import ActiveUserChart from "./dashboardComponents/ActiveUserChart";
import GenderPieChart from "./dashboardComponents/GenderPieChart";
import UsersCountSection from "./dashboardComponents/UsersCountSection";
import UsersPieChart from "./dashboardComponents/UsersPieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-screen py-10 overflow-auto md:w-auto md:px-10 bg-slate-50 vertical-scrollbar">
      <h4 className="text-2xl font-semibold font-main">Dashboard</h4>
      <UsersCountSection />
      <div className="flex flex-col items-start w-screen md:w-auto md:items-center md:gap-4 md:flex-row">
        <div className="w-screen px-4 overflow-x-scroll md:w-auto "> 

        <ActiveUserChart />
        </div>
        <div className="flex flex-col w-screen gap-4 my-6 md:w-auto md:my-0">
        <GenderPieChart/>
        <UsersPieChart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
