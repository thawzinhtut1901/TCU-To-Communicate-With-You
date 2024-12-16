import { HomeInput } from "@/components/ui/input"
import { IoIosSearch } from "react-icons/io"
import "./type.css"
import { useAcceptRequest, useAddFriend, useCancelReject, useCancelRequest, useGetFindUsers, useGetMe } from "@/hooks"
import { Button } from "@/components/ui/button"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

const FindFriendsPage = () => {
  const [searchParams , setSearchParams] = useSearchParams({
    search : "",
  });
  const [search, setSearch] = useState(searchParams.get("search") || ""); 
  const {data: getMe} = useGetMe();
  const {data: getFindUser, refetch} = useGetFindUsers({
    search,
  })
  const addFriend = useAddFriend();
  const cancelRequest = useCancelRequest();
  const [isRequestSent, setIsRequestSent] = useState<number[]>([]);
  const acceptRequest = useAcceptRequest();
  const cancelReject = useCancelReject();
  const navigate = useNavigate();

  useEffect(() => {
    if(acceptRequest.isSuccess) {
      refetch();
    } 
    if(cancelReject.isSuccess) {
      refetch();
    }
    if(cancelRequest.isSuccess) {
      refetch();
    }
  }, [acceptRequest.isSuccess, cancelReject.isSuccess, cancelRequest.isSuccess, refetch])

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
    addFriend.mutate(id, {
      onSuccess: () => {
        setIsRequestSent((prev) => [...prev, id])
      }
    });
  }

  const handleAcceptRequest = (acceptId:number) => {
    acceptRequest.mutate(acceptId);
    // setIsRequestSent(false);
  }

  const handelCancelRequest = (userId: number) => {
    cancelRequest.mutate(userId)
  }

  const handleNavigateToChat = (userId: number) => {
    navigate(`/chats/${userId}`);
  };
  
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col border-2 bg-white bg-opacity-40 rounded-[10px] w-[870px] md:w-[945px] h-[480px] md:h-[700px]">
          <div className="flex justify-center items-center mt-2 md:mt-[15px]">
            <form onSubmit={handleSearchSubmit} className="relative ml-4 md:ml-0">
                <div className="top-[3px] md:-top-[-1px] left-6 absolute border-white bg-black -mt-2 -ml-2 border rounded-full w-3 md:w-4 h-3 md:h-4"></div>
                  <div className="top-0 left-3 md:left-5 absolute inset-y-0 flex items-center pointer-events-none">
                      <IoIosSearch className="text-[16px] text-white md:text-[18px]" />
                  </div>
                  <HomeInput
                      type="text"
                      placeholder="Please type Username that you want to find"
                      className="border-white bg-white bg-opacity-5 shadow-md pl-8 md:pl-14 border rounded-[10px] focus:ring-2 focus:ring-white placeholder:text-black focus:outline-none"
                      value={search}
                      onChange={handleSearchChange}
                  />
            </form>
          </div>
          <div className="flex justify-center items-center">
            <div className="border-slate-500 bg-black bg-opacity-15 m-2 md:m-4 p-4 border rounded-[10px] w-[500px] h-[550px] max-h-[75vh] overflow-auto scrollbar-hide">
              {
                search && getFindUser?.items?.map((find:any) => (
                  <div key={find?.id} className="flex border-2 border-slate-100 bg-white bg-opacity-30 mt-6 rounded-[10px] w-full h-[110px]">
                  <img src={find?.profile} alt="" className="mt-[12px] ml-[12px] rounded-full w-[54px] h-[54px]"/>

                  <div className="flex flex-col mt-[12px] ml-[14px]">
                    <h1 className="font-medium font-primary text-[18px]">{find?.displayName || "Unknown"}</h1>

                    <div className={`mt-1 ${isRequestSent} ? "flex flex-col" : "flex"`}>
                      {
                        find?.friendStatus?.status === "Request" ? (
                          find?.friendStatus?.userOneId === getMe?.id ? (
                            <h1 className="text-[14px] text-slate-600">Request Sent</h1>
                          ) : (
                            <div>
                              <Button
                                onClick={() => handleAcceptRequest(find?.id)}
                                className="bg-blue-500 hover:bg-blue-400 shadow-inner shadow-slate-200 mr-6 font-poppins text-white"
                              >
                                Accept
                              </Button>

                            </div>
 
                          )
                        ) : find?.friendStatus?.status === "Accepted" ? (
                          <Button
                            className="bg-green-500 shadow-inner shadow-slate-200 mr-6 font-poppins text-white"
                          >
                            Friend
                          </Button>
                        ) : (
                          isRequestSent.includes(find?.id) ? (
                            <>
                              <h1 className="text-[14px] text-slate-600">Request Sent</h1>
                              <Button
                                onClick={() => handelCancelRequest(find?.id)}
                                className="bg-black bg-opacity-30 hover:bg-opacity-20 shadow-inner shadow-slate-200 font-poppins"
                              >
                                Cancel
                              </Button>
                            </>
                            
                          ) : (
                            <Button onClick={() => handleAddFriend(find?.id)} className="bg-black bg-opacity-30 hover:bg-opacity-20 shadow-inner shadow-slate-200 mr-6 font-poppins">Add Friend</Button>
                          )
                        )
                      }
                       <Button onClick={() => handleNavigateToChat(find?.id)} className={`bg-black ml-auto bg-opacity-30 hover:bg-opacity-20 shadow-inner shadow-slate-200 font-poppins ${isRequestSent} ? "flex-grow" : "" `}>Sent Message</Button>                      
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