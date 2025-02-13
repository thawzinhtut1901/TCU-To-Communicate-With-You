import { Fliter } from "@/assets";
import { useFetchUsersGroups } from "@/hooks/useAdmin";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
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

const Groups = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    sortBy: "Latest",
  });
  const [pageCount, setPageCount] = useState<number>(
    parseInt(searchParams.get("page") || "1", 10)
  );
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [limit] = useState<number>(10);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "Latest");
  const { data: getGroups } = useFetchUsersGroups({
    sortBy,
    search,
    limit,
    pageCount
  });

  console.log(getGroups)

  useEffect(() => {
    const params: any = {};
    if (search) {
      params.search = search;
    }
    if (sortBy) {
      params.sortBy = sortBy;
    }
    if (limit) {
      params.limit = limit.toString();
    };

    if (pageCount) {
      params.page = pageCount.toString()
    }
    setSearchParams(params);
  }, [search, sortBy, limit, pageCount]);

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
    setPageCount(getGroups?.meta.totalPages || 1);
  };

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

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption);
    setIsDropdownOpen(false)
  }

  return (
    <div className="overflow-auto vertical-scrollbar">
      <div className="flex flex-col mx-[40px]">
        <h1 className="my-[20px] font-bold font-roboto text-[28px]">Groups Details</h1>

        <div className="flex">
          <div className="relative bg-white shadow-md mr-2 p-2 rounded-[10px]">
            <img onClick={toggleDropdown} src={Fliter} alt="" className="w-[18px] h-[18px]" />

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
        </div>

        <div className="bg-white shadow-inner shadow-slate-500 mt-[24px] rounded-[8px] cursor-pointer">
          <Table>
            <TableCaption>List of Groups.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead className="text-center">Group Name</TableHead>
                <TableHead className="text-center">Group Owner</TableHead>
                <TableHead className="text-center">Total Members</TableHead>
                <TableHead className="text-center">Group Type</TableHead>
                {/* <TableHead className="text-center">Group Status</TableHead> */}
                {/* <TableHead className="text-center">Email</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                getGroups?.items?.map((group: any) => (
                  <TableRow key={group?.id}>
                    <TableCell></TableCell>
                    <TableCell className="text-center">{group?.groupName}</TableCell>
                    <TableCell className="text-[#007AFF] text-center">{group?.user?.userName}</TableCell>
                    <TableCell className="text-center">{group?.totalMembers}</TableCell>
                    <TableCell className="text-center">{group?.status}</TableCell>
                    {/* <TableCell key={user?.status?.user_id} className="flex justify-center gap-x-2">
                      <BiSolidCircle className={`mt-[6.2px] border rounded-full w-[8px] h-[8px] ${user?.status?.showMe === "Public" ? "text-[#34A853] border-[#52825F]" : user?.status?.showMe === "Private" ? "text-[#E10101] border-[#A83434]" : "hidden"}`}/>
                      <span className={`${user?.status?.showMe === "Public" ? "text-[#34A853]" : "text-[#E10101]"}`}>{user?.status?.showMe}</span>
                    </TableCell>
                    <TableCell className="text-center">{user?.email}</TableCell> */}
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-center gap-x-2 my-[30px]">
          {
            getGroups?.items?.length !== 0 && (
              <div className="flex ml-[20px] text-[16px]">
                <Button onClick={handleFirstPage} className="flex font-bold font-roboto text-[#9054DE] uppercase"><BsChevronDoubleLeft />First</Button>
                <Stack spacing={1}>
                  <Pagination
                    count={getGroups?.meta?.totalPages}
                    page={pageCount}
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
                <Button onClick={handleLastPage} className="flex font-bold font-roboto text-[#9054DE] uppercase">Last <BsChevronDoubleRight /> </Button>
              </div>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Groups