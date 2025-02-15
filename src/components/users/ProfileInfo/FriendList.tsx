import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableRow,
  } from "@/components/ui/table"
import { FriendOptionDrawer, FriendOptionDrawerDesktop } from "./FriendOptionDrawer";
import "./type.css";
import { IoIosSearch } from "react-icons/io";
import { useGetAllFriends, useGetProfile } from "@/hooks";

const FriendList = () => {
  const {data: getAllFris, refetch} = useGetAllFriends();
  console.log(getAllFris)
  const {data: getMe} = useGetProfile();

  return (
    <div className="cursor-default">
        <h1 className="mt-4 font-medium text-[24px] text-center">Friend List</h1>
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

            <h1 className="mr-6 ml-auto font-medium text-[18px]">{getMe?.friendsCount} Friends</h1>
        </div>
        <div className="mt-4 max-h-[60vh] overflow-auto scrollbar-hide">
            <Table>
            <TableCaption>List of Your Friends.</TableCaption>
            <TableBody>
                {
                    getAllFris?.items?.map((fris:any) => {
                        const isUserOne = getMe?.id === fris.userOneId;
                        const user = isUserOne ? fris.userTwo : fris.userOne; 

                        return (
                            <TableRow key={fris?.id} className="flex items-center">
                            <TableCell></TableCell>
                            <TableCell>
                                <img src={user?.profile} alt="" className="rounded-full w-[60px] h-[60px]"/>
                            </TableCell>
                            <TableCell className="flex flex-col">
                                <h1 className="font-medium text-[18px]">{user?.displayName}</h1>
                                <h3 className="text-[14px]">{user?.friendsCount} Mutual Friends</h3>
                            </TableCell>
                            <TableCell className="ml-auto">
                                <div className="hidden md:flex">
                                    <FriendOptionDrawerDesktop friendChatId={fris?.chat?.id} refetch={refetch} frisId={fris?.userTwoId}/>
                                </div>
                                <div className="md:hidden">
                                    <FriendOptionDrawer/>
                                </div>
                            </TableCell>
    
                        </TableRow>
                        )
                    })
                }
            </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default FriendList