
import { IoIosSearch } from "react-icons/io";
import "./type.css";
import { BiSolidCircle } from "react-icons/bi";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useValidateUsers } from "@/hooks";
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

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams({
    search: "",
  });
  const [pageCount, setPageCount] = useState<number>(
    parseInt(searchParams.get("page") || "1", 10)
  );
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [limit] = useState<number>(10);
  const {data: getAccounts} = useValidateUsers({
    search,
    pageCount, 
    limit,
  });

  useEffect(() => {
    const params: any = {};
    if(search) {
      params.search = search;
    }
    if(limit) {
      params.limit = limit.toString();
    }
    if(pageCount) {
      params.page = pageCount.toString();
    }
    setSearchParams(params)
  }, [search, pageCount, limit]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setPageCount(value);
  };

  const handleFirstPage = () => {
    setPageCount(1);
  };

  const handleLastPage = () => {
    setPageCount(getAccounts?.meta.totalPages || 1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPageCount(1); 
  };


  return (
    <div className="overflow-auto vertical-scrollbar">
    <div className="flex flex-col mx-[40px]">
      <h1 className="my-[20px] font-bold font-roboto text-[28px]">Users</h1>

      <div className="flex">
        <form onSubmit={handleSearchSubmit} className="relative">
            <IoIosSearch
              className="top-[7px] right-2 absolute"
              size="20px"
              color="gray"
            />
            <input
              className="shadow-md px-4 py-1 rounded-[6px] w-[320px] h-[34px]"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
            />
        </form>
      </div>

      <div className="bg-white shadow-inner shadow-slate-500 mt-[24px] rounded-[8px] cursor-pointer">
        <Table>
          <TableCaption>List of Users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Username</TableHead>
              <TableHead className="text-center">User Status</TableHead>
              <TableHead className="text-center">Gender</TableHead>
              <TableHead className="text-center">Account type</TableHead>
              <TableHead className="text-center">Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              getAccounts?.items?.map((user:any) => (
                <TableRow key={user?.id}>
                  <TableCell></TableCell>
                  <TableCell className="text-center">
                  {user?.profile ? (
                    <img className="rounded-full w-[32px] h-[32px]" src={user.profile} alt="User Avatar" />
                  ) : (
                    <div className="flex justify-center items-center bg-pink-400 rounded-full w-[32px] h-[32px] font-medium text-white">
                      {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
                    </div>
                  )}
                </TableCell>

                  <TableCell className="text-center">{user?.displayName || "Unknown User"}</TableCell>
                  <TableCell className="text-[#007AFF] text-center">{user?.userName}</TableCell>
                  <TableCell className="text-center">{user?.lastSeen}</TableCell>
                  <TableCell className="text-center">{user?.gender}</TableCell>
                  <TableCell key={user?.status?.user_id} className="flex justify-center gap-x-2">
                    <BiSolidCircle className={`mt-[6.2px] border rounded-full w-[8px] h-[8px] ${user?.status?.showMe === "Public" ? "text-[#34A853] border-[#52825F]" : user?.status?.showMe === "Private" ? "text-[#E10101] border-[#A83434]" : "hidden"}`}/>
                    <span className={`${user?.status?.showMe === "Public" ? "text-[#34A853]" : "text-[#E10101]"}`}>{user?.status?.showMe}</span>
                  </TableCell>
                  <TableCell className="text-center">{user?.email}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center gap-x-2 my-[30px]">
        <div className="flex ml-[20px] text-[16px]">
          <Button onClick={handleFirstPage} className="flex font-bold font-roboto text-[#9054DE] uppercase"><BsChevronDoubleLeft/>First</Button>
          <Stack spacing={1}>
              <Pagination 
                count={getAccounts?.meta?.totalPages} 
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
            <Button onClick={handleLastPage} className="flex font-bold font-roboto text-[#9054DE] uppercase">Last <BsChevronDoubleRight/> </Button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Users