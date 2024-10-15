import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IoIosSearch } from "react-icons/io"
import { RiFilter2Fill } from "react-icons/ri"
import { Button } from "../ui/button"
import { Pagination, Stack } from "@mui/material";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const UserReports = () => {
  return (
    <div className="overflow-auto vertical-scrollbar">
    <div className="flex flex-col mx-[40px]">
      <h1 className="my-[20px] font-bold font-roboto text-[28px]">Users Reports</h1>

      <div className="flex">
          <div className="relative bg-white shadow-md mr-2 p-2 rounded-[10px]">
              <RiFilter2Fill className="w-[18px] h-[18px]"/>
            {/* <img src={Fliter} alt="" /> */}

            {/* {
              isDropdownOpen && (
                <div className="top-full left-0 z-10 absolute bg-white shadow-lg mt-2 py-2 rounded-md w-48">
                  <button className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    A-Z
                  </button>
                  <button className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    Z-A
                  </button>
                  <button className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    Latest
                  </button>
                  <button className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    Oldest
                  </button>
                </div>
              )
            } */}
          </div>

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
          <TableCaption>List of User Report To You.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className="text-center">Reporter Username</TableHead>
              <TableHead className="text-center">Reported Username or Group</TableHead>
              <TableHead className="text-center">Report Description</TableHead>
              <TableHead className="text-center">Reported Type</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              <TableRow>
                <TableCell>
                <input type="checkbox" />
                </TableCell>
                <TableCell className="text-center">@Toli_Moli</TableCell>
                <TableCell className="text-center">@mal_mal</TableCell>
                <TableCell className="text-center">Harassments</TableCell>
                <TableCell className="text-center">Account</TableCell>
                <TableCell className="text-center">
                  <Button className="bg-purple-700 hover:bg-purple-600">Click</Button>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center gap-x-2 my-[30px]">
          <div className="flex ml-[20px] text-[16px]">
            <Button className="flex font-bold font-roboto text-[#9054DE] hover:text-purple-500 uppercase"><BsChevronDoubleLeft/>First</Button>
            <Stack spacing={1}>
                <Pagination 
                  // count={getGroups?.meta?.totalPages} 
                  // page = {pageCount}
                  // onChange={handlePageChange}
                  defaultPage={1}
                  boundaryCount={1}
                  variant="outlined" 
                  shape="rounded" 
                  sx={{
                    '& .MuiPaginationItem-root': {
                    backgroundColor: '#9054DE',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#9333EA',
                    },
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

export default UserReports