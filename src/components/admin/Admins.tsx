import { Fliter } from "@/assets"
import { IoIosSearch } from "react-icons/io"
import { Button } from "../ui/button"
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs"
import { Pagination, Stack } from "@mui/material";
import { useAddAdmins, useFetchAdmins, useRemoveAdmin } from "@/hooks"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { MdDeleteForever } from "react-icons/md"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AddAdmin, CreateNewAdmin } from "../adminUI"
import Swal from "sweetalert2"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Admins = () => {
  const addOtherAdmins = useAddAdmins();
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    sortBy: "Latest"
  });
  const [pageCount, setPageCount] = useState<number>(
    parseInt(searchParams.get("page") || "1", 10)
  );
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [limit] = useState<number>(10);
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "Latest")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {data: getAdmins, isLoading, refetch} = useFetchAdmins({
    search,
    sortBy,
    pageCount,
    limit,
  });
  const removeAdmin = useRemoveAdmin();
  
  if(!isLoading) {
    console.log(getAdmins);
  }

  useEffect(() => {
    if(addOtherAdmins.isSuccess) {
      refetch()
    }
  }, [addOtherAdmins.isSuccess, refetch])

  useEffect(() => {
    if(removeAdmin.isSuccess) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Admin Removed Successfully!",
        timer: 2000,
      })
      refetch()
    }
  }, [removeAdmin.isSuccess, refetch])

  useEffect(() => {
    const params: any = {};
    if(search) {
      params.search = search;
    }
    if(sortBy) {
      params.sortBy = sortBy;
    }
    if(limit) {
      params.limit = limit.toString();
    }
    if(pageCount) {
      params.page = pageCount.toString();
    }
    setSearchParams(params)
  }, [search, sortBy, pageCount, limit]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setPageCount(value);
  };


  const handleRemoveAdmin = (userId: number) => {
    removeAdmin.mutate(userId); 
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPageCount(1); // Reset to the first page whenever a new search is made
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleSortChange = (sortOption : string) => {
    setSortBy(sortOption);
    setIsDropdownOpen(false)
  }
  
  return (
    <div className="overflow-auto vertical-scrollbar">
      <div className="flex flex-col mx-[40px]">
        <h1 className="my-[20px] font-bold font-roboto text-[28px]">Admins</h1>

        <div className="flex">
          <div className="relative bg-white shadow-md mr-2 p-2 rounded-[10px]">
            <img onClick={toggleDropdown} src={Fliter} alt="" className="w-[18px] h-[18px]"/>

            {
              isDropdownOpen && (
                <div className="top-full left-0 z-10 absolute bg-white shadow-lg mt-2 py-2 rounded-md w-48">
                  <button onClick={() => handleSortChange("A-Z")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    A-Z
                  </button>
                  <button onClick={() => handleSortChange("Z-A")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    Z-A
                  </button>
                  <button onClick={() => handleSortChange("Latest")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    Latest
                  </button>
                  <button onClick={() => handleSortChange("Oldest")} className="block hover:bg-gray-100 px-4 py-2 w-full text-left">
                    Oldest
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

          <div className="flex ml-auto">
          <div className="mr-3">
            <CreateNewAdmin refetch={refetch}/>
          </div>
          

          <div className="flex">
            <AddAdmin/>
          </div>
          </div>
        </div>

        <div className="bg-white shadow-inner shadow-slate-500 mt-[24px] rounded-[8px] cursor-pointer">
          <Table>
            <TableCaption>List of Admins.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead className="text-center">Profile</TableHead>
                <TableHead className="text-center">Admin Name</TableHead>
                <TableHead className="text-center">Role</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Employed</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                getAdmins?.items?.map((admin:any)=> (
                  <TableRow key={admin?.id}>
                    <TableCell></TableCell>
                    <TableCell className="text-center"><img src={admin?.profile} alt="" className="rounded-full w-[40px] h-[40px]"/></TableCell>
                    <TableCell className="flex flex-col justify-center items-center text-slate-700">
                      <h1 className="text-[14px]">{admin?.displayName}</h1>
                      <h3 className="text-[12px] text-slate-500">{admin?.userName}</h3>
                    </TableCell>
                    <TableCell key={admin?.adminInfo?.id} className="text-center">{admin?.adminInfo?.adminPosition}</TableCell>
                    <TableCell className="text-center">Active</TableCell>
                    <TableCell className="text-center">
                      {new Date(admin?.createdAt).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      })}
                  </TableCell>

                    <TableCell className="flex justify-center items-center">
                    <AlertDialog>
                      <AlertDialogTrigger className="flex gap-x-1 bg-red-600 p-2 rounded-[10px] text-white">Remove <MdDeleteForever className="mt-[3px] w-[16px] h-[16px]"/></AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure to Remove?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure to remove this admin from Admin Team?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-blue-600" onClick={() => handleRemoveAdmin(admin.id)}>Yes</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-center gap-x-2 my-[30px]">
              <div className="flex ml-[20px] text-[16px]">
                <Button className="flex font-bold font-roboto text-[#9054DE] uppercase"><BsChevronDoubleLeft/>First</Button>
                <Stack spacing={1}>
                  <Pagination 
                    count={getAdmins?.meta?.totalPages} 
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
                <Button className="flex font-bold font-roboto text-[#9054DE] uppercase">Last <BsChevronDoubleRight/> </Button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Admins