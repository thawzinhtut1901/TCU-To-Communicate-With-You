import { Fliter } from "@/assets";
import { IoIosSearch } from "react-icons/io";
import "./type.css";
import { AiOutlineDown } from "react-icons/ai";
import { BiSolidCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useFetchUsersAccountDetails } from "@/hooks";
import { useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


// const Users = () => {
//   const [searchParams, setSearchParams] = useSearchParams({
//     search: "",
//     sortBy: "Latest",
//   });
//   const [pageCount, setPageCount] = useState<number>(
//     parseInt(searchParams.get("page") || "1", 10)
//   );
//   const [search, setSearch] = useState(searchParams.get("search") || "");
//   const [limit] = useState<number>(10);
//   const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "Latest");
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const {data: getAccounts} = useFetchUsersAccountDetails({
//     search,
//     pageCount, 
//     limit,
//     sortBy,
//   });

//   useEffect(() => {
//     const params: any = {};
//     if(search) {
//       params.search = search;
//     }
//     if(sortBy) {
//       params.sortBy = sortBy;
//     }
//     if(limit) {
//       params.limit = limit.toString();
//     }
//     if(pageCount) {
//       params.page = pageCount.toString();
//     }
//     setSearchParams(params)
//   }, [search, sortBy, pageCount, limit]);

//   const handlePageChange = (
//     event: React.ChangeEvent<unknown>,
//     value: number
//   ) => {
//     event.preventDefault();
//     setPageCount(value);
//   };

//   const handleRowClick = (id: number) => {
//     setSelectedId(selectedId === id ? null : id);
//   };

//   const handleFirstPage = () => {
//     setPageCount(1);
//   };

//   const handleLastPage = () => {
//     setPageCount(getAccounts?.meta.totalPages || 1);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//   };

//   const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setPageCount(1); // Reset to the first page whenever a new search is made
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleSortChange = (sortOption : string) => {
//     setSortBy(sortOption);
//     setIsDropdownOpen(false)
//   }

//   return(
//     <div className="overflow-auto vertical-scrollbar">
//       <div className="flex flex-col mx-[40px]">
//         <h1 className="my-[20px] font-bold font-roboto text-[28px]">User Details</h1>
        
//         <div className="flex">
//           <div className="relative bg-white shadow-md mr-2 p-2 rounded-[10px]">
//             <img onClick={toggleDropdown} src={Fliter} alt="" className="w-[18px] h-[18px]"/>

//             {
//               isDropdownOpen && (
//                 <div className="top-full left-0 z-10 absolute bg-white shadow-lg mt-2 py-2 rounded-md w-48">
//                   <button onClick={() => handleSortChange("A-Z")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
//                     A-Z
//                   </button>
//                   <button onClick={() => handleSortChange("Z-A")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
//                     Z-A
//                   </button>
//                   <button onClick={() => handleSortChange("Latest")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
//                     Latest
//                   </button>
//                   <button onClick={() => handleSortChange("Oldest")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
//                     Oldest
//                   </button>
//                 </div>
//               )
//             }
//           </div>

//           <form onSubmit={handleSearchSubmit} className="relative">
//               <IoIosSearch
//                 className="top-[7px] right-2 absolute"
//                 size="20px"
//                 color="gray"
//               />
//               <input
//                 className="shadow-md px-4 py-1 rounded-[6px] w-[320px] h-[34px]"
//                 placeholder="Search..."
//                 value={search}
//                 onChange={handleSearchChange}
//               />
//           </form>
//         </div>

//         <div className="bg-white shadow-custom-grey-inner mt-[24px] rounded-[8px] w-full cursor-pointer overflow-x-auto horizontal-scrollbar">
//           <ul className="gap-x-5 grid grid-cols-10 opacity-85 py-[15px] border-b border-b-slate-400 font-primary text-[16px] text-center uppercase">
//             <li className="mx-auto"></li>
//             <li>name</li>
//             <li>username</li>
//             <li>user status</li>
//             <li>gender</li>
//             <li>account type</li>
//             <li>account status</li>
//             <li>action</li>
//             <li>email</li>
//           </ul>

//           {
//             getAccounts?.items?.map((user:any) => (
//               <ul onClick={() => handleRowClick(user?.id)} key={user?.id} id={user?.id} className={`items-center gap-x-8 grid grid-cols-10 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center ${selectedId === user?.id ? 'bg-blue-300' : ''}`}> 
//               <li className="mx-auto">
//                 <input
//                     type="checkbox"
//                     checked= {selectedId === user?.id}
//                 />
//               </li>
//               <li>{user?.displayName}</li>
//               <li className="flex justify-center text-[#007AFF]">{user?.userName}</li>
//               <li className="flex justify-center gap-x-1">
//                 <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
//                 <span className="text-[rgb(52,168,83)]">Online</span>
//               </li>
//               <li className="text-slate-600">{user?.gender}</li>
//               <li className="flex justify-center gap-x-1">
//                 <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
//                 <span className="text-[#34A853]">{user?.status?.showMe}</span>
//               </li>
//               <li className="flex justify-center gap-x-1">
//               <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
//                 <span className="text-[#34A853]">Public</span>
//               </li>
//               <li className="flex justify-center items-center gap-x-1 bg-[#4B9A52] rounded-[10px] w-full h-[40px] text-white">
//                 Confirm
//                 <AiOutlineDown className="border-slate-50 border rounded-[3px] w-[11px] h-[11px]"/>
//               </li>
//               <li className="text-slate-600">{user?.email}</li>
//             </ul>
//             ))
//           }
//         </div>
//         <div className="flex justify-center gap-x-2 my-[30px]">
//           <div className="flex ml-[20px] text-[16px]">
//             <Button onClick={handleFirstPage} className="flex font-bold font-roboto text-[#9054DE] uppercase"><BsChevronDoubleLeft/>First</Button>
//             <Stack spacing={1}>
//               <Pagination 
//                 count={getAccounts?.meta?.totalPages} 
//                 page = {pageCount}
//                 onChange={handlePageChange}
//                 defaultPage={1}
//                 boundaryCount={1}
//                 variant="outlined" 
//                 shape="rounded" 
//                 sx={{
//                   '& .MuiPaginationItem-root': {
//                     backgroundColor: '#9054DE',
//                     color: 'white',
//                   },
//                   '& .MuiPaginationItem-root.Mui-selected': {
//                     backgroundColor: '#6F1DCE',
//                     color: 'silver'
//                   },
//                   '& .MuiPaginationItem-previousNext': {
//                     backgroundColor: 'transparent',
//                     border: "none", // No background color for Next and Previous
//                     color: '#9054DE', // Optionally apply text color
//                     '&:hover': {
//                       backgroundColor: '#f0f0f0', // Optional: Add hover effect if needed
//                     },
//                   },
//                   '& .MuiPaginationItem-ellipsis': {
//                     backgroundColor: 'transparent',
//                     color: '#9054DE',  // Hide the ellipsis
//                   },
//               }}
//               />
//             </Stack>
//             <Button onClick={handleLastPage} className="flex font-bold font-roboto text-[#9054DE] uppercase">Last <BsChevronDoubleRight/> </Button>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Users;



const Users = () => {
  return (
    <div className="overflow-auto vertical-scrollbar">
    <div className="flex flex-col mx-[40px]">
      <h1 className="my-[20px] font-bold font-roboto text-[28px]">Users</h1>

      <div className="flex">
        <form className="relative">
            <IoIosSearch
              className="top-[7px] right-2 absolute"
              size="20px"
              color="gray"
            />
            <input
              className="shadow-md px-4 py-1 rounded-[6px] w-[320px] h-[34px]"
              placeholder="Search..."
              // value={search}
              // onChange={handleSearchChange}
            />
        </form>
      </div>

      <div className="bg-white shadow-inner shadow-slate-500 mt-[24px] rounded-[8px] cursor-pointer">
        <Table>
          <TableCaption>List of Validate Users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Created Date</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center gap-x-2 my-[30px]">
        <div className="flex ml-[20px] text-[16px]">
          <Button className="flex font-bold font-roboto text-[#9054DE] uppercase"><BsChevronDoubleLeft/>First</Button>
          <Stack spacing={1}>
              <Pagination 
                // count={getValidateUser?.meta?.totalPages} 
                // page = {pageCount}
                // onChange={handlePageChange}
                // defaultPage={1}
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
                  color: 'white'
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
            <Button className="flex font-bold font-roboto text-[#9054DE] uppercase">Last <BsChevronDoubleRight/> </Button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Users