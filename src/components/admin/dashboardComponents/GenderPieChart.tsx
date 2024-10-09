import { Pie, PieChart, Cell } from "recharts";
import { useGetUserGender } from "@/hooks";

const GenderPieChart = () => {
  const { data: getUserGender } = useGetUserGender();

  const total = getUserGender?.male + getUserGender?.female + getUserGender?.ratherNotSay;

  const gender = [
    {
      name: "Male",
      value: getUserGender?.male || 0,
      percentage: ((getUserGender?.male || 0) / total) * 100, 
      color: "#6929C4",
    },
    {
      name: "Female",
      value: getUserGender?.female || 0,
      percentage: ((getUserGender?.female || 0) / total) * 100, 
      color: "#1192E8",
    },
    {
      name: "Rather Not to Say",
      value: getUserGender?.ratherNotSay || 0,
      percentage: ((getUserGender?.ratherNotSay || 0) / total) * 100, 
      color: "#005D5D",
    },
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  
    const percentage = gender[index].percentage;
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
    <div className="flex flex-col items-center bg-[#007AFF] bg-opacity-15 shadow-gray-400 shadow-lg ml-auto rounded-[20px] w-[340px]">
      <div className="flex gap-2">
        {gender.map((data, index) => (
          <div key={index} className="flex items-center gap-2 py-2">
            <p
              className="rounded-full w-2 h-2"
              style={{ backgroundColor: data.color }}
            ></p>
            <p className="text-[#393939] text-[14px]">{data.name}</p>
          </div>
        ))}
      </div>
      <PieChart width={250} height={250}>
        <Pie
          data={gender}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={50}
          labelLine={false}
          label={renderCustomLabel} 
        >
          {gender.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default GenderPieChart;
