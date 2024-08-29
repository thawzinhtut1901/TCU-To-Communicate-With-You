import users from "../../../assets/dashboardUser.png";
import groups from "../../../assets/group.png";

const UsersCountSection = () => {
  return <div className="flex items-center gap-10 py-5">
    <div className="flex flex-col items-start gap-3 bg-white shadow-md px-4 py-2 rounded-xl w-[230px]">
        <div className="flex justify-between gap-2 w-full">
            <p className="font-thin">Total Users</p>
            <img src={users} className="bg-purple-200 p-1 rounded w-7 h-auto" alt="" />
        </div>
        <p className="text-2xl text-main">50,123</p>
        <p className="text-green-500">+3% than yesterday</p>
    </div>
    <div className="flex flex-col items-start gap-3 bg-white shadow-md px-4 py-2 rounded-xl w-[230px]">
        <div className="flex justify-between gap-2 w-full">
            <p className="font-thin">Total Users</p>
            <img src={groups} className="bg-purple-200 p-1 rounded w-7 h-auto" alt="" />
        </div>
        <p className="text-2xl text-main">50,123</p>
        <p className="text-green-500">+3% than yesterday</p>
    </div>
    <div className="flex flex-col items-start gap-3 bg-white shadow-md px-4 py-2 rounded-xl w-[230px]">
        <div className="flex justify-between gap-2 w-full">
            <p className="font-thin">Total Users</p>
            <img src={users} className="bg-purple-200 p-1 rounded w-7 h-auto" alt="" />
        </div>
        <p className="text-2xl text-main">50,123</p>
        <p className="text-green-500">+3% than yesterday</p>
    </div>
    <div className="flex flex-col items-start gap-3 bg-white shadow-md px-4 py-2 rounded-xl w-[230px]">
        <div className="flex justify-between gap-2 w-full">
            <p className="font-thin">Total Users</p>
            <img src={groups} className="bg-purple-200 p-1 rounded w-7 h-auto" alt="" />
        </div>
        <p className="text-2xl text-main">50,123</p>
        <p className="text-green-500">+3% than yesterday</p>
    </div>
  </div>;
};

export default UsersCountSection;
