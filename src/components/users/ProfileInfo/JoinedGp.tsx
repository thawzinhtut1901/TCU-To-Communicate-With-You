import { friSuggestionProfile } from "@/assets"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableRow,
  } from "@/components/ui/table"
import { FriendOptionDrawer } from "./FriendOptionDrawer";
import { BsThreeDots } from "react-icons/bs"
import "./type.css";
import { IoIosSearch } from "react-icons/io";

const JoinedGp = () => {
  return (
    <div className="cursor-default">
        <h1 className="mt-4 font-medium text-[24px] text-center">Joined Group List</h1>
        <div className="flex items-center mt-4 ml-[20px]">
            <form className="relative">
                <IoIosSearch
                className="top-[7px] right-2 absolute"
                size="20px"
                color="gray"
                />
                <input
                    className="shadow-md px-4 py-1 rounded-[10px] w-[320px] h-[34px]"
                    placeholder="Search..."
                    //   value={search}
                    //   onChange={handleSearchChange}
                />
            </form>

            <h1 className="mr-6 ml-auto font-medium text-[18px]">168 Groups</h1>
        </div>
        <div className="mt-4 max-h-[60vh] overflow-auto scrollbar-hide">
            <Table>
            <TableCaption>List of Your Groups.</TableCaption>
            <TableBody>
                <TableRow className="flex items-center">
                    <TableCell></TableCell>
                    <TableCell>
                        <img src={friSuggestionProfile} alt="" className="rounded-full w-[60px] h-[60px]"/>
                    </TableCell>
                    <TableCell className="flex flex-col">
                        <h1 className="font-medium text-[18px]">Thaw Zin</h1>
                        <h3 className="text-[14px]">16K Subscribers</h3>
                    </TableCell>
                    <TableCell className="ml-auto">
                        <BsThreeDots className="w-[18px] h-[18px]"/>
                        <div className="md:hidden">
                            <FriendOptionDrawer/>
                        </div>
                    </TableCell>

                </TableRow>
                <TableRow className="flex items-center">
                    <TableCell></TableCell>
                    <TableCell>
                        <img src={friSuggestionProfile} alt="" className="rounded-full w-[60px] h-[60px]"/>
                    </TableCell>
                    <TableCell className="flex flex-col">
                        <h1 className="font-medium text-[18px]">Thaw Zin</h1>
                        <h3 className="text-[14px]">16K Subscribers</h3>
                    </TableCell>
                    <TableCell className="ml-auto">
                        <BsThreeDots className="w-[18px] h-[18px]"/>
                        <div className="md:hidden">
                            <FriendOptionDrawer/>
                        </div>
                    </TableCell>

                </TableRow>
                <TableRow className="flex items-center">
                    <TableCell></TableCell>
                    <TableCell>
                        <img src={friSuggestionProfile} alt="" className="rounded-full w-[60px] h-[60px]"/>
                    </TableCell>
                    <TableCell className="flex flex-col">
                        <h1 className="font-medium text-[18px]">Thaw Zin</h1>
                        <h3 className="text-[14px]">16K Subscribers</h3>
                    </TableCell>
                    <TableCell className="ml-auto">
                        <BsThreeDots className="w-[18px] h-[18px]"/>
                        <div className="md:hidden">
                            <FriendOptionDrawer/>
                        </div>
                    </TableCell>

                </TableRow>
                <TableRow className="flex items-center">
                    <TableCell></TableCell>
                    <TableCell>
                        <img src={friSuggestionProfile} alt="" className="rounded-full w-[60px] h-[60px]"/>
                    </TableCell>
                    <TableCell className="flex flex-col">
                        <h1 className="font-medium text-[18px]">Thaw Zin</h1>
                        <h3 className="text-[14px]">16K Subscribers</h3>
                    </TableCell>
                    <TableCell className="ml-auto">
                        <BsThreeDots className="w-[18px] h-[18px]"/>
                        <div className="md:hidden">
                            <FriendOptionDrawer/>
                        </div>
                    </TableCell>

                </TableRow>
                <TableRow className="flex items-center">
                    <TableCell></TableCell>
                    <TableCell>
                        <img src={friSuggestionProfile} alt="" className="rounded-full w-[60px] h-[60px]"/>
                    </TableCell>
                    <TableCell className="flex flex-col">
                        <h1 className="font-medium text-[18px]">Thaw Zin</h1>
                        <h3 className="text-[14px]">16K Subscribers</h3>
                    </TableCell>
                    <TableCell className="ml-auto">
                        <BsThreeDots className="w-[18px] h-[18px]"/>
                        <div className="md:hidden">
                            <FriendOptionDrawer/>
                        </div>
                    </TableCell>

                </TableRow>
                <TableRow className="flex items-center">
                    <TableCell></TableCell>
                    <TableCell>
                        <img src={friSuggestionProfile} alt="" className="rounded-full w-[60px] h-[60px]"/>
                    </TableCell>
                    <TableCell className="flex flex-col">
                        <h1 className="font-medium text-[18px]">Thaw Zin</h1>
                        <h3 className="text-[14px]">16K Subscribers</h3>
                    </TableCell>
                    <TableCell className="ml-auto">
                        <BsThreeDots className="w-[18px] h-[18px]"/>
                        <div className="md:hidden">
                            <FriendOptionDrawer/>
                        </div>
                    </TableCell>

                </TableRow>
                <TableRow className="flex items-center">
                    <TableCell></TableCell>
                    <TableCell>
                        <img src={friSuggestionProfile} alt="" className="rounded-full w-[60px] h-[60px]"/>
                    </TableCell>
                    <TableCell className="flex flex-col">
                        <h1 className="font-medium text-[18px]">Thaw Zin</h1>
                        <h3 className="text-[14px]">16K Subscribers</h3>
                    </TableCell>
                    <TableCell className="ml-auto">
                        <BsThreeDots className="w-[18px] h-[18px]"/>
                        <div className="md:hidden">
                            <FriendOptionDrawer/>
                        </div>
                    </TableCell>

                </TableRow>
                <TableRow className="flex items-center">
                    <TableCell></TableCell>
                    <TableCell>
                        <img src={friSuggestionProfile} alt="" className="rounded-full w-[60px] h-[60px]"/>
                    </TableCell>
                    <TableCell className="flex flex-col">
                        <h1 className="font-medium text-[18px]">Thaw Zin</h1>
                        <h3 className="text-[14px]">16K Subscribers</h3>
                    </TableCell>
                    <TableCell className="ml-auto">
                        <BsThreeDots className="w-[18px] h-[18px]"/>
                        <div className="md:hidden">
                            <FriendOptionDrawer/>
                        </div>
                    </TableCell>

                </TableRow>
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
            </Table>
        </div>
    </div>
  )
}

export default JoinedGp