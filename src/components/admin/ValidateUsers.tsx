import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { useValidateUsers } from "@/hooks";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { AdminDeleteUser } from "../adminUI";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const ValidateUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState<number>(
    parseInt(searchParams.get("page") || "1", 10)
  );
  const [limit] = useState<number>(10);
  const {data: getValidateUser, refetch} = useValidateUsers({
    pageCount,
    limit
  });

  useEffect(() => {
    const params:any = {};
    if(pageCount){
      params.page = pageCount.toString()
    }
    if(limit){
      params.limit = limit.toString()
    }
    setSearchParams(params)
  }, [pageCount, limit]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    event.preventDefault();
    setPageCount(value)
  }

  const handleFirstPage = () => {
    setPageCount(1)
  }

  const handleLastPage = () => {
    setPageCount(getValidateUser?.meta?.totalPages || 1)
  }


  return (
    <div className="overflow-auto vertical-scrollbar">
      <div className="flex flex-col mx-[40px]">
        <h1 className="my-[20px] font-bold font-roboto text-[28px]">Validate Users</h1>

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
                {
                  getValidateUser?.items?.map((validate:any) => (
                    <TableRow key={validate?.id}>
                      <TableCell></TableCell>
                      <TableCell className="text-center">{validate?.email}</TableCell>
                      <TableCell className="text-center">{formatDate(validate?.createdAt)}</TableCell>
                      <TableCell className="flex justify-center gap-x-5 mx-auto">
                        <Button className="bg-green-500 hover:bg-green-400">Approve</Button>
                        <AdminDeleteUser userId={validate?.id} refetch={refetch}/>
                        {/* <Button className="bg-red-500 hover:bg-red-400">Delete</Button> */}
                      </TableCell>
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
                  count={getValidateUser?.meta?.totalPages} 
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

export default ValidateUsers