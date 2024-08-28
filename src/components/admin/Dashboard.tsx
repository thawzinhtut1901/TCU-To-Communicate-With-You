import ActiveUserChart from "./dashboardComponents/ActiveUserChart";
import GenderPieChart from "./dashboardComponents/GenderPieChart";
import UsersCountSection from "./dashboardComponents/UsersCountSection";
import UsersPieChart from "./dashboardComponents/UsersPieChart";

const Dashboard = () => {
  return (
    <div className="flex flex-col px-10 py-4 bg-slate-50">
      <h4 className="text-2xl font-semibold font-main">Dashboard</h4>
      <UsersCountSection />
      <div className="flex items-center gap-4">
        <ActiveUserChart />
        <div className="flex flex-col w-full gap-2">
        <GenderPieChart/>
        <UsersPieChart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
