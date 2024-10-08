import { useGetNewGroupsCount, useGetNewUsersCount, useGetTotalGroupsCount, useGetTotalUsersCount } from "@/hooks";
import users from "../../../assets/dashboardUser.png";
import groups from "../../../assets/group.png";

const UsersCountSection = () => {
    const {data: getTotalUsers} = useGetTotalUsersCount();
    const {data: getTotalGroups} = useGetTotalGroupsCount();
    const {data: getNewUsers} = useGetNewUsersCount();
    const {data: getNewGroups} = useGetNewGroupsCount();
    console.log(getNewGroups)

    const totalUsersCount = getTotalUsers?.data?.count || 0;
    const totalGroupsCount = getTotalGroups?.data?.count || 0;
    const newUsersCount = getNewUsers?.data?.count || 0;
    const newGroupsCount = getNewGroups?.data?.count || 0;

  return <div className="flex items-center gap-10 py-5">
    <div className="flex flex-col items-start gap-3 bg-white shadow-gray-400 shadow-md px-4 py-2 rounded-xl w-[230px] h-[125px]">
        <div className="flex justify-between gap-2 w-full">
            <p className="font-poppins text-[16px] text-black text-opacity-70">Total Users</p>
            <img src={users} className="bg-purple-200 p-1 rounded w-7 h-auto" alt="" />
        </div>
        <p className="font-roboto text-2xl text-main">{totalUsersCount}</p>
        <p className="font-semibold text-[16px] text-green-500">+3% than yesterday</p>
    </div>

    <div className="flex flex-col items-start gap-3 bg-white shadow-gray-400 shadow-md px-4 py-2 rounded-xl w-[230px] h-[125px]">
        <div className="flex justify-between gap-2 w-full">
            <p className="font-poppins text-[16px] text-black text-opacity-70">Total Groups</p>
            <img src={groups} className="bg-purple-200 p-1 rounded w-7 h-auto" alt="" />
        </div>
        <p className="font-roboto text-2xl text-main">{totalGroupsCount}</p>
        <p className="font-semibold text-[16px] text-green-500">+3% than yesterday</p>
    </div>

    <div className="flex flex-col items-start gap-3 bg-white shadow-gray-400 shadow-md px-4 py-2 rounded-xl w-[230px] h-[125px]">
        <div className="flex justify-between gap-2 w-full">
            <p className="font-poppins text-[16px] text-black text-opacity-70">New Users</p>
            <img src={users} className="bg-purple-200 p-1 rounded w-7 h-auto" alt="" />
        </div>
        <p className="font-roboto text-2xl text-main">{newUsersCount}</p>
        <p className="font-semibold text-[16px] text-green-500">+3% than yesterday</p>
    </div>

    <div className="flex flex-col items-start gap-3 bg-white shadow-gray-400 shadow-md px-4 py-2 rounded-xl w-[230px] h-[125px]">
        <div className="flex justify-between gap-2 w-full">
            <p className="font-poppins text-[16px] text-black text-opacity-70">New Groups</p>
            <img src={groups} className="bg-purple-200 p-1 rounded w-7 h-auto" alt="" />
        </div>
        <p className="font-roboto text-2xl text-main">{newGroupsCount}</p>
        <p className="font-semibold text-[16px] text-green-500">+3% than yesterday</p>
    </div>
  </div>;
};

export default UsersCountSection;