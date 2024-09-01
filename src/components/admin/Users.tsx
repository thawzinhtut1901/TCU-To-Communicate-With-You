import { Fliter } from "@/assets";
import { IoIosSearch } from "react-icons/io";
import "./type.css";
import { AiOutlineDown } from "react-icons/ai";
import { BiSolidCircle } from "react-icons/bi";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Users = () => {
  const [isChecked, setIsChecked] = useState<boolean[]>(Array(10).fill(false));

   const handleClick = (index:number) => {
    const updatedCheckedState = isChecked.map((item: boolean, idx: number) =>
      idx === index ? !item : item
    );
    setIsChecked(updatedCheckedState);
  };

  return (
    <div className="flex flex-col mx-auto w-11/12 overflow-auto scrollbar-hide">
      <h1 className="my-[20px] font-bold font-roboto text-[28px]">User Details</h1>

      <div className="flex">
        <div className="bg-white shadow-md mr-2 p-2 rounded-[10px]">
          <img src={Fliter} alt="" className="w-[18px] h-[18px]"/>
        </div>

        <div className="relative">
            <IoIosSearch
              className="top-[7px] right-2 absolute"
              size="20px"
              color="gray"
            />
            <input
              className="shadow-md px-4 py-1 rounded-[6px] w-[320px] h-[34px]"
              placeholder="Search..."
            />
          </div>
      </div>

      <div className="bg-white shadow-custom-grey-inner mt-[24px] rounded-[8px] cursor-pointer">
        <ul  className="gap-x-5 grid grid-cols-10 opacity-85 py-[15px] border-b border-b-slate-400 font-primary text-[16px] text-center uppercase">
          <li className="mx-auto"></li>
          <li>name</li>
          <li>username</li>
          <li>user status</li>
          <li>gender</li>
          <li>account type</li>
          <li>account status</li>
          <li>action</li>
          <li>email</li>
        </ul>

        <ul onClick={() => handleClick(0)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[0] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
                type="checkbox"
                checked={isChecked[0]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Active</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
          <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Good</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#4B9A52] rounded-[10px] w-full h-[40px] text-white">
            Confirm
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul>

        {/* <ul onClick={() => handleClick(1)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[1] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
                  type="checkbox"
                  checked={isChecked[1]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#6E0808] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#BE1010]"/>
            <span className="text-[#A83434]">Offline</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#A83434] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#E10101]"/>
            <span className="text-[#E10101]">Private</span>
          </li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#A83434] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#E10101]"/>
            <span className="text-[#E10101]">Poor</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#E10101] rounded-[10px] w-full h-[40px] text-white">
            Delete
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul>

        <ul onClick={() => handleClick(2)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[2] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[2]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Active</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#914F08] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#FC970A]"/>
            <span className="text-[#F98100]">Risk</span>
          </li>
          
          <li className="flex justify-center items-center gap-x-1 bg-[#FC970A] rounded-[10px] h-[40px] text-[12px] text-white">
            Suspended
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul>

        <ul onClick={() => handleClick(3)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[3] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[3]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Active</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
          <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Good</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#4B9A52] rounded-[10px] h-[40px] text-white">
            Confirm
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul>

        <ul onClick={() => handleClick(4)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[4] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[4]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Active</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
          <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Good</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#4B9A52] rounded-[10px] h-[40px] text-white">
            Confirm
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul>

        <ul onClick={() => handleClick(5)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[5] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[5]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Active</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
          <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Good</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#4B9A52] rounded-[10px] h-[40px] text-white">
            Confirm
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul>

        <ul onClick={() => handleClick(6)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[6] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[6]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Active</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
          <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Good</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#4B9A52] rounded-[10px] h-[40px] text-white">
            Confirm
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul>

        <ul onClick={() => handleClick(7)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[7] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[7]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Active</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
          <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Good</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#4B9A52] rounded-[10px] h-[40px] text-white">
            Confirm
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul>

        <ul onClick={() => handleClick(8)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[8] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[8]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Active</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
          <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Good</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#4B9A52] rounded-[10px] h-[40px] text-white">
            Confirm
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul>

        <ul onClick={() => handleClick(9)} className={`items-center gap-x-5 grid grid-cols-10 py-[15px] font-roboto text-[14px] text-center ${isChecked[9] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[9]}
            />
          </li>
          <li>Toli Moli</li>
          <li className="text-[#007AFF]">@Toli_Moli</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Active</span>
          </li>
          <li className="text-slate-600">Male</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
          <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Good</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#4B9A52] rounded-[10px] h-[40px] text-white">
            Confirm
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
          <li>totomomolili@gmail.com</li>
        </ul> */}

      </div>

      <div className="flex justify-center gap-x-2 my-[30px]">
        <div className="flex gap-x-3 mt-1 font-roboto text-[#9054DE]">
          <h1 className="font-bold text-[16px] uppercase">page</h1>
          <p className="flex gap-x-1 bg-[#9054DE] px-1 rounded-[4px] h-[20px] text-[14px] text-white">
            1 <AiOutlineDown className="mt-[5px] w-[12px] h-[12px]"/>
          </p>
          <h1 className="font-bold text-[16px] uppercase">of</h1>
          <p className="font-bold text-[16px]">10</p>
        </div>

        <div className="flex ml-[20px] text-[16px]">
          <h1 className="flex gap-x-1 mt-1 font-bold font-roboto text-[#9054DE] uppercase"><BsChevronDoubleLeft className="mt-1"/>First</h1>
          <Stack spacing={1}>
            <Pagination 
              count={10} 
              defaultPage={1}
              boundaryCount={1}
              variant="outlined" 
              shape="rounded" 
              sx={{
                '& .MuiPaginationItem-root': {
                  backgroundColor: '#9054DE',
                  color: 'white',
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  backgroundColor: '#6F1DCE',
                  color: 'black'
                },
                '& .MuiPaginationItem-previousNext': {
                  backgroundColor: 'transparent',
                  border: "none", // No background color for Next and Previous
                  color: '#9054DE', // Optionally apply text color
                  '&:hover': {
                    backgroundColor: '#f0f0f0', // Optional: Add hover effect if needed
                  },
                },
                '& .MuiPaginationItem-ellipsis': {
                  backgroundColor: 'transparent',
                  color: '#9054DE',  // Hide the ellipsis
                },
            }}
            />
          </Stack>
          <h1 className="flex gap-x-1 mt-1 font-bold font-roboto text-[#9054DE] uppercase">Last <BsChevronDoubleRight className="mt-1"/> </h1>
        </div>
      </div>
    </div>
  )
}

export default Users