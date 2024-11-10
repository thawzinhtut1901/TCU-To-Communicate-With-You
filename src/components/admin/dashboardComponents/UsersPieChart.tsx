/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pie, PieChart, Cell } from "recharts";
import { useGetAllDashboardCount } from "@/hooks";

const UsersPieChart = () => {
  const { data: getUserStatus } = useGetAllDashboardCount();

  const total = (getUserStatus?.userStatusCount?.publicUser) + (getUserStatus?.userStatusCount?.privateUser);

  const users = [
    {
      name: "Public Users",
      value: getUserStatus?.userStatusCount?.publicUser,
      percentage: total > 0 ? Math.round((getUserStatus?.userStatusCount?.publicUser / total) * 100) : 0,
      color: "#6929C4",
    },
    {
      name: "Private Users",
      value: getUserStatus?.userStatusCount?.privateUser,
      percentage: total > 0 ? Math.round((getUserStatus?.userStatusCount?.privateUser / total) * 100) : 0,
      color: "#1192E8",
    },
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, index }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 0.5; 
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const percentage = users[index].percentage;
    const formattedPercentage =
      percentage % 1 === 0 ? percentage.toFixed(0) : percentage.toFixed(1); 

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight="medium"
      >
        {`${formattedPercentage}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col items-center bg-[#007AFF] bg-opacity-15 shadow-gray-400 shadow-lg rounded-[20px] w-[280px] md:w-[340px]">
      <div className="flex gap-2">
        {users.map((data, index) => (
          <div key={index} className="flex items-center gap-2 py-2">
            <p
              className="rounded-full w-2 h-2"
              style={{ backgroundColor: data.color }}
            ></p>
            <p className="text-[#393939] text-[14px]">{data.name}</p>
          </div>
        ))}
      </div>
      <PieChart width={200} height={200}>
        <Pie
          data={users}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={60}
          label={renderCustomLabel} 
          labelLine={false}         
        >
          {users.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default UsersPieChart;
