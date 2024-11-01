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
import { CreateAdminQuote, PublishQuote } from "../adminUI";
import { useAdminUpdateQuote, useDeleteQuote, useGetAllQuotes } from "@/hooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const QuoteManagement = () => {
  const [searchParams , setSearchParams] = useSearchParams({
    search : "",
    status : "",
  });
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [pageCount, setPageCount] = useState<number>(
    parseInt(searchParams.get("page") || "1", 10)
  );
  const [limit] = useState<number>(10)
  const {data: getAllQuote, isLoading, refetch} = useGetAllQuotes({
    search,
    status,
    pageCount,
    limit
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedQuoteId, setSelectedQuoteId] = useState<number | null>(null);
  const updateQuote = useAdminUpdateQuote();
  const deleteQuote = useDeleteQuote();

  if(!isLoading) {
  console.log(getAllQuote);
  }

  useEffect(() => {
    const params: any = {};
    if(search) {
      params.search = search;
    }
    if(status) {
      params.status = status;
    }
    if(pageCount) {
      params.page = pageCount.toString()
    }
    if(limit) {
      params.limit = limit.toString()
    }
    setSearchParams(params);
  }, [search, status, pageCount, limit]);

  useEffect(() => {
    if(updateQuote.isSuccess) {
      refetch();
    }
  }, [updateQuote.isSuccess, refetch]);

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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPageCount(1);
  }

  const handleFirstPage = () => {
    setPageCount(1);
  };

  const handleLastPage = () => {
    setPageCount(getAllQuote?.meta?.totalPages || 1)
  }

  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleRowClick = (quoteId: number) => {
    setSelectedQuoteId(quoteId); 
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedQuoteId(null);
  }

  const handleSortChange = (sortOption: string) => {
    setStatus(sortOption);
    setIsDropdownOpen(false);
  }

  const handleApprove = (quoteId: number) => {
    updateQuote.mutate({quoteId, status: "accept"})
  } 

  const handleReject = (quoteId: number ) => {
    updateQuote.mutate({quoteId, status: "reject"})
  }

  const handleDelete = (quoteId:number) => {
    deleteQuote.mutate(quoteId)
  }

  return (
    <div className="overflow-auto vertical-scrollbar">
      <div className="flex flex-col mx-[40px]">
        <h1 className="my-[20px] font-bold font-roboto text-[28px]">Quotes Management</h1>

        <div className="flex">
          <div className="relative bg-white shadow-md mr-2 p-2 rounded-[10px] h-[35px] cursor-pointer">
              <RiFilter2Fill onClick={handleDropDown} className="w-[18px] h-[18px]"/>
            {/* <img src={Fliter} alt="" /> */}

            {
              isDropdownOpen && (
                <div className="top-full left-0 z-10 absolute bg-white shadow-lg mt-2 py-2 rounded-md w-48">
                  <button onClick={() => handleSortChange("accept")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    Accept
                  </button>
                  <button onClick={() => handleSortChange("pending")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    Pending
                  </button>
                  <button onClick={() => handleSortChange("reject")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    Reject
                  </button>
                </div>
              )
            }
          </div>

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

          <div className="flex gap-x-6 ml-auto">
            {/* <PublishQuote/> */}
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
                <TableHead className="text-center">Username</TableHead>
                <TableHead className="text-center">Quotes</TableHead>
                {
                  status === "accept" && (
                    <TableHead className="text-center">Published Time</TableHead>
                  )
                }
                <TableHead className="text-center">Status</TableHead>
                {
                  status && (
                    <TableHead className="mx-auto text-center">Action</TableHead>
                  )
                }
                {/* {
                  status === "accept" && (
                    <TableHead className="text-center">Publish To All Users</TableHead>
                  )
                }
                 */}
              </TableRow>
            </TableHeader>
            {
              getAllQuote?.items?.map((quote:any) => (
                <TableBody key={quote?.id}>
                <TableRow onClick={() => handleRowClick(quote?.id)}>
                  <TableCell></TableCell>
                  <TableCell key={quote?.user?.id} className="text-[#007AFF] text-[14px] text-center">{quote?.user?.userName}</TableCell>
                  <TableCell className="text-[14px] text-center text-slate-700">{quote?.quote}</TableCell>
                  {
                    status === "accept" && (
                      <TableCell className="text-[14px] text-center text-slate-700">Now Published</TableCell>
                    )
                  }
                  <TableCell>
                    <div className={`flex justify-center items-center gap-x-2  text-[14px] ${quote?.status === "accept" ? "text-[#34A853]" : quote?.status === "pending" ? "text-[#F98100]" : "text-[#E10101]"}`}>
                      <BiSolidCircle className={`border rounded-full w-[12px] h-[12px] ${quote?.status === "accept" ? "border-[#52825F] text-[#4B9A52]" : quote?.status === "pending" ? "text-[#FC970A] border-[#914F08]" : "border-[#A83434] text-[#E10101]"}`} /> 
                      {quote?.status}
                    </div>
                  </TableCell>
                  {
                    status && (
                      <TableCell className="flex justify-center gap-x-5 mx-auto">
                      <Button onClick={() => handleApprove(quote?.id)} className={`bg-green-500 hover:bg-green-400 ${quote?.status === "accept" || quote?.status === "reject" ? "hidden" : ""}`}>Approve</Button>
                      <Button onClick={() => handleReject(quote?.id)} className={`bg-red-500 hover:bg-red-400 ${quote?.status === "accept" || quote?.status === "reject" ? "hidden" : ""}`}>Reject</Button>
                      <Button onClick={() => handleDelete(quote?.id)} className={`bg-red-500 hover:bg-red-400 ${quote?.status === "pending" ? "hidden" : ""}`}>Delete</Button>
                    </TableCell>
                    )
                  }
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
      {isDialogOpen && selectedQuoteId !== null && <PublishQuote quoteId={selectedQuoteId} open={isDialogOpen} onClose={handleDialogClose} />}
    </div>
  )
}

export default QuoteManagement;