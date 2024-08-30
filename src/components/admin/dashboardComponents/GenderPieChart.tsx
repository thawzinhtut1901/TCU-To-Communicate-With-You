import { Pie, PieChart, Cell } from "recharts";

const gender = [
  {
    name: "Male",
    value: 43,
    color: "#6929C4",
  },
  {
    name: "Female",
    value: 34,
    color: "#1192E8",
  },
  {
    name: "Other",
    value: 23,
    color: "#005D5D",
  },
];

const GenderPieChart = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg w-[390px]">
      <div className="flex gap-2">
        {gender.map((data, index) => (
          <div key={index} className="flex items-center gap-2 py-2">
            <p
              className="rounded-full w-2 h-2"
              style={{ backgroundColor: data.color }}
            ></p>
            <p className="text-sm">{data.name}</p>
          </div>
        ))}
      </div>
      <PieChart width={200} height={200}>
        <Pie
          data={gender}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={70}
          innerRadius={50}
          label
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
