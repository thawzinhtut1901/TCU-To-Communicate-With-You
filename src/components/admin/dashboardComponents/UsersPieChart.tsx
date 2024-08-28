import { Pie, PieChart, Cell } from "recharts";

const users = [
    {
      name: "Public Users",
      value: 55,
      color: "#6929C4",
    },
    {
      name: "Private Users",
      value: 45,
      color: "#1192E8",
    },
  ];

const UsersPieChart = () => {
  return (
     <div className="flex flex-col items-center bg-white w-[390px] shadow-lg">
      <div className="flex gap-2">
        {users.map((data, index) => (
          <div key={index} className="flex items-center gap-2 py-2">
            <p
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: data.color }}
            ></p>
            <p className="text-sm">{data.name}</p>
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
          label
        >
          {users.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}

export default UsersPieChart