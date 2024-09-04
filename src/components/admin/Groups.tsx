import { Fliter } from "@/assets";
import { useFetchUsersGroups } from "@/hooks/useAdmin";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BiSolidCircle } from "react-icons/bi";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";

const Groups = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState<number>(
    parseInt(searchParams.get("page")|| "1", 10)
  );
  const [limit] = useState<number>(10);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const {data: getGroups} = useFetchUsersGroups({
    limit,
    pageCount
  });

  console.log(getGroups)
  
  useEffect(() => {
    const params: any = {};
    if(limit) {
      params.limit = limit.toString();
    };
    if(pageCount) {
      params.page = pageCount.toString()
    }
    setSearchParams(params);
  }, [limit, pageCount]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setPageCount(value);
  };

  const handleRowClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const handleFirstPage = () => {
    setPageCount(1);
  };

  const handleLastPage = () => {
    setPageCount(getGroups?.meta.totalPages || 1);
  };

  // const [isChecked, setIsChecked] = useState<boolean[]>(Array(10).fill(false));
//   const handleClick = (index:number) => {
//    const updatedCheckedState = isChecked.map((item: boolean, idx: number) =>
//      idx === index ? !item : item
//    );
//    setIsChecked(updatedCheckedState);
//  };

  return (
    <div className="overflow-auto vertical-scrollbar">
      <div className="flex flex-col mx-[40px]">
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

          {
            getGroups?.items?.map((group:any) => (
              <ul onClick={() => handleRowClick(group?.id)} key={group?.id} id={group?.id} className={`items-center gap-x-5 grid grid-cols-8 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${selectedId === group?.id ? 'bg-blue-300' : ''}`}> 
                <li className="mx-auto">
                  <input
                      type="checkbox"
                      checked= {selectedId === group?.id}
                  />
                </li>
                <li className="text-slate-500">{group?.groupName}</li>
                <li className="text-[#34A853]">{group?.user?.userName}</li>
                <li className="text-slate-500">46643</li>
                <li className="flex justify-center gap-x-1">
                  <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
                  <span className="text-[#34A853]">{group?.status}</span>
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
            ))
          }
        </div>

        <div className="flex justify-center gap-x-2 my-[30px]">
          {/* <div className="flex gap-x-3 mt-1 font-roboto text-[#9054DE]">
            <h1 className="font-bold text-[16px] uppercase">page</h1>
            <p className="flex gap-x-1 bg-[#9054DE] px-1 rounded-[4px] h-[20px] text-[14px] text-white">
              1 <AiOutlineDown className="mt-[5px] w-[12px] h-[12px]"/>
            </p>
            <h1 className="font-bold text-[16px] uppercase">of</h1>
            <p className="font-bold text-[16px]">10</p>
          </div> */}

          {
            getGroups?.items.length !== 0 && (
              <div className="flex ml-[20px] text-[16px]">
                <Button onClick={handleFirstPage} className="flex font-bold font-roboto text-[#9054DE] uppercase"><BsChevronDoubleLeft/>First</Button>
                <Stack spacing={1}>
                  <Pagination 
                    count={getGroups?.meta.totalPages} 
                    page = {pageCount}
                    onChange={handlePageChange}
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
                <Button onClick={handleLastPage} className="flex font-bold font-roboto text-[#9054DE] uppercase">Last <BsChevronDoubleRight/> </Button>
              </div>
            )
          }
        </div>
      </div>
  
    </div>
  )
}

export default Groups