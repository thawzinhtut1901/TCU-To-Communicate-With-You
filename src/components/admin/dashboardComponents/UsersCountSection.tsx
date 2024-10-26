import {
    useGetNewGroupsCount,
    useGetNewUsersCount,
    useGetTotalGroupsCount,
    useGetTotalUsersCount,
  } from "@/hooks";
  
  import users from "../../../assets/dashboardUser.png";
  import groups from "../../../assets/group.png";
  
  const StatCard = ({
    title,
    count,
    imageSrc,
  }: {
    title: string;
    count: number;
    imageSrc: string;
  }) => (
    <div className="flex flex-col items-start gap-3 bg-white shadow-md shadow-gray-400 
                    p-4 rounded-xl w-full max-w-[200px] h-auto">
      <div className="flex items-center justify-between">
        <p className="font-poppins text-[16px] text-black text-opacity-70">
          {title}
        </p>
        <img
          src={imageSrc}
          className="h-auto p-1 bg-purple-200 rounded w-7"
          alt={title}
        />
      </div>
      <p className="text-2xl font-roboto text-main">{count}</p>
      <p className="font-semibold text-[16px] text-green-500">
        +3% than yesterday
      </p>
    </div>
  );
  
  const UsersCountSection = () => {
    const { data: getTotalUsers } = useGetTotalUsersCount();
    const { data: getTotalGroups } = useGetTotalGroupsCount();
    const { data: getNewUsers } = useGetNewUsersCount();
    const { data: getNewGroups } = useGetNewGroupsCount();
  
    const totalUsersCount = getTotalUsers?.data?.count || 0;
    const totalGroupsCount = getTotalGroups?.data?.count || 0;
    const newUsersCount = getNewUsers?.data?.count || 0;
    const newGroupsCount = getNewGroups?.data?.count || 0;
  
    return (
        <div className="flex-grow p-4">
        <div className="grid grid-cols-1 gap-6 px-4 py-5 md:gap-3 md:grid-cols-4">
          <StatCard title="Total Users" count={totalUsersCount} imageSrc={users} />
          <StatCard title="Total Groups" count={totalGroupsCount} imageSrc={groups} />
          <StatCard title="New Users" count={newUsersCount} imageSrc={users} />
          <StatCard title="New Groups" count={newGroupsCount} imageSrc={groups} />
        </div>
      </div>
    );
  };
  
  export default UsersCountSection;
  