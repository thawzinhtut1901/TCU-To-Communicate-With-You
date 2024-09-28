import { Fliter } from "@/assets"
import { BiSolidCircle } from "react-icons/bi"
import { IoIosSearch } from "react-icons/io"
import { Button } from "../ui/button"
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs"
import { Pagination, Stack } from "@mui/material";
import { BsPlusLg } from "react-icons/bs";
import { useAddAdmins, useFetchAdmins, useRemoveAdmin } from "@/hooks"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { AddAdminsData } from "@/types/type"
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

const Admins = () => {
  const [isAddEdit, setIsAddEdit] = useState(false);
  const [addAdminsData, setAddAdminsData] = useState<AddAdminsData>({
    userNameOrEmail: ""
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddAdminsData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleAddAdmin = () => {
    if(addAdminsData.userNameOrEmail) {
      addOtherAdmins.mutate(addAdminsData)
    }
  }

  const handleEdit = () => {
    setIsAddEdit(true)
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

          <div className="flex gap-x-1 bg-[#591DA9] ml-auto p-2 rounded-[8px] text-[14px] text-white">
            {/* <BsPlusLg className="mt-[2px] w-[15px] h-[15px]"/> */}
            {
              isAddEdit ? (
                <div className="flex gap-x-1">
                  <input 
                  type="text" 
                  name="userNameOrEmail"
                  className="px-1 py-[2px] text-black"
                  value={addAdminsData.userNameOrEmail}
                  onChange={handleInputChange}
                  />
                  <BsPlusLg onClick={handleAddAdmin} className="mt-[2px] w-[15px] h-[15px]"/>
                </div>
              ) : (
                <div className="flex gap-x-1">
                  <BsPlusLg className="mt-[2px] w-[15px] h-[15px]"/>
                  <h1 onClick={handleEdit}>Add Admin</h1>
                </div>
              )
            }
          </div>
        </div>

        <div className="bg-white shadow-custom-grey-inner mt-[24px] rounded-[8px] cursor-pointer">
          <ul  className="gap-x-5 grid grid-cols-7 opacity-85 py-[15px] border-b border-b-slate-400 font-primary text-[16px] text-center uppercase">
            <li className="mx-auto"></li>
            <li>admin name</li>
            <li>role</li>
            <li>status</li>
            <li>kpi</li>
            <li>employed</li>
            <li>action</li>
          </ul>

          {
            getAdmins?.items.map((admin:any)=> (
              <ul key={admin?.id} id={admin?.id} className="items-center gap-x-5 grid grid-cols-7 py-[15px] border-b border-b-slate-400 font-roboto text-[14px] text-center"> 
                <li className="mx-auto">
                  <img src={admin.profile} alt="" className="rounded-[8px] w-[40px] h-[40px]"/>
                </li>
                <li className="flex flex-col text-slate-700 text-start">
                  <h1>{admin.displayName}</h1>
                  <p className="text-[12px] text-slate-500">{admin.userName}</p>
                </li>
                <li className="text-slate-500">Manager</li>
                <li className="flex justify-center gap-x-1">
                  <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
                  <span className="text-[#34A853]">Active</span>
                </li>
                <li className="flex justify-center gap-x-1">
                <BiSolidCircle className="border-[#52825F] mt-[6.2px] border rounded-full w-[8px] h-[8px] text-[#34A853]"/>
                  <span className="text-[#34A853]">Good</span>
                </li>
                <li>
                  {new Date(admin.createdAt).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </li>
                <AlertDialog>
                  <AlertDialogTrigger className="flex justify-center items-center gap-x-1 bg-red-600 mr-2 rounded-[10px] h-[40px] text-white">Remove <MdDeleteForever className="w-[18px] h-[18px]"/></AlertDialogTrigger>
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
                {/* <li onClick={() => handleRemoveAdmin(admin.id)} className="flex justify-center items-center gap-x-1 bg-red-600 mr-2 rounded-[10px] h-[40px] text-white">
                  Remove
                  <MdDeleteForever className="w-[18px] h-[18px]"/>
                </li> */}
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

              <div className="flex ml-[20px] text-[16px]">
                <Button className="flex font-bold font-roboto text-[#9054DE] uppercase"><BsChevronDoubleLeft/>First</Button>
                <Stack spacing={1}>
                  <Pagination 
                    count={getAdmins?.meta.totalPages} 
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
                <Button className="flex font-bold font-roboto text-[#9054DE] uppercase">Last <BsChevronDoubleRight/> </Button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Admins