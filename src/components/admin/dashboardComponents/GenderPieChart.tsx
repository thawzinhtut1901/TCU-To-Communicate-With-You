// import { Pie, PieChart, Cell } from "recharts";
// import { useGetAllDashboardCount } from "@/hooks";

// const GenderPieChart = () => {
//   const { data: getUserGender } = useGetAllDashboardCount();

//   const gender = [
//     {
//       name: "Male",
//       value: getUserGender?.genderPercentages?.male,
//       color: "#6929C4",
//     },
//     {
//       name: "Female",
//       value: getUserGender?.genderPercentages?.female,
//       color: "#1192E8",
//     },
//     {
//       name: "Rather Not to Say",
//       value: getUserGender?.genderPercentages?.ratherNotSay,
//       color: "#005D5D",
//     },
//   ];

//   // Updated label rendering to remove percentage
//   const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }: any) => {
//     const RADIAN = Math.PI / 180;
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//       <text
//         x={x}
//         y={y}
//         fill="white"
//         textAnchor="middle"
//         dominantBaseline="central"
//         fontSize={12}
//         fontWeight="medium"
//       >
//         {gender[index].value}%
//       </text>
//     );
//   };

//   return (
//     <div className="flex flex-col items-center bg-[#007AFF] bg-opacity-15 shadow-gray-400 shadow-lg rounded-[20px] w-[280px] md:w-[340px]">
//       <div className="flex gap-2">
//         {gender.map((data, index) => (
//           <div key={index} className="flex items-center gap-2 py-2">
//             <p
//               className="rounded-full w-2 h-2"
//               style={{ backgroundColor: data.color }}
//             ></p>
//             <p className="text-[#393939] text-[14px]">{data.name}</p>
//           </div>
//         ))}
//       </div>
//       <PieChart width={250} height={250}>
//         <Pie
//           data={gender}
//           dataKey="value"
//           nameKey="name"
//           cx="50%"
//           cy="50%"
//           outerRadius={100}
//           innerRadius={60}
//           labelLine={false}
//           label={renderCustomLabel}
//         >
//           {gender.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// };

// export default GenderPieChart;

import { Label, Pie, PieChart } from "recharts";
import { useGetAllDashboardCount } from "@/hooks";

import {
  PieCard,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
  Male: { label: "Male", color: "#0000FF" },
  Female: { label: "Female", color: "#FF69B4" },
  RatherNotSay: { label: "Rather Not To Say", color: "#808080" },
};

const GenderPieChart = () => {
  const { data: getUserGender } = useGetAllDashboardCount();

  const male = getUserGender?.genderPercentages?.male;
  const female = getUserGender?.genderPercentages?.female;
  const other = getUserGender?.genderPercentages?.ratherNotSay;

  const chartData = [
    { id:1, Gender: "Male", visitors: male, fill: "#0000FF" },
    { id:2, Gender: "Female", visitors: female, fill: "#FF69B4" },
    { id:3, Gender: "Rather Not To Say", visitors: other, fill: "#808080" },
  ];

  return (
    <div>
      <PieCard className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <div className="flex gap-x-4">
            {
              chartData?.map((chart:any) => (
                <CardDescription key={chart?.id} className="flex gap-x-1">
                <span className="mt-[6px] rounded-full w-2 h-2" style={{ backgroundColor: chart?.fill}}></span>
                <span className="text-gray-700 text-sm">{chart?.Gender}</span>
              </CardDescription>
              ))
            }

          </div>
          
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto max-h-[250px] aspect-square"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="Gender"
                innerRadius={45}
                outerRadius={80}
                fill="#8884d8"
                label={({ cx, cy, midAngle, innerRadius, outerRadius, visitors }) => {
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={12}
                    >
                      {visitors}%
                    </text>
                  );
                }}
                labelLine={false}
              >
                <Label
                  value= "Gender"
                  position="center"
                  className="font-bold text-[15px] fill-black"
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
      </PieCard>
    </div>
  );
};

export default GenderPieChart;
