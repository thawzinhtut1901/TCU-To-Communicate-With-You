import ActiveUserChart from "./dashboardComponents/ActiveUserChart";
import GenderPieChart from "./dashboardComponents/GenderPieChart";
import UsersCountSection from "./dashboardComponents/UsersCountSection";
import UsersPieChart from "./dashboardComponents/UsersPieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-slate-50 md:px-8 py-10 w-screen md:w-auto overflow-auto vertical-scrollbar">
      <h4 className="px-8 font-main font-semibold text-2xl">Dashboard</h4>
      <UsersCountSection />
      <div className="flex md:flex-row flex-col items-start md:items-center md:gap-x-1 w-screen md:w-auto">
        <div className="px-4 w-screen md:w-auto"> 
        <ActiveUserChart />
        </div>
        <div className="flex flex-col gap-4 my-6 md:my-0 w-screen md:w-auto">
        <GenderPieChart/>
        <UsersPieChart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
