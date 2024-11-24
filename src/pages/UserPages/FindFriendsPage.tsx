import { HomeInput } from "@/components/ui/input"
import { BiSolidCircle } from "react-icons/bi"
import { IoIosSearch } from "react-icons/io"
import "./type.css"
import { useAcceptRequest, useAddFriend, useCancelRequest, useGetAllFriendRequest, useGetFindUsers, useGetMe } from "@/hooks"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

const FindFriendsPage = () => {
  const [searchParams , setSearchParams] = useSearchParams({
    search : "",
  });
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const {data: getAllFris, refetch} = useGetAllFriendRequest();  
  console.log(getAllFris)
  const {data: getMe} = useGetMe();
  const {data: getFindUser} = useGetFindUsers({
    search,
  })
  const addFriend = useAddFriend();
  const [isRequestSent, setIsRequestSent] = useState(false);
  const acceptRequest = useAcceptRequest();
  const cancelRequest = useCancelRequest();

  useEffect(() => {
    if(acceptRequest.isSuccess) {
      refetch();
    } 
    if(cancelRequest.isSuccess) {
      refetch();
    }
  }, [acceptRequest.isSuccess, cancelRequest.isSuccess, refetch])

  useEffect(() => {
    const params:any = {};
    if(search) {
      params.search = search;
    };
    setSearchParams(params);
  }, [search]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const handleAddFriend = (id: number) => {
    addFriend.mutate(id);
    setIsRequestSent(true);
  }

  const handleAcceptRequest = (acceptId:number) => {
    acceptRequest.mutate(acceptId);
    setIsRequestSent(false);
  }

  const handleCancelRequest = (cancelId:number) => {
    cancelRequest.mutate(cancelId);
    setIsRequestSent(false);
  }
  
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mt-2 md:mt-0">
        <form onSubmit={handleSearchSubmit} className="relative ml-4 md:ml-0">
            <div className="top-[3px] md:-top-[2px] left-6 absolute bg-blue-950 -mt-2 -ml-2 border border-blue-500 rounded-full w-3 md:w-5 h-3 md:h-5"></div>
              <div className="top-0 left-3 md:left-5 absolute inset-y-0 flex items-center pointer-events-none">
                  <IoIosSearch className="text-[16px] text-white md:text-[18px]" />
              </div>
              <HomeInput
                  type="text"
                  placeholder="Please type Username that you want to find"
                  className="bg-white bg-opacity-40 shadow-md md:py-2 pl-8 md:pl-14 border border-blue-500 rounded-[10px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  value={search}
                  onChange={handleSearchChange}
              />
        </form>

        <div className="md:flex hidden">
          <div className="flex gap-x-[2px] md:gap-x-1 ml-1 md:ml-3">
            <BiSolidCircle className="mt-[3px] border rounded-full w-[10px] md:w-[15px] h-[10px] md:h-[15px] text-[#591DA9]"/>
            <h1 className="text-[12px] text-white md:text-[16px]">Username</h1>
          </div>
          <div className="flex gap-x-[2px] md:gap-x-1 ml-1 md:ml-3">
            <BiSolidCircle className="mt-[3px] border rounded-full w-[10px] md:w-[15px] h-[10px] md:h-[15px] text-slate-700"/>
            <h1 className="text-[12px] text-white md:text-[16px]">Group Name</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[25px]">
        <div className="flex border-2 bg-white bg-opacity-40 rounded-[10px] w-[870px] md:w-11/12 h-[480px] md:h-[600px]">
    
          {/* Friend */}
          <div className="border-slate-500 bg-black bg-opacity-25 m-2 md:m-4 p-4 border rounded-[10px] w-2/3 md:w-2/5">
            <div className="bg-[#2264E5] bg-opacity-15 mx-auto py-1 md:py-0 md:p-2 rounded-[10px] md:w-[150px]">
              <h1 className="text-[16px] text-center text-white md:text-[20px]">Friend Request</h1>
            </div>

            {/* To Friends Loop */}
            <div className="flex flex-col mt-4 max-h-[75vh] overflow-auto scrollbar-hide">
              {getAllFris?.items
                ?.filter((request: any) => request?.status === "Request")
                .map((request: any) => {
                  const isUserOne = getMe?.id === request.userOneId;
                  const user = isUserOne ? request.userTwo : request.userOne;

                  return (
                    <div
                      key={user?.id}
                      className="flex border-2 border-slate-100 bg-white bg-opacity-30 rounded-[10px] w-full h-[110px]"
                    >
                      <img
                        src={user?.profile}
                        alt=""
                        className="mt-[12px] ml-[12px] rounded-full w-[54px] h-[54px]"
                      />

                      <div className="flex flex-col mt-[12px] ml-[14px]">
                        <h1 className="font-medium font-primary text-[18px]">
                          {user?.displayName}
                        </h1>

                        <div className="flex gap-x-6 mt-[13px]">
                          <Button 
                            onClick={() => handleAcceptRequest(request?.id)}
                            className="bg-black bg-opacity-30 hover:bg-opacity-20 shadow-inner shadow-slate-200 font-poppins">
                            Accept
                          </Button>
                          <Button
                            onClick={() => handleCancelRequest(request?.id)}
                            className="bg-black bg-opacity-30 hover:bg-opacity-20 shadow-inner shadow-slate-200 font-poppins"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

          </div>

          {/* Search Showing To Add */}
          <div className="border-slate-500 bg-black bg-opacity-15 m-2 md:m-4 p-4 border rounded-[10px] w-full">
            {
              search && getFindUser?.items?.map((find:any) => (
                <div key={find?.id} className="flex border-2 border-slate-100 bg-white bg-opacity-30 mt-6 rounded-[10px] w-full h-[110px]">
                <img src={find?.profile} alt="" className="mt-[12px] ml-[12px] rounded-full w-[54px] h-[54px]"/>

                <div className="flex flex-col mt-[12px] ml-[14px]">
                  <h1 className="font-medium font-primary text-[18px]">{find?.displayName}</h1>

                  <div className={`gap-x-6 ${isRequestSent} ? "flex flex-col" : "flex mt-[13px]"`}>
                    {
                      !isRequestSent ? (
                        <Button onClick={() => handleAddFriend(find?.id)} className="bg-black bg-opacity-30 hover:bg-opacity-20 shadow-inner shadow-slate-200 font-poppins">Add Friend</Button>
                      ) : (
                        <h1 className="text-[14px] text-slate-600">Request Sent</h1>
                      )
                    }
                    <Button className={`bg-black bg-opacity-30 hover:bg-opacity-20 shadow-inner shadow-slate-200 font-poppins ${isRequestSent} ? "flex-grow" : "" `}>Cancel</Button>
                  </div>
                </div>
              </div>
              ))
            }
              {/* { search && getFindUser?.items?.length > 0 ? (
                
                getFindUser?.items?.filter((findUser: any) => findUser.username && findUser.displayName)
                .map((findUser:any) => (
                  <div key={findUser?.id} className="flex border-2 border-slate-100 bg-white bg-opacity-30 rounded-[10px] w-full h-[110px]">
                  <img src={findUser?.profile} alt="" className="mt-[12px] ml-[12px] rounded-full w-[54px] h-[54px]"/>
  
                  <div className="flex flex-col mt-[12px] ml-[14px]">
                    <h1 className="font-medium font-primary text-[18px]">{findUser?.displayName}</h1>
  
                    <div className="flex gap-x-6 mt-[13px]">
                      <Button className="bg-black bg-opacity-30 hover:bg-opacity-20 shadow-inner shadow-slate-200 font-poppins">Add</Button>
                      <Button className="bg-black bg-opacity-30 hover:bg-opacity-20 shadow-inner shadow-slate-200 font-poppins">Cancel</Button>
                    </div>
                  </div>
                </div>
                )) ) : null} */}

            {/* {search && (!getFindUser?.items || getFindUser.items.every((user: any) => !user.username || !user.displayName)) && (
                <div className="flex justify-center mt-[122px]">
                  <h1 className="font-poppins text-[24px] text-white">Oops! No User Found</h1>
                </div>
              )} */}
          </div>
        </div>


      </div>
      
    </div>
  )
}

export default FindFriendsPage