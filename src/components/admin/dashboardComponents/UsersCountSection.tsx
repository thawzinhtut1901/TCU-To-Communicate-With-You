import users from "../../../assets/dashboardUser.png";
import groups from "../../../assets/group.png";

const UsersCountSection = () => {
  return <div className="flex items-center gap-10 py-5">
    <div className="flex flex-col gap-3 items-start px-4 py-2 w-[230px] shadow-md rounded-xl bg-white">
        <div className="flex justify-between w-full gap-2">
            <p className="font-thin">Total Users</p>
            <img src={users} className="h-auto p-1 bg-purple-200 rounded w-7" alt="" />
        </div>
        <p className="text-2xl text-main">50,123</p>
        <p className="text-green-500 ">+3% than yesterday</p>
    </div>
    <div className="flex flex-col gap-3 items-start px-4 py-2 w-[230px] shadow-md rounded-xl bg-white">
        <div className="flex justify-between w-full gap-2">
            <p className="font-thin">Total Users</p>
            <img src={groups} className="h-auto p-1 bg-purple-200 rounded w-7" alt="" />
        </div>
        <p className="text-2xl text-main">50,123</p>
        <p className="text-green-500 ">+3% than yesterday</p>
    </div>
    <div className="flex flex-col gap-3 items-start px-4 py-2 w-[230px] shadow-md rounded-xl bg-white">
        <div className="flex justify-between w-full gap-2">
            <p className="font-thin">Total Users</p>
            <img src={users} className="h-auto p-1 bg-purple-200 rounded w-7" alt="" />
        </div>
        <p className="text-2xl text-main">50,123</p>
        <p className="text-green-500 ">+3% than yesterday</p>
    </div>
    <div className="flex flex-col gap-3 items-start px-4 py-2 w-[230px] shadow-md rounded-xl bg-white">
        <div className="flex justify-between w-full gap-2">
            <p className="font-thin">Total Users</p>
            <img src={groups} className="h-auto p-1 bg-purple-200 rounded w-7" alt="" />
        </div>
        <p className="text-2xl text-main">50,123</p>
        <p className="text-green-500 ">+3% than yesterday</p>
    </div>
  </div>;
};

export default UsersCountSection;
