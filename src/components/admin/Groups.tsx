import { Fliter } from "@/assets";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BiSolidCircle } from "react-icons/bi";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const Groups = () => {
  const [isChecked, setIsChecked] = useState<boolean[]>(Array(10).fill(false));

  const handleClick = (index:number) => {
   const updatedCheckedState = isChecked.map((item: boolean, idx: number) =>
     idx === index ? !item : item
   );
   setIsChecked(updatedCheckedState);
 };

  return (
    <div className="flex flex-col mx-auto w-11/12 overflow-auto scrollbar-hide">
      <h1 className="my-[20px] font-bold font-roboto text-[28px]">Groups Details</h1>

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
        <ul  className="gap-x-5 grid grid-cols-8 opacity-85 py-[15px] border-b border-b-slate-400 font-primary text-[16px] text-center uppercase">
          <li className="mx-auto"></li>
          <li>group name</li>
          <li>group owner</li>
          <li>total members</li>
          <li>group type</li>
          <li>group status</li>
          <li>action</li>
        </ul>

        <ul onClick={() => handleClick(0)} className={`items-center gap-x-5 grid grid-cols-8 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[0] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
                type="checkbox"
                checked={isChecked[0]}
            />
          </li>
          <li className="text-slate-500">Pok Lok Pel Sar</li>
          <li className="text-[#34A853]">@toli_moli</li>
          <li className="text-slate-500">46643</li>
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
        </ul>

        <ul onClick={() => handleClick(1)} className={`items-center gap-x-5 grid grid-cols-8 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[1] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
                  type="checkbox"
                  checked={isChecked[1]}
            />
          </li>
          <li className="text-slate-500">Toli Moli</li>
          <li className="text-[#34A853]">@toli_moli</li>
          <li className="text-slate-500">46643</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#A83434] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#E10101]"/>
            <span className="text-[#E10101]">Private</span>
          </li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#A83434] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#E10101]"/>
            <span className="text-[#E10101]">Poor</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#E10101] rounded-[10px] h-[40px] text-white">
            Delete
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
        </ul>

        <ul onClick={() => handleClick(2)} className={`items-center gap-x-5 grid grid-cols-8 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[2] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[2]}
            />
          </li>
          <li className="text-slate-500">Toli Moli</li>
          <li className="text-[#34A853]">@toli_moli</li>
          <li className="text-slate-500">46643</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#914F08] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#FC970A]"/>
            <span className="text-[#F98100]">Risk</span>
          </li>
          
          <li className="flex justify-center items-center gap-x-1 bg-[#FC970A] rounded-[10px] h-[40px] text-white">
            Suspended
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
        </ul>

        <ul onClick={() => handleClick(3)} className={`items-center gap-x-5 grid grid-cols-8 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[3] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
                type="checkbox"
                checked={isChecked[3]}
            />
          </li>
          <li className="text-slate-500">Pok Lok Pel Sar</li>
          <li className="text-[#34A853]">@toli_moli</li>
          <li className="text-slate-500">46643</li>
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
        </ul>
        
        <ul onClick={() => handleClick(4)} className={`items-center gap-x-5 grid grid-cols-8 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[4] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
                type="checkbox"
                checked={isChecked[4]}
            />
          </li>
          <li className="text-slate-500">Pok Lok Pel Sar</li>
          <li className="text-[#34A853]">@toli_moli</li>
          <li className="text-slate-500">46643</li>
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
        </ul>

        <ul onClick={() => handleClick(5)} className={`items-center gap-x-5 grid grid-cols-8 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[5] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
                  type="checkbox"
                  checked={isChecked[5]}
            />
          </li>
          <li className="text-slate-500">Toli Moli</li>
          <li className="text-[#34A853]">@toli_moli</li>
          <li className="text-slate-500">46643</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#A83434] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#E10101]"/>
            <span className="text-[#E10101]">Private</span>
          </li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#A83434] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#E10101]"/>
            <span className="text-[#E10101]">Poor</span>
          </li>
          <li className="flex justify-center items-center gap-x-1 bg-[#E10101] rounded-[10px] h-[40px] text-white">
            Delete
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
        </ul>

        <ul onClick={() => handleClick(6)} className={`items-center gap-x-5 grid grid-cols-8 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${isChecked[6] ? "bg-blue-200" : ""}`}> 
          <li className="mx-auto">
            <input
              type="checkbox"
              checked={isChecked[6]}
            />
          </li>
          <li className="text-slate-500">Toli Moli</li>
          <li className="text-[#34A853]">@toli_moli</li>
          <li className="text-slate-500">46643</li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
            <span className="text-[#34A853]">Public</span>
          </li>
          <li className="flex justify-center gap-x-1">
            <BiSolidCircle className="border-[#914F08] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#FC970A]"/>
            <span className="text-[#F98100]">Risk</span>
          </li>
          
          <li className="flex justify-center items-center gap-x-1 bg-[#FC970A] rounded-[10px] h-[40px] text-white">
            Suspended
            <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
          </li>
        </ul>

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
                  border: "none", 
                  color: '#9054DE',
                  '&:hover': {
                    backgroundColor: '#f0f0f0', 
                  },
                },
                '& .MuiPaginationItem-ellipsis': {
                  backgroundColor: 'transparent',
                  color: '#9054DE',  
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

export default Groups