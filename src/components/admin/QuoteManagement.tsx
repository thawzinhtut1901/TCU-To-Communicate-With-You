import { IoIosSearch } from "react-icons/io"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"
import { BiSolidCircle } from "react-icons/bi"
import { RiFilter2Fill } from "react-icons/ri";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Pagination, Stack } from "@mui/material";
import { CreateAdminQuote } from "../adminUI";
import { useDeleteQuote, useGetAllQuotes } from "@/hooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const QuoteManagement = () => {
  const [searchParams , setSearchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState<number>(
    parseInt(searchParams.get("page") || "1", 10)
  );
  const [limit] = useState<number>(10)
  const {data: getAllQuote, isLoading, refetch} = useGetAllQuotes({
    pageCount,
    limit
  });
  const deleteQuote = useDeleteQuote();

  if(!isLoading) {
  console.log(getAllQuote);
  }

  useEffect(() => {
    const params: any = {};
    if(pageCount) {
      params.page = pageCount.toString()
    }
    if(limit) {
      params.limit = limit.toString()
    }
    setSearchParams(params);
  }, [pageCount, limit]);

  useEffect(() => {
    if(deleteQuote.isSuccess) {
      refetch();
    }
  }, [deleteQuote.isSuccess, refetch]);

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
    setPageCount(getAllQuote?.meta?.totalPages || 1)
  }

  const handleDelete = (quoteId:number) => {
    deleteQuote.mutate(quoteId)
  }

  return (
    <div className="overflow-auto vertical-scrollbar">
      <div className="flex flex-col mx-[40px]">
        <h1 className="my-[20px] font-bold font-roboto text-[28px]">Quotes Management</h1>

        <div className="flex">
          <div className="relative bg-white shadow-md mr-2 p-2 rounded-[10px] h-[35px]">
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

          <div className="flex gap-x-6 ml-auto">
            <CreateAdminQuote/>
          </div>
        </div>

        <div className="bg-white shadow-inner shadow-slate-500 mt-[24px] rounded-[8px] cursor-pointer">
          <Table>
            <TableCaption>A list of Quotes.</TableCaption>
            <TableHeader>
              <TableRow className="font-primary text-[16px]">
                <TableHead></TableHead>
                {/* <TableHead></TableHead> */}
                <TableHead>Username</TableHead>
                <TableHead>Quotes</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="mx-auto text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            {
              getAllQuote?.items?.map((quote:any) => (
                <TableBody key={quote?.id}>
                <TableRow >
                  <TableCell></TableCell>
                  <TableCell key={quote?.user?.id} className="text-[#007AFF] text-[14px]">{quote?.user?.userName}</TableCell>
                  <TableCell className="text-[14px] text-slate-700">{quote?.quote}</TableCell>
                  <TableCell>
                    <div className="flex justify-center items-center gap-x-2 text-[#F98100] text-[14px]">
                      <BiSolidCircle className="border-[#914F08] border rounded-full w-[12px] h-[12px] text-[#FC970A]" /> 
                      {quote?.status}
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-center gap-x-5 mx-auto">
                    <Button className="bg-green-500 hover:bg-green-400">Approve</Button>
                    <Button onClick={() => handleDelete(quote?.id)} className="bg-red-500 hover:bg-red-400">Delete</Button>
                  </TableCell>
                </TableRow>
            </TableBody>
              ))
            }

          </Table>
        </div>
        
        <div className="flex justify-center gap-x-2 my-[30px]">
          <div className="flex ml-[20px] text-[16px]">
            <Button onClick={handleFirstPage} className="flex font-bold font-roboto text-[#9054DE] uppercase"><BsChevronDoubleLeft/>First</Button>
            <Stack spacing={1}>
                <Pagination 
                  count={getAllQuote?.meta?.totalPages} 
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

export default QuoteManagement