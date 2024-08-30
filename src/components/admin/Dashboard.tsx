import ActiveUserChart from "./dashboardComponents/ActiveUserChart";
import GenderPieChart from "./dashboardComponents/GenderPieChart";
import UsersCountSection from "./dashboardComponents/UsersCountSection";
import UsersPieChart from "./dashboardComponents/UsersPieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-slate-50 px-10 py-4 overflow-auto scrollbar-hide">
      <h4 className="font-main font-semibold text-2xl">Dashboard</h4>
      <UsersCountSection />
      <div className="flex items-center gap-4">
        <ActiveUserChart />
        <div className="flex flex-col gap-2 w-full">
        <GenderPieChart/>
        <UsersPieChart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
