import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

const data = [
  {
    name: "Jan",
    ActiveUsers: 4000,
    amt: 5000,
  },
  {
    name: "Feb",
    ActiveUsers: 3000,
    amt: 5000,
  },
  {
    name: "Mar",
    ActiveUsers: 2000,
    amt: 5000,
  },
  {
    name: "Apr",
    ActiveUsers: 2780,
    amt: 5000,
  },
  {
    name: "May",
    ActiveUsers: 1890,
    amt: 5000,
  },
  {
    name: "Jun",
    ActiveUsers: 2390,
    amt: 5000,
  },
  {
    name: "Jul",
    ActiveUsers: 3490,
    amt: 5000,
  },
  {
    name: "Aug",
    ActiveUsers: 4000,
    amt: 5000,
  },
  {
    name: "Sep",
    ActiveUsers: 3490,
    amt: 5000,
  },
  {
    name: "Oct",
    ActiveUsers: 4000,
    amt: 5000,
  },
  {
    name: "Nov",
    ActiveUsers: 3490,
    amt: 5000,
  },
  {
    name: "Dec",
    ActiveUsers: 4000,
    amt: 5000,
  },
];
const ActiveUserChart = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <div className="w-[640px] px-4 py-8 flex flex-col rounded shadow-lg bg-white">
      <div className="flex items-center justify-between pb-10">
        <div className="flex items-center gap-2 px-10">
          <p className="w-2 h-2 rounded-full bg-main"></p>
          <p className="text-sm">Active Users</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="dropdown" size="dropdown">
              2024
              <IoIosArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-8 bg-white rounded">
            <DropdownMenuRadioGroup
              className="text-main"
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="top">2024</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">2023</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">2022</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <LineChart
        width={600}
        height={350}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="amt" />
        <Tooltip />
        <Line type="monotone" dataKey="ActiveUsers" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ActiveUserChart;
