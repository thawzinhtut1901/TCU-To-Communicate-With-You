import { useGetAllDashboardCount } from "@/hooks";
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
    <div className="flex flex-col gap-3 bg-white shadow-gray-400 shadow-md p-4 rounded-xl w-full max-w-[200px] h-auto">
      <div className="flex justify-between items-center">
        <p className="font-poppins text-[16px] text-black text-opacity-70">
          {title}
        </p>
        <img
          src={imageSrc}
          className="bg-purple-200 p-1 rounded w-7 h-auto"
          alt={title}
        />
      </div>
      <p className="font-roboto text-[28px] text-main">{count}</p>
    </div>
  );
  
  const UsersCountSection = () => {
    const {data: getAllCount} = useGetAllDashboardCount()
  
    const totalUsersCount = getAllCount?.totalUserCount;
    const totalGroupsCount = getAllCount?.totalGroupCount;
    const newUsersCount = getAllCount?.newUserCount;
    const newGroupsCount = getAllCount?.newGroupCount;
  
    return (
        <div className="flex-grow p-4">
        <div className="gap-6 md:gap-3 grid grid-cols-1 md:grid-cols-4 px-4 py-5">
          <StatCard title="Total Users" count={totalUsersCount} imageSrc={users} />
          <StatCard title="Total Groups" count={totalGroupsCount} imageSrc={groups} />
          <StatCard title="New Users" count={newUsersCount} imageSrc={users} />
          <StatCard title="New Groups" count={newGroupsCount} imageSrc={groups} />
        </div>
      </div>
    );
  };
  
  export default UsersCountSection;
  