import { Pie, PieChart, Cell } from "recharts";
import { useGetUserStatus } from "@/hooks";

const UsersPieChart = () => {
  const { data: getUserStatus } = useGetUserStatus();

  const total = (getUserStatus?.publicUser || 0) + (getUserStatus?.privateUser || 0);

  const users = [
    {
      name: "Public Users",
      value: getUserStatus?.publicUser || 0,
      percentage: total > 0 ? ((getUserStatus?.publicUser || 0) / total) * 100 : 0,
      color: "#6929C4",
    },
    {
      name: "Private Users",
      value: getUserStatus?.privateUser || 0,
      percentage: total > 0 ? ((getUserStatus?.privateUser || 0) / total) * 100 : 0,
      color: "#1192E8",
    },
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, index }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 0.5; 
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

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
        {`${users[index].percentage.toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col items-center bg-[#007AFF] bg-opacity-15 shadow-gray-400 shadow-lg mt-[24px] ml-auto rounded-[20px] w-[340px]">
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
