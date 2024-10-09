import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { IoMdSearch } from "react-icons/io";
  import { Button } from "../ui/button";
  import { useAddAdmins, useFetchUsersAccountDetails } from "@/hooks";
  import { useSearchParams } from "react-router-dom";
  import { useEffect, useState } from "react";
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  
  const AddAdminTable = () => {
    const [searchParams, setSearchParams] = useSearchParams({
      search: "",
    });
    const [pageCount, setPageCount] = useState<number>(
      parseInt(searchParams.get("page") || "1", 10)
    );
    const [search, setSearch] = useState(searchParams.get("search") || "");
    const [limit] = useState<number>(10);
    const {data: getAccounts} = useFetchUsersAccountDetails({
      search,
      pageCount, 
      limit,
    });
    const addAdmin = useAddAdmins();
  
    console.log(getAccounts)
  
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
  
    // const handlePageChange = (
    //   event: React.ChangeEvent<unknown>,
    //   value: number
    // ) => {
    //   event.preventDefault();
    //   setPageCount(value);
    // };
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    };
  
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPageCount(1); // Reset to the first page whenever a new search is made
    };
  
    const handleAddAdmin = (userId: number) => {
      addAdmin.mutate(userId); 
    }
  
    return (
      <div>
        <form onSubmit={handleSearchSubmit} className="relative mb-4">
          <IoMdSearch className="top-2 left-3 absolute" size="20px" color="gray" />
          <input
            className="border-slate-400 shadow-sm py-1 pr-4 pl-10 border rounded-[6px] w-[320px] h-[34px]"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
          />
        </form>
        <Table>
        <TableCaption>Here, A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Profile</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Register Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {
          getAccounts?.items?.map((user:any) => (
            <TableRow key={user?.id}>
              <TableCell><img src={user.Profile} alt="" className="rounded-full w-[25px] h-[25px]"/></TableCell>
              <TableCell>{user?.userName}</TableCell>
              <TableCell>{formatDate(user?.createdAt)}</TableCell>
              <TableCell className="text-right">
                <Button onClick={() => handleAddAdmin(user.id)} className="bg-blue-500 hover:bg-blue-400">Add Admin</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {/* <TableCell colSpan={3}>Total</TableCell> */}
            <TableCell>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                // onClick={() => table.previousPage()}
                // disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                // onClick={() => table.nextPage()}
                // disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
          </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }
  
  export default AddAdminTable;