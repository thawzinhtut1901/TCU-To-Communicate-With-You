// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";
// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { IoIosArrowDown } from "react-icons/io";

// const data = [
  // {
  //   name: "Jan",
  //   ActiveUsers: 4000,
  //   amt: 5000,
  // },
  // {
  //   name: "Feb",
  //   ActiveUsers: 3000,
  //   amt: 5000,
  // },
  // {
  //   name: "Mar",
  //   ActiveUsers: 2000,
  //   amt: 5000,
  // },
  // {
  //   name: "Apr",
  //   ActiveUsers: 2780,
  //   amt: 5000,
  // },
  // {
  //   name: "May",
  //   ActiveUsers: 1890,
  //   amt: 5000,
  // },
  // {
  //   name: "Jun",
  //   ActiveUsers: 2390,
  //   amt: 5000,
  // },
  // {
  //   name: "Jul",
  //   ActiveUsers: 3490,
  //   amt: 5000,
  // },
  // {
  //   name: "Aug",
  //   ActiveUsers: 4000,
  //   amt: 5000,
  // },
  // {
  //   name: "Sep",
  //   ActiveUsers: 3490,
  //   amt: 5000,
  // },
  // {
  //   name: "Oct",
  //   ActiveUsers: 4000,
  //   amt: 5000,
  // },
  // {
  //   name: "Nov",
  //   ActiveUsers: 3490,
  //   amt: 5000,
  // },
  // {
  //   name: "Dec",
  //   ActiveUsers: 4000,
  //   amt: 5000,
  // },
// ];
// const ActiveUserChart = () => {
//   const [position, setPosition] = React.useState("bottom");

//   const [chartWidth, setChartWidth] = useState(window.innerWidth < 768 ? 300 : 600); // Set width based on breakpoint

//   const handleResize = () => {
//     setChartWidth(window.innerWidth < 768 ? 300 : 600); // Adjust as needed
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div className="flex flex-col bg-white shadow-lg px-4 py-8 rounded w-[400px] md:w-[640px]">
//       <div className="flex justify-between items-center pb-5 md:pb-10 w-[300px] md:w-full">
//         <div className="flex items-center gap-2 px-10">
//           <p className="bg-main rounded-full w-2 h-2"></p>
//           <p className="text-sm">Active Users</p>
//         </div>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="dropdown" size="dropdown">
//               2024
//               <IoIosArrowDown />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="bg-white rounded w-8">
//             <DropdownMenuRadioGroup
//               className="text-main"
//               value={position}
//               onValueChange={setPosition}
//             >
//               <DropdownMenuRadioItem value="top">2024</DropdownMenuRadioItem>
//               <DropdownMenuRadioItem value="bottom">2023</DropdownMenuRadioItem>
//               <DropdownMenuRadioItem value="right">2022</DropdownMenuRadioItem>
//             </DropdownMenuRadioGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <LineChart
//       width={chartWidth}
//       height={350}
//       data={data}
//       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis dataKey="amt" />
//       <Tooltip />
//       <Line type="monotone" dataKey="ActiveUsers" stroke="#8884d8" />
//     </LineChart>
//     </div>
//   );
// };

// export default ActiveUserChart;


import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January",  ActiveUsers: 4000, amt: 5000 },
  { month: "February", ActiveUsers: 3000, amt: 5000 },
  { month: "March", ActiveUsers: 2000, amt: 5000 },
  { month: "April",  ActiveUsers: 2780, amt: 5000 },
  { month: "May",   ActiveUsers: 1890, amt: 5000 },
  { month: "June", ActiveUsers: 2390, amt: 5000 },
  { month: "July",     ActiveUsers: 3490, amt: 5000 },
  { month: "August", ActiveUsers: 4000, amt: 5000, },
  { month: "September",    ActiveUsers: 3490, amt: 5000 },
  { month: "October",   ActiveUsers: 4000, amt: 5000 },
  { month: "November", ActiveUsers: 3490, amt: 5000, },
  { month: "December", ActiveUsers: 4000, amt: 5000, },
]

const chartConfig = {
  ActiveUsers: {
    label: "Active Users",
    color: "hsl(var(--chart-1))",
  },
  amt: {
    label: "Amount",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const ActiveUserChart = () => {
  return (
    <div className="flex flex-col shadow-lg w-[400px] md:w-[640px]">
      <Card>
        <CardHeader>
          <CardTitle>Area Chart - Gradient</CardTitle>
          <CardDescription>
            Showing total visitors for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="amt"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="ActiveUsers"
                type="natural"
                fill="url(#fillDesktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex items-start gap-2 w-full text-sm">
            <div className="gap-2 grid">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground leading-none">
                January - June 2024
              </div>
            </div>
          </div>
        </CardFooter>
    </Card>
    </div>
  )
}

export default ActiveUserChart;